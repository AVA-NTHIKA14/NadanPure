"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Sprout, Sun, Factory, Truck, Home, CheckCircle2 } from "lucide-react"

const journeySteps = [
  {
    icon: Sprout,
    title: "Seed Selection",
    description: "Heritage seeds from Kerala's organic seed banks",
    time: "Day 1",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Sun,
    title: "Natural Growth",
    description: "Nurtured under tropical sun without chemicals",
    time: "3-6 Months",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: CheckCircle2,
    title: "Hand Harvest",
    description: "Carefully picked at peak freshness by local farmers",
    time: "Harvest Day",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Factory,
    title: "Cold Processing",
    description: "Traditional methods preserve all nutrients",
    time: "Within 24hrs",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Truck,
    title: "Fast Dispatch",
    description: "Shipped directly from our Kerala facility",
    time: "Same Day",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Home,
    title: "Your Home",
    description: "Fresh, pure Kerala goodness at your doorstep",
    time: "2-4 Days",
    color: "bg-accent/10 text-accent",
  },
]

export function TransparencyTracker() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="transparency" className="overflow-hidden bg-secondary/30 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Transparency You Can Trust
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Farm to Table Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Track every step of your product&apos;s journey from Kerala&apos;s lush farms to your kitchen
          </p>
        </motion.div>

        {/* Horizontal Scroll Timeline */}
        <div ref={containerRef} className="relative">
          {/* Progress Line */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-border lg:block">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              className="h-full bg-primary"
            />
          </div>

          {/* Timeline Steps */}
          <div className="scrollbar-hide flex gap-6 overflow-x-auto pb-8 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="min-w-[260px] flex-shrink-0 lg:min-w-0"
              >
                <div className="group relative flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full ${step.color} ring-4 ring-background transition-shadow group-hover:ring-8`}
                  >
                    <step.icon className="h-7 w-7" />
                    
                    {/* Pulse animation */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      className={`absolute inset-0 rounded-full ${step.color.replace('/10', '/20')}`}
                    />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="rounded-2xl bg-card p-5 shadow-lg transition-shadow group-hover:shadow-xl"
                  >
                    <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                      {step.time}
                    </span>
                    <h3 className="mb-2 font-serif text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
