"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"

const plans = [
  {
    name: "Starter",
    priceMonthly: "$0",
    priceYearly: "$0",
    description: "For freelancers & individuals",
    features: ["3 contracts/mo", "Basic eSign", "PDF Export"],
  },
  {
    name: "Professional",
    priceMonthly: "$29",
    priceYearly: "$24",
    description: "For growing teams",
    features: ["Unlimited contracts", "AI Legal Analysis", "Team workflows", "Audit trails", "Priority Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    priceMonthly: "Custom",
    priceYearly: "Custom",
    description: "For large organizations",
    features: ["Unlimited contracts", "API Access", "SSO & SAML", "Dedicated Success Manager", "Custom SLA"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20
    }
  }
}

export function PricingCards() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="flex flex-col justify-center py-12 lg:py-20 px-4 lg:px-8">
      {/* Toggle */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center gap-4 mb-12 w-fit mx-auto bg-white dark:bg-slate-900 shadow-md rounded-full px-6 py-4 border border-slate-200 dark:border-slate-800"
      >
        <span className={`text-sm font-medium ${!isYearly ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
        />
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${isYearly ? "text-slate-900 dark:text-white" : "text-slate-500"}`}>
            Yearly
          </span>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
            Save 20%
          </span>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto w-full"
      >
        {plans.map((plan) => (
          <motion.div
            key={plan.name}
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className={`relative flex flex-col p-8 bg-white dark:bg-[#1a2230] rounded-2xl border ${
              plan.popular ? "border-primary shadow-xl ring-1 ring-primary" : "border-slate-200 dark:border-slate-800"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-sm">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{plan.description}</p>
            </div>

            <div className="flex items-baseline mb-8">
              <span className="text-5xl font-black text-slate-900 dark:text-white">
                {isYearly ? plan.priceYearly : plan.priceMonthly}
              </span>
              {plan.priceMonthly !== "Custom" && (
                <span className="text-slate-500 ml-2 text-lg">/mo</span>
              )}
            </div>

            <Button 
              className={`w-full mb-8 h-12 text-base font-semibold ${
                plan.popular ? "bg-primary hover:bg-primary/90 shadow-md shadow-primary/25" : "bg-slate-50 hover:bg-slate-100 text-slate-900 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700"
              }`}
              variant={plan.popular ? "default" : "ghost"}
            >
              {plan.priceMonthly === "Custom" ? "Contact Sales" : plan.name === "Professional" ? "Start 14-Day Free Trial" : "Get Started Free"}
            </Button>

            <ul className="space-y-4 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/20">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
              {plan.name === "Starter" && (
                <li className="flex items-start gap-3 text-sm text-slate-400 dark:text-slate-500 line-through decoration-slate-400">
                  <div className="flex h-5 w-5 shrink-0 items-center justify-center">
                    <span className="text-lg leading-none">×</span>
                  </div>
                  <span>AI Analysis</span>
                </li>
              )}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
