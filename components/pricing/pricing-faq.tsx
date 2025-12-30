import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is my contract data secure?",
    answer: "Absolutely. We use bank-grade 256-bit encryption for all data in transit and at rest. We are SOC2 Type II compliant and conduct regular security audits to ensure your sensitive legal documents are protected.",
  },
  {
    question: "Can I change plans later?",
    answer: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Prorated charges will be applied automatically for mid-cycle upgrades.",
  },
  {
    question: "Do you offer discounts for non-profits?",
    answer: "Yes! We are proud to support non-profit organizations. Please contact our sales team with proof of your non-profit status to receive a 20% discount on all annual plans.",
  },
  {
    question: "What happens after my trial ends?",
    answer: "If you don't choose a plan by the end of your 14-day trial, your account will be automatically downgraded to the Free Starter plan. Your data remains safe, but access to premium features like AI Analysis will be locked.",
  },
]

export function PricingFAQ() {
  return (
    <section className="flex flex-col justify-center py-12 lg:py-20 px-4 lg:px-8 bg-white dark:bg-[#101622]">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Everything you need to know about the product and billing.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-slate-200 dark:border-slate-800 rounded-xl px-6 data-[state=open]:bg-slate-50/50 dark:data-[state=open]:bg-slate-900/50 shadow-sm"
            >
              <AccordionTrigger className="text-lg font-bold text-slate-900 dark:text-white hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-slate-600 dark:text-slate-300 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
