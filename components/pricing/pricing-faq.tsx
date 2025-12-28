import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for our Pro plan. No credit card required to start.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and PayPal.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption and are SOC2 compliant to ensure your data is always safe.",
  },
]

export function PricingFAQ() {
  return (
    <section className="layout-container py-12 lg:py-20 px-4">
      <div className="max-w-3xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center text-[#0d121b] dark:text-white mb-10">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
