import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for individuals getting started with simple contracts.",
    features: ["1 Contract per month", "Basic AI Analysis", "Standard Templates", "Email Support"],
  },
  {
    name: "Pro",
    price: "$29",
    description: "For professionals who need more power and flexibility.",
    features: ["Unlimited Contracts", "Advanced AI Analysis", "Custom Templates", "Priority Support", "Legal Expert Review (1/mo)"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams and organizations with specific needs.",
    features: ["Everything in Pro", "API Access", "SSO Integration", "Dedicated Account Manager", "SLA"],
  },
]

export function PricingCards() {
  return (
    <section className="layout-container py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col p-6 bg-white dark:bg-[#1a2230] rounded-xl border ${
              plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : "border-gray-200 dark:border-gray-700"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-bold text-[#0d121b] dark:text-white mb-2">{plan.name}</h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-black text-[#0d121b] dark:text-white">{plan.price}</span>
              {plan.price !== "Custom" && <span className="text-gray-500 ml-1">/month</span>}
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">{plan.description}</p>
            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
              {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
