import { LoginForm } from "@/components/auth/login-form"
import { LoginPromo } from "@/components/auth/login-promo"
import { LoginHeader } from "@/components/auth/login-header"

export const metadata = {
  title: "iConcur - Secure Contract Login",
  description: "Access your contracts securely with iConcur",
}

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <LoginHeader />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-[1000px] flex flex-col lg:flex-row bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden border border-border-light dark:border-border-dark min-h-[600px]">
          <LoginForm />
          <LoginPromo />
        </div>
      </main>
    </div>
  )
}
