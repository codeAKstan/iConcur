import { ForgotPasswordForm } from "@/components/auth/forgot-password-form"
import { LoginHeader } from "@/components/auth/login-header"

export const metadata = {
  title: "iConcur - Forgot Password",
  description: "Reset your password to access your iConcur account",
}

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0f172a]">
      <LoginHeader />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <ForgotPasswordForm />
      </main>
    </div>
  )
}