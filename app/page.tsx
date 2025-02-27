"use client"

import { Gift, MousePointer, ExternalLink, Github, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image";

const projects = [
  {
    title: "Real State",
    description: "A creative landing page for a real estate company",
    image: "/realstatebg.png",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://real-state-kerwin.vercel.app/",
    github: "https://github.com/KerwinAngeles/RealState",
  },
  {
    title: "Kick Sneaker",
    description: "A creative landing page for a sneaker store",
    image: "/nikewebsite.png",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://nike-web-site-kerwin.vercel.app/",
    github: "https://github.com/KerwinAngeles/NikeWebSite",
  },
  {
    title: "Managments System",
    description: "A landing page for a management system",
    image: "/manage.png",
    tags: ["React", "Tailwind", "Javascript"],
    link: "https://management-system-kerwin.vercel.app/",
    github: "https://github.com/KerwinAngeles/ManagementSystem",
  },
]

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "UI/UX", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Animation", level: 75 },
      { name: "Responsive", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 82 },
      { name: "C#", level: 85 },
      { name: "SQL-Server", level: 80 },
      { name: "REST APIs", level: 90 },
    ],
  },
]

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#projects", label: "PROJECTS" },
    { href: "#contact", label: "CONTACT" },
  ]

  return (
    <div className="min-h-screen">
      <header className="p-4 md:p-6 fixed w-full top-0 z-50 bg-gradient-to-r from-[#84fab0]/80 to-[#8fd3f4]/80 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            KA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xl font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      <main className="relative pt-20">
        <section className="min-h-[80vh] flex flex-col items-center justify-center text-center p-4">
          <h1 className="space-y-4">
            <div className="text-xl md:text-2xl text-primary mb-4">CREATIVE DEVELOPER</div>
            <div className="hero-title relative font-black">
              <MousePointer className="absolute -top-12 right-0 text-primary animate-bounce" />
              <Gift className="absolute -right-12 top-0 text-primary animate-pulse" />
              KERWIN ANGELES
            </div>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">I BUILD CREATIVE, ACCESSIBLE WEBSITES</p>
        </section>

        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 space-y-4"
            >
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-center text-lg text-primary/80 max-w-2xl mx-auto">
                A selection of my favorite works that showcase my skills and passion for web development
              </p>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border border-white/20 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="font-bold text-xl">{project.title}</h3>
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4 pt-4">
                      <Link
                        href={project.link}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </Link>
                      <Link
                        href={project.github}
                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" /> Source Code
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-16 space-y-4"
            >
              <h2 className="section-title">Skills & Expertise</h2>
              <p className="text-center text-lg text-primary/80 max-w-2xl mx-auto">
                Technologies and tools I've mastered throughout my journey
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
                >
                  <h3 className="text-2xl font-bold mb-8 text-primary">{category.category}</h3>
                  <div className="space-y-6">
                    {category.items.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span>{skill.name}</span>
                          <span className="text-primary/80">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-primary/60 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="section-title mb-8">Let's Work Together</h2>
            <p className="text-lg text-primary/80 mb-8 max-w-2xl mx-auto">
              I'm currently available for freelance projects and collaborations
            </p>
            <Button size="lg" className="bg-primary/80 hover:bg-primary/90 text-white backdrop-blur-sm">
              Get in Touch
            </Button>
          </div>
        </section>
      </main>

      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-primary/80">
          <p>© 2024. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

