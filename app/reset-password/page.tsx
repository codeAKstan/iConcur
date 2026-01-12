import { ResetPasswordForm } from "@/components/auth/reset-password-form"
import { LoginHeader } from "@/components/auth/login-header"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "iConcur - Reset Password",
    description: "Set a new password for your iConcur account",
}

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ResetPasswordPage({ searchParams }: Props) {
    const resolvedSearchParams = await searchParams
    const token = typeof resolvedSearchParams.token === "string" ? resolvedSearchParams.token : ""

    return (
        <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-[#0f172a]">
            <LoginHeader />
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                {token ? (
                    <ResetPasswordForm token={token} />
                ) : (
                    <div className="flex flex-col items-center gap-4 text-center">
                        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 p-6 rounded-xl max-w-md">
                            <h3 className="font-bold mb-2">Invalid or Missing Token</h3>
                            <p className="text-sm">Please ensure you have clicked the correct link from your email.</p>
                        </div>
                        <a href="/login" className="text-primary hover:underline">Return to Login</a>
                    </div>
                )}
            </main>
        </div>
    )
}
