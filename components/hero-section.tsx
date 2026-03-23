"use client"

import { motion } from "framer-motion"
import { ArrowRight, Star, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B3022' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center py-12 lg:py-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
            >
              <Shield className="h-4 w-4" />
              100% Preservative Free
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              <span className="text-balance">From the Soil of</span>
              <br />
              <span className="text-accent">{"God's Own Country"}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:text-xl"
            >
              Discover authentic Kerala organic produce, handpicked from local farms. 
              Pure, natural, and delivered fresh to your doorstep.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Button
                size="lg"
                className="group rounded-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-2 px-8 py-6 text-base font-semibold"
              >
                Learn Our Story
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-accent text-accent"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">4.9/5</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">10,000+</span> Happy Customers
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Product Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <motion.div
                animate={{
                  rotate: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 rounded-3xl bg-primary/5"
              />
              
              {/* Main Product Card */}
              <motion.div
                whileHover={{ y: -10, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative overflow-hidden rounded-3xl bg-card p-6 shadow-2xl shadow-primary/10 sm:p-8"
                style={{ perspective: "1000px" }}
              >
                <div className="absolute right-4 top-4 z-10 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                  Bestseller
                </div>
                
                <div className="relative mb-6 aspect-square w-64 overflow-hidden rounded-2xl bg-secondary sm:w-80">
                  <Image
                    src="/images/coconut-oil.jpg"
                    alt="Organic Virgin Coconut Oil"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                      Organic
                    </span>
                    <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent">
                      Cold Pressed
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-foreground sm:text-2xl">
                    Virgin Coconut Oil
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    Pure, unrefined coconut oil from Kerala
                  </p>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-foreground">₹185</span>
                      <span className="text-xs text-muted-foreground">/500ml</span>
                      <span className="text-sm text-muted-foreground line-through">₹220</span>
                    </div>
                    
                    <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1">
                      <Shield className="h-4 w-4 text-primary" />
                      <span className="text-xs font-semibold text-primary">98% Pure</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-1/4 rounded-2xl bg-card p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Purity Score</p>
                    <p className="text-lg font-bold text-foreground">98%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-4 bottom-1/4 rounded-2xl bg-card p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <Star className="h-5 w-5 fill-accent text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Rating</p>
                    <p className="text-lg font-bold text-foreground">4.9★</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
