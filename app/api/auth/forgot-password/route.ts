import { NextResponse } from "next/server";
import crypto from "crypto";
import dbConnect from "@/lib/db";
import User from "@/models/User";
import sendEmail from "@/lib/sendEmail";

export async function POST(req: Request) {
    try {
        await dbConnect();
        const { email } = await req.json();

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json(
                { message: "There is no user with that email" },
                { status: 404 }
            );
        }

        // Generate token
        const resetToken = crypto.randomBytes(20).toString("hex");

        // Hash token and set to resetPasswordToken field
        user.resetPasswordToken = crypto
            .createHash("sha256")
            .update(resetToken)
            .digest("hex");

        // Set expire
        user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; // 10 minutes

        await user.save();

        // Create reset url
        // Since we are server-side, we need the origin.
        // In production, this should be configurable, but we can try to get it from request headers or env.
        // For now, let's assume valid origin or fall back to localhost if needed, or use process.env.NEXT_PUBLIC_APP_URL
        const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/reset-password?token=${resetToken}`; // sending unhashed token

        const message = `
      You are receiving this email because you (or someone else) has requested the reset of a password.
      Please click on the link below to reset your password:
      
      ${resetUrl}
      
      If you did not request this, please ignore this email and your password will remain unchanged.
    `;

        try {
            await sendEmail({
                email: user.email,
                subject: "Password Reset Token",
                message,
                html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                <h2>Password Reset Request</h2>
                <p>You are receiving this email because you (or someone else) has requested the reset of a password.</p>
                <p>Please click on the link below to reset your password:</p>
                <a href="${resetUrl}" style="display: inline-block; background-color: #0070f3; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin: 20px 0;">Reset Password</a>
                <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
            </div>
        `
            });

            return NextResponse.json({ success: true, data: "Email sent" });
        } catch (err) {
            console.error(err);
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            return NextResponse.json(
                { message: "Email could not be sent" },
                { status: 500 }
            );
        }
    } catch (err: any) {
        console.error(err);
        return NextResponse.json({ message: err.message }, { status: 500 });
    }
}
