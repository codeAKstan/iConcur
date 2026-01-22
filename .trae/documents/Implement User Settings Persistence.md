I will implement functional user settings by updating the backend model, creating an API for updates, and connecting the frontend forms.

### 1. Backend Updates
- **Update User Model (`models/User.ts`)**: Add fields for `jobTitle`, `avatarUrl`, and `notificationPreferences` (contractUpdates, mentions).
- **Update API Endpoint (`app/api/auth/me/route.ts`)**:
  - Modify `GET` to include the new fields in the response.
  - Add a `PUT` method to allow updating user profile and settings.

### 2. Frontend Integration
- **Update User Hook (`hooks/use-user.ts`)**: Extend the `User` interface to include the new fields.
- **Update Profile Form (`components/settings/profile-form.tsx`)**:
  - Fetch user data using `useUser` to populate form fields.
  - Implement form submission to send a `PUT` request to `/api/auth/me`.
  - Add loading states and toast notifications for success/error.
- **Update Notification Settings (`components/settings/notification-settings.tsx`)**:
  - Connect switches to user's `notificationPreferences`.
  - Trigger API updates immediately on toggle changes.

### 3. Verification
- Verify that changing profile details persists after a page reload.
- Verify that notification toggles save their state.
