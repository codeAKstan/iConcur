# Implementation Plan: Login Backend & Route Protection

I will implement a secure login system using JWTs stored in HTTP-only cookies and protect dashboard routes using Next.js Middleware.

## 1. Install Dependencies

* `jsonwebtoken`: For generating and verifying access tokens.

* `cookie`: For parsing cookies in API routes (if needed) or using Next.js `cookies()` API.

* `@types/jsonwebtoken`: TypeScript definitions.

## 2. Environment Variables

* Ensure `JWT_SECRET` is added to `.env` (I will remind you to set this).

## 3. Login API Route (`app/api/auth/login/route.ts`)

* Validate email and password inputs.

* Connect to MongoDB and find the user.

* Verify the password using `bcryptjs`.

* Generate a JWT containing the user ID.

* Set the JWT in an HTTP-only, secure cookie.

* Return user info (excluding password) and success status.

## 4. Middleware for Route Protection (`middleware.ts`)

* Create `middleware.ts` in the root (or `src/` if applicable, but here root).

* define `protectedRoutes` array (e.g., `/dashboard`, `/contract-drafting`, `/contract-analyzer`).

* Check for the authentication cookie (e.g., `auth-token`).

* If missing and accessing a protected route, redirect to `/login`.

* If present, allow the request to proceed (optionally verify JWT if edge-compatible or do it in layout).

## 5. Frontend Integration (`components/auth/login-form.tsx`)

* Update the form to handle state (email, password, loading, error).

* Implement `onSubmit` to call `/api/auth/login`.

* On success, redirect to `/dashboard`.

* On error, display an alert/toast.

## 6. Logout Functionality (mandatory)

* Create `app/api/auth/logout/route.ts` to clear the cookie.

* Add a logout button logic in the dashboard sidebar or header.

