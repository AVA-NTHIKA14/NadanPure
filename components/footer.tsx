"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Leaf, Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  shop: [
    { name: "All Products", href: "#" },
    { name: "Coconut Oils", href: "#" },
    { name: "Spices", href: "#" },
    { name: "Honey & Jaggery", href: "#" },
    { name: "Gift Sets", href: "#" },
  ],
  company: [
    { name: "Our Story", href: "#" },
    { name: "Farm Partners", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Returns", href: "#" },
    { name: "Track Order", href: "#" },
    { name: "Contact Us", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="font-serif text-2xl font-bold">Nadan Pure</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/80">
              Bringing the purest flavors of Kerala to your home. 
              100% preservative-free, farm-fresh organic produce.
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-serif text-lg font-bold">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-serif text-lg font-bold">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 font-serif text-lg font-bold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  Nadan Pure Farm, Wayanad District, Kerala, India 673121
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  +91 94XX XXX XXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-sm text-primary-foreground/70">
                  hello@nadanpure.com
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row"
        >
          <p className="text-center text-sm text-primary-foreground/60">
            © 2026 Nadan Pure. All rights reserved. Made with ❤️ in Kerala.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <Link href="#" className="hover:text-primary-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-foreground">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
