"use client"

import { Gift, MousePointer, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import { ContactForm } from "@/components/contact-form"
import { motion } from "framer-motion"

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
    title: "Angelestudio",
    description: "A agency website for a web development and design, custom social media marketing",
    image: "/agencia.png",
    tags: ["Astro", "Tailwind", "Javascript"],
    link: "https://angelestudio.vercel.app/",
    github: "",
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
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* HERO */}
      <section className="min-h-[100vh] flex flex-col items-center justify-center text-center p-2">
        <h1 className="space-y-4">
          <div className="text-xl md:text-2xl text-primary mb-4 ">FULLSTACK DEVELOPER</div>
          <div className="hero-title relative text-white">
            <MousePointer className="absolute -top-12 right-0 text-primary animate-bounce" />
            <Gift className="absolute -right-12 top-0 text-primary animate-pulse" />
            KERWIN ANGELES
          </div>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground py-3">I BUILD FULLSTACK AND ACCESSIBLE WEBSITES</p>
        <ContactForm />
      </section>

      {/* PROJECTS */}
      <section className="w-full max-w-5xl mx-auto py-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white/10 border border-white/10 shadow-lg overflow-hidden flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(80, 0, 120, 0.25)' }}
            >
              <div className="w-full aspect-video relative">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-blue-100 mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-900/60 text-blue-100 border-blue-800/40">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Link href={project.link} className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </Link>
                  {project.github && (
                    <Link href={project.github} className="flex items-center gap-2 text-sm text-blue-200 hover:text-white transition-colors">
                      <Github className="w-4 h-4" /> Source Code
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="w-full max-w-4xl mx-auto py-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category, i) => (
            <motion.div
              key={i}
              className="rounded-2xl bg-white/10 border border-white/10 shadow-lg p-8 flex flex-col gap-6 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.03, boxShadow: '0 6px 24px 0 rgba(80, 0, 120, 0.18)' }}
            >
              <h3 className="text-xl font-bold text-blue-200 mb-4 text-center">{category.category}</h3>
              <div className="flex flex-col gap-4">
                {category.items.map((skill, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="flex justify-between text-sm font-medium text-blue-100">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-blue-900/40 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-700 rounded-full"
                        style={{ width: '100%' }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 w-full text-center text-blue-200 text-sm mt-8">
        © 2024. All rights reserved.
      </footer>
    </div>
  )
}

