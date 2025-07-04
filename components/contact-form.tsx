"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { motion } from "framer-motion"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    message: ""
  })
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `Hola! Soy ${formData.name}. ${formData.message}`
    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(message)}`
    
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
    
    // Reset form
    setFormData({
      name: "",
      phone: "",
      interest: "",
      message: ""
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Get in Touch
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] rounded-2xl border border-pink-900/40 bg-gradient-to-br from-pink-900/90 via-indigo-900/80 to-indigo-800/90 shadow-2xl backdrop-blur-xl p-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 40 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-white drop-shadow mb-2">
              Let's Start a Project
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6 px-6 pb-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-pink-100">Name *</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full px-3 py-2 border border-indigo-700 bg-indigo-950/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder:text-indigo-200"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-pink-100">Phone Number *</label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full px-3 py-2 border border-indigo-700 bg-indigo-950/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 placeholder:text-indigo-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium text-pink-100">Project Type</label>
              <select
                value={formData.interest}
                onChange={(e) => handleInputChange("interest", e.target.value)}
                className="w-full px-3 py-2 border border-indigo-700 bg-indigo-950/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
              >
                <option value="">Select project type</option>
                <option value="website">Website Development</option>
                <option value="webapp">Web Application</option>
                <option value="design">UI/UX Design</option>
                <option value="consulting">Consulting</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-pink-100">Project Details *</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                className="w-full px-3 py-2 border border-indigo-700 bg-indigo-950/60 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 min-h-[120px] resize-none placeholder:text-indigo-200"
                placeholder="Tell me about your project, goals, and timeline..."
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-pink-600 to-indigo-700 hover:from-pink-700 hover:to-indigo-800 text-white py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-2"
            >
              Send Message via WhatsApp
            </Button>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
} 