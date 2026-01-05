# Implementation Plan: Replace Mock Data with Real User Data

I will replace the mock user data in the dashboard with real data fetched from the backend.

## 1. Backend: Get Current User API (`app/api/auth/me/route.ts`)
- Create a new API route to fetch the authenticated user's details.
- Validate the JWT token from the `auth-token` cookie.
- Fetch the user from MongoDB (excluding the password).
- Return the user object (firstName, lastName, email).

## 2. Frontend: User Context/Hook
- Create a React context or hook (e.g., `hooks/use-user.ts`) to fetch and store the user data.
- This will allow multiple components (Sidebar, Header, Profile) to access user data without redundant API calls.

## 3. Frontend: Update Dashboard Components
- **`components/dashboard/dashboard-sidebar.tsx`**: Replace "John Doe" and "john@iconcur.com" with data from the user hook. Use initials for the avatar fallback.
- **`app/dashboard/page.tsx`**: Update "Welcome back, John" to use the real first name.
- **`components/dashboard/dashboard-header.tsx`**: (If applicable) Update any user-specific elements.

## 4. Frontend: Logout Integration
- Update the sidebar or header to include a working "Logout" button that calls `/api/auth/logout` and redirects to login.

## 5. Mock Data Cleanup
- Remove hardcoded strings like "John Doe" and static profile images where they are intended to be dynamic.
