"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { motion } from "framer-motion"

export function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interest: "",
    message: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Crear el mensaje para WhatsApp
    const whatsappMessage = `
*Nuevo mensaje de contacto*
👤 *Nombre:* ${formData.name}
📱 *Teléfono:* ${formData.phone}
🎯 *Interés:* ${formData.interest}
💬 *Mensaje:* ${formData.message}
    `.trim()

    // Codificar el mensaje para la URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // Tu número de WhatsApp (con código de país para República Dominicana)
    const whatsappNumber = "18098642427"
    
    // Crear el enlace de WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Abrir WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank')
    
    // Cerrar el modal
    setIsOpen(false)
  }

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  }

  return (
    <>
      <Button 
        size="lg" 
        className="bg-primary/80 hover:bg-primary/90 text-white backdrop-blur-sm transition-transform hover:scale-105"
        onClick={() => setIsOpen(true)}
      >
        Get in Touch
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
            <DialogDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </DialogDescription>
          </DialogHeader>
          <motion.form 
            onSubmit={handleSubmit} 
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </motion.div>
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </motion.div>
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="interest" className="text-sm font-medium">
                What are you interested in?
              </label>
              <select
                id="interest"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                required
              >
                <option value="">Select an option</option>
                <option value="Web Development">Web Development</option>
                <option value="Mobile App">Mobile App</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Consulting">Consulting</option>
                <option value="Other">Other</option>
              </select>
            </motion.div>
            <motion.div className="space-y-2" variants={itemVariants}>
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <Button 
                type="submit" 
                className="w-full transition-transform hover:scale-105"
              >
                Send Message via WhatsApp
              </Button>
            </motion.div>
          </motion.form>
        </DialogContent>
      </Dialog>
    </>
  )
} 