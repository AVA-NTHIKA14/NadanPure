"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, Mail, Lock, ArrowRight, Loader2 } from "lucide-react" //logo

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    if (!supabase) {
      setError("Login is temporarily unavailable Please try again.")
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
      return
    }

    router.push("/")
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding (hidden on mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/coconut-oil.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
          <Link href="/" className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <span className="text-2xl font-serif text-background">NattilNinnu</span>
          </Link>
          <h1 className="text-4xl xl:text-5xl font-serif text-background leading-tight mb-6">
            Welcome back to<br />
            <span className="text-accent">God&apos;s Own Country</span>
          </h1>
          <p className="text-background/80 text-lg max-w-md">
            Sign in to access your orders, saved items, and personalized recommendations from Kerala&apos;s finest organic produce.
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
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
            <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">Sign in to your account</h2>
            <p className="text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-up" className="text-primary hover:underline font-medium">
                Create one
              </Link>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-2xl text-destructive text-sm">
                {error}
              </div>
            )}

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
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-foreground">Password</Label>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-12 rounded-2xl border-border bg-card"
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
                  Sign in
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground">
            By signing in, you agree to our{" "}
            <Link href="#" className="text-primary hover:underline">Terms of Service</Link>
            {" "}and{" "}
            <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
