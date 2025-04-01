"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, Clock } from "lucide-react"

export default function WorkshopBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Set workshop date to 10 days from now
  useEffect(() => {
    const workshopDate = new Date()
    workshopDate.setDate(workshopDate.getDate() + 10)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = workshopDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="relative py-6 bg-gradient-to-r from-primary/10 to-secondary/10 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm -z-10" />

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-1">Upcoming Workshop</h3>
            <h2 className="text-2xl font-bold text-neutral-800 mb-2">Watercolor Landscapes</h2>
            <div className="flex items-center gap-4 text-neutral-600">
              <div className="flex items-center gap-1">
                <Calendar size={16} />
                <span>May 15, 2025</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>10:00 AM - 1:00 PM</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-neutral-600 mb-2">Registration closes in:</p>
            <div className="flex gap-2 md:gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-lg w-14 h-14 flex items-center justify-center text-xl font-bold text-primary">
                    {item.value}
                  </div>
                  <span className="text-xs text-neutral-600 mt-1">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <Button className="bg-primary hover:bg-primary/90 text-white"
                  onClick={() => scrollToSection('classes')}
          >Register Now</Button>
        </div>
      </div>
    </motion.div>
  )
}

