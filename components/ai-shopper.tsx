"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"

const suggestionChips = [
  "Cooking oils",
  "Gift sets",
  "Spices for biryani",
  "Healthy breakfast",
  "Immunity boosters",
]

const sampleResponses = [
  {
    role: "assistant",
    content: "Namaste! 🌿 I'm your Kerala shopping guide. Tell me what you're cooking or the vibe you're going for, and I'll recommend the perfect products!",
  },
]

export function AIShopper() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState(sampleResponses)
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return
    
    setMessages([
      ...messages,
      { role: "user", content: input },
      {
        role: "assistant",
        content: `Great choice! Based on "${input}", I recommend our Virgin Coconut Oil and Malabar Black Pepper combo. Both are certified 95%+ pure and perfect for authentic Kerala cuisine. Would you like me to add these to your cart?`,
      },
    ])
    setInput("")
  }

  const handleChipClick = (chip: string) => {
    setMessages([
      ...messages,
      { role: "user", content: chip },
      {
        role: "assistant",
        content: `For ${chip.toLowerCase()}, I have some amazing recommendations! Our curated collection includes bestsellers with 95%+ purity scores. Shall I show you the top picks?`,
      },
    ])
  }

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 lg:h-16 lg:w-16"
      >
        <MessageCircle className="h-6 w-6 lg:h-7 lg:w-7" />
        
        {/* Pulse Animation */}
        <span className="absolute -inset-1 animate-ping rounded-full bg-primary/30" />
      </motion.button>

      {/* Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 right-0 top-0 z-50 w-full max-w-md overflow-hidden bg-card shadow-2xl sm:rounded-l-3xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-border bg-primary p-4 text-primary-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold">AI Shopping Guide</h3>
                    <p className="text-xs text-primary-foreground/80">Vibe-based recommendations</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-primary-foreground/20"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex h-[calc(100vh-200px)] flex-col gap-4 overflow-y-auto p-4">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="mb-2 flex items-center gap-2">
                          <Leaf className="h-4 w-4 text-primary" />
                          <span className="text-xs font-semibold text-primary">Nadan AI</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                  </motion.div>
                ))}

                {/* Suggestion Chips */}
                {messages.length <= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2"
                  >
                    {suggestionChips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => handleChipClick(chip)}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                      >
                        {chip}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card p-4">
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="What are you cooking today?"
                    className="flex-1 rounded-full border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button
                    onClick={handleSend}
                    size="icon"
                    className="h-12 w-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
