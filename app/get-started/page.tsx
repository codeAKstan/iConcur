import { GetStartedForm } from "@/components/auth/get-started-form"
import { GetStartedTestimonial } from "@/components/auth/get-started-testimonial"
import { GetStartedHeader } from "@/components/auth/get-started-header"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "iConcur - Get Started",
  description: "Join thousands of legal teams automating their workflow",
}

export default function GetStartedPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GetStartedHeader />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <GetStartedTestimonial />
          <GetStartedForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}
