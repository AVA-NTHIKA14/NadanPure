"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Star, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Virgin Coconut Oil",
    description: "Cold-pressed from fresh Kerala coconuts",
    price: 599,
    originalPrice: 799,
    purityScore: 98,
    rating: 4.9,
    reviews: 234,
    image: "/images/coconut-oil.jpg",
    tags: ["Bestseller", "Organic"],
  },
  {
    id: 2,
    name: "Wild Forest Honey",
    description: "Raw honey from Western Ghats forests",
    price: 449,
    originalPrice: 599,
    purityScore: 96,
    rating: 4.8,
    reviews: 189,
    image: "/images/wild-honey.jpg",
    tags: ["Pure", "Raw"],
  },
  {
    id: 3,
    name: "Malabar Black Pepper",
    description: "Premium whole peppercorns from Wayanad",
    price: 299,
    originalPrice: 399,
    purityScore: 99,
    rating: 4.9,
    reviews: 156,
    image: "/images/black-pepper.jpg",
    tags: ["Premium", "Single Origin"],
  },
  {
    id: 4,
    name: "Cardamom Pods",
    description: "Aromatic green cardamom from Idukki",
    price: 799,
    originalPrice: 999,
    purityScore: 97,
    rating: 4.7,
    reviews: 98,
    image: "/images/cardamom.jpg",
    tags: ["Fragrant", "Export Quality"],
  },
  {
    id: 5,
    name: "Turmeric Powder",
    description: "High-curcumin turmeric from Ernakulam",
    price: 249,
    originalPrice: 349,
    purityScore: 95,
    rating: 4.8,
    reviews: 312,
    image: "/images/turmeric.jpg",
    tags: ["High Curcumin", "Lab Tested"],
  },
  {
    id: 6,
    name: "Kashmiri Chilli",
    description: "Mild and vibrant red chilies",
    price: 349,
    originalPrice: 449,
    purityScore: 94,
    rating: 4.6,
    reviews: 87,
    image: "/images/kashmiri-chilli.jpg",
    tags: ["Low Heat", "Vibrant Color"],
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function ProductGrid() {
  return (
    <section id="products" className="bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Our Collection
          </span>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            <span className="text-balance">Pure Kerala Treasures</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Every product comes with a Purity Score certified by independent labs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-lg transition-shadow hover:shadow-2xl"
            >
              {/* Wishlist Button */}
              <button className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-card">
                <Heart className="h-5 w-5 text-muted-foreground transition-colors hover:fill-accent hover:text-accent" />
              </button>

              {/* Tags */}
              <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-0 flex items-end justify-center bg-gradient-to-t from-foreground/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                  <Button className="mb-4 rounded-full bg-card text-foreground hover:bg-card/90">
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Purity Score Badge */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-bold text-primary">
                      {product.purityScore}% Pure
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">
                      {product.rating}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {product.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">
                      ₹{product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% Off
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border-2 px-8 py-6 text-base font-semibold"
          >
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
