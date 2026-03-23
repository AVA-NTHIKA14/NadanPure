import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { TransparencyTracker } from "@/components/transparency-tracker"
import { ProductGrid } from "@/components/product-grid"
import { AIShopper } from "@/components/ai-shopper"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TransparencyTracker />
      <ProductGrid />
      <Footer />
      <AIShopper />
    </main>
  )
}
