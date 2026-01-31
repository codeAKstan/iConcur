import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import crypto from 'crypto';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-this-in-env';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.redirect(new URL('/login?error=Google auth failed', request.url));
  }

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=No code provided', request.url));
  }

  try {
    const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
    const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
    const REDIRECT_URI = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/auth/google/callback`;

    if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET) {
      throw new Error('Google credentials not configured');
    }

    // Exchange code for tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      console.error('Token exchange failed:', tokenData);
      throw new Error('Failed to exchange token');
    }

    // Get user info
    const userResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
      },
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('User info fetch failed:', userData);
      throw new Error('Failed to fetch user info');
    }

    await dbConnect();

    // Find or create user
    let user = await User.findOne({ 
      $or: [
        { googleId: userData.id },
        { email: userData.email }
      ]
    });

    if (user) {
      // Update googleId if not present (linking accounts)
      if (!user.googleId) {
        user.googleId = userData.id;
        // Update avatar if not set
        if (!user.avatarUrl && userData.picture) {
          user.avatarUrl = userData.picture;
        }
        await user.save();
      }
    } else {
      // Create new user
      console.log('Creating new user with data:', {
        email: userData.email,
        googleId: userData.id,
        firstName: userData.given_name,
        lastName: userData.family_name
      });
      
      user = await User.create({
        firstName: userData.given_name || 'User',
        lastName: userData.family_name || 'User', // Fallback for missing last name
        email: userData.email,
        googleId: userData.id,
        avatarUrl: userData.picture,
        password: crypto.randomBytes(32).toString('hex'), // Dummy password to satisfy validation if schema update hasn't propagated
      });
    }

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: '7d',
    });

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    return NextResponse.redirect(new URL('/dashboard', request.url));

  } catch (error: any) {
    console.error('Google auth error detailed:', error);
    if (error.name === 'ValidationError') {
       console.error('Validation Errors:', error.errors);
    }
    
    let errorMessage = 'Authentication failed';
    if (error.code === 'UND_ERR_CONNECT_TIMEOUT' || error.name === 'TimeoutError') {
      errorMessage = 'Connection timed out. Please check your internet.';
    }
    
    return NextResponse.redirect(new URL(`/login?error=${encodeURIComponent(errorMessage)}`, request.url));
  }
}
