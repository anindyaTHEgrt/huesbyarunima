"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      speedX: number
      speedY: number
    }[] = []

    const colors = ["#FF5E5B", "#D8D8D8", "#FFFFEA", "#00CECB", "#FFED66"]

    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 4 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: Math.random() * 0.5 - 0.25,
        speedY: Math.random() * 0.5 - 0.25,
      })
    }

    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY
        }

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.7
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/80 -z-10" />

      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          className="md:w-1/2 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-4">
            Discover the <span className="text-primary">Artist</span> in You
          </h1>
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-lg">
            Join art classes and workshops with Arunima, an experienced artist with over 10 years of teaching experience
            in Navi Mumbai.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Enroll in Classes
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              View Artwork
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform -translate-x-10 translate-y-10" />
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-neutral-200 bg-white/50 backdrop-blur-sm shadow-xl">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Artist painting"
                width={600}
                height={600}
                className="object-cover h-full w-full"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

