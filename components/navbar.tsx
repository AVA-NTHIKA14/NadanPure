"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, Leaf, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { createClient } from "@/lib/supabase/client"
import type { User as SupabaseUser } from "@supabase/supabase-js"

const navLinks = [
  { name: "Shop", href: "#products" },
  { name: "Our Story", href: "#story" },
  { name: "Farm Trail", href: "#transparency" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!supabase) {
      setLoading(false)
      return
    }

    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }
    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase])

  const handleLogout = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const getUserInitials = () => {
    const fullName = user?.user_metadata?.full_name as string | undefined
    if (fullName) {
      return fullName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
    }
    return user?.email?.slice(0, 2).toUpperCase() || "U"
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 15 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary"
            >
              <Leaf className="h-5 w-5 text-primary-foreground" />
            </motion.div>
            <span className="font-serif text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              Nadan Pure
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                2
              </span>
            </Button>
            
            {!loading && (
              <>
                {user ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="flex items-center gap-2 rounded-full px-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                          {getUserInitials()}
                        </div>
                        <span className="hidden xl:inline text-sm font-medium">
                          {user.user_metadata?.full_name || user.email?.split("@")[0]}
                        </span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 rounded-2xl">
                      <div className="px-3 py-2">
                        <p className="text-sm font-medium">{user.user_metadata?.full_name || "User"}</p>
                        <p className="text-xs text-muted-foreground">{user.email}</p>
                      </div>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          My Profile
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive">
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button asChild className="rounded-full bg-primary px-6 text-primary-foreground hover:bg-primary/90">
                    <Link href="/auth/login">Login</Link>
                  </Button>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-border bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                >
                  {link.name}
                </Link>
              ))}
              
              {!loading && (
                <>
                  {user ? (
                    <>
                      <div className="border-t border-border pt-4 mt-4">
                        <div className="flex items-center gap-3 px-3 py-2">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium">
                            {getUserInitials()}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{user.user_metadata?.full_name || "User"}</p>
                            <p className="text-xs text-muted-foreground">{user.email}</p>
                          </div>
                        </div>
                      </div>
                      <Link
                        href="/profile"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                      >
                        <User className="h-5 w-5" />
                        My Profile
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout()
                          setIsMobileMenuOpen(false)
                        }}
                        className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium text-destructive hover:bg-secondary"
                      >
                        <LogOut className="h-5 w-5" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <div className="flex items-center gap-3 pt-4">
                      <Button asChild className="flex-1 rounded-full bg-primary text-primary-foreground">
                        <Link href="/auth/login" onClick={() => setIsMobileMenuOpen(false)}>
                          Login
                        </Link>
                      </Button>
                      <Button asChild variant="outline" className="flex-1 rounded-full">
                        <Link href="/auth/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                          Sign Up
                        </Link>
                      </Button>
                    </div>
                  )}
                </>
              )}
              
              <div className="flex items-center gap-3 pt-2">
                <Button variant="outline" size="icon" className="rounded-full relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-foreground">
                    2
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
