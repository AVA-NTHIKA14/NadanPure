import Link from "next/link"
import { Leaf, AlertCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="w-6 h-6 text-background" />
          </div>
        </Link>

        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-serif text-foreground mb-4">
          Something went wrong
        </h1>

        <p className="text-muted-foreground mb-8 max-w-sm mx-auto">
          We encountered an error while processing your request. Please try again or contact support if the problem persists.
        </p>

        <div className="space-y-4">
          <Button asChild className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/auth/login">
              Try again
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>

          <Button asChild variant="outline" className="w-full h-12 rounded-2xl border-border">
            <Link href="/">
              Return to home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
