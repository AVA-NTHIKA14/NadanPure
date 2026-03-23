"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Leaf, User, Mail, Phone, MapPin, Home, Save, Loader2, ArrowLeft } from "lucide-react"
import type { User as SupabaseUser } from "@supabase/supabase-js"

interface Profile {
  id: string
  full_name: string | null
  phone: string | null
  address: string | null
  city: string | null
  pincode: string | null
}

export default function ProfilePage() {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [pincode, setPincode] = useState("")
  
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchUserAndProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      
      if (!user) {
        router.push("/auth/login")
        return
      }
      
      setUser(user)
      
      const { data: profileData } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single()
      
      if (profileData) {
        setProfile(profileData)
        setFullName(profileData.full_name || "")
        setPhone(profileData.phone || "")
        setAddress(profileData.address || "")
        setCity(profileData.city || "")
        setPincode(profileData.pincode || "")
      }
      
      setLoading(false)
    }
    
    fetchUserAndProfile()
  }, [supabase, router])

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setMessage(null)
    
    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName,
        phone,
        address,
        city,
        pincode,
        updated_at: new Date().toISOString(),
      })
      .eq("id", user?.id)
    
    if (error) {
      setMessage({ type: "error", text: error.message })
    } else {
      setMessage({ type: "success", text: "Profile updated successfully!" })
    }
    
    setSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between lg:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold tracking-tight text-foreground lg:text-2xl">
                Nadan Pure
              </span>
            </Link>
            <Button asChild variant="ghost" className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Back to Shop
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-serif text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your account details and delivery address</p>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          {message && (
            <div
              className={`p-4 rounded-2xl text-sm ${
                message.type === "success"
                  ? "bg-primary/10 border border-primary/20 text-primary"
                  : "bg-destructive/10 border border-destructive/20 text-destructive"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Account Info Section */}
          <div className="bg-card rounded-3xl border border-border p-6">
            <h2 className="text-lg font-serif text-foreground mb-4 flex items-center gap-2">
              <User className="w-5 h-5 text-primary" />
              Account Information
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email address</Label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="pl-12 h-12 rounded-2xl border-border bg-secondary/50"
                  />
                </div>
                <p className="text-xs text-muted-foreground">Email cannot be changed</p>
              </div>

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
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone number</Label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-12 h-12 rounded-2xl border-border bg-card"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Address Section */}
          <div className="bg-card rounded-3xl border border-border p-6">
            <h2 className="text-lg font-serif text-foreground mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Delivery Address
            </h2>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="address" className="text-foreground">Street address</Label>
                <div className="relative">
                  <Home className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="address"
                    type="text"
                    placeholder="House no., Street, Locality"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="pl-12 h-12 rounded-2xl border-border bg-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-foreground">City</Label>
                  <Input
                    id="city"
                    type="text"
                    placeholder="Enter your city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="h-12 rounded-2xl border-border bg-card"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode" className="text-foreground">Pincode</Label>
                  <Input
                    id="pincode"
                    type="text"
                    placeholder="6 digit pincode"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    maxLength={6}
                    className="h-12 rounded-2xl border-border bg-card"
                  />
                </div>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={saving}
            className="w-full h-12 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-base"
          >
            {saving ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </>
            )}
          </Button>
        </form>
      </main>
    </div>
  )
}
