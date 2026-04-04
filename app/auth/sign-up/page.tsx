"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Mail, Lock, User, ArrowRight, Loader2 } from "lucide-react"

export default function SignUpPage() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!supabase) {
      setError("Sign up is temporarily unavailable (Supabase is not configured).")
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
          `${window.location.origin}/`,
        data: {
          full_name: fullName,
        },
      },
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/auth/sign-up-success")
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/wild-honey.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-serif text-background">Nadan Pure</span>
          </Link>
          <h1 className="text-4xl xl:text-5xl font-serif text-background leading-tight mb-6">
            Join the<br />
            <span className="text-accent">Nadan Family</span>
          </h1>
          <p className="text-background/80 text-lg max-w-md">
            Create an account to enjoy exclusive access to Kerala&apos;s purest organic produce, farm-fresh deliveries, and special member offers.
          </p>
          
          <div className="mt-10 space-y-4">
            <div className="flex items-center gap-3 text-background/90">
              <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                <span className="text-sm font-medium">1</span>
              </div>
              <span>100% Preservative-free products</span>
            </div>
            <div className="flex items-center gap-3 text-background/90">
              <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                <span className="text-sm font-medium">2</span>
              </div>
              <span>Direct from Kerala farms</span>
            </div>
            <div className="flex items-center gap-3 text-background/90">
              <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center">
                <span className="text-sm font-medium">3</span>
              </div>
              <span>Lab-tested purity guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign up form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-background" />
              </div>
              <span className="text-2xl font-serif text-primary">Nadan Pure</span>
            </Link>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">Create your account</h2>
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-5">
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl text-destructive text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-foreground">Full name</Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-12 h-12 rounded-2xl border-border bg-card"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">Email address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 rounded-2xl border-border bg-card"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">Password</Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password (min 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-12 rounded-2xl border-border bg-card"
                  minLength={6}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base"
            >
              {loading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Create account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            By creating an account, you agree to our{" "}
            <Link href="#" className="text-primary hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
