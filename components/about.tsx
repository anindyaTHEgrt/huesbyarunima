"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Brush, Users } from "lucide-react"

export default function About() {
  const milestones = [
    {
      year: "2010",
      title: "Started Teaching",
      description: "Began teaching art in prestigious schools across Navi Mumbai",
    },
    {
      year: "2015",
      title: "First Exhibition",
      description: "Hosted first solo exhibition featuring landscape paintings",
    },
    {
      year: "2018",
      title: "Art Workshop Series",
      description: "Launched a series of specialized art workshops for all age groups",
    },
    {
      year: "2020",
      title: "Home Studio",
      description: "Established a dedicated home studio for classes and workshops",
    },
  ]

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">About the Artist</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-neutral-600">
            With over a decade of experience teaching art in Navi Mumbai's top schools and preschools
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary/20 rounded-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Artist at work"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">Arunima's Journey</h3>
            <p className="text-neutral-600 mb-6">
              I am an artist based in Navi Mumbai with over 10 years of experience teaching art in some of the most
              prominent schools and preschools in the city. My passion for art began at an early age, and I've dedicated
              my life to sharing that passion with others.
            </p>
            <p className="text-neutral-600 mb-8">
              I currently conduct art classes at my home, offering multiple batches throughout the week for students of
              all ages. I also host engaging art workshops to help participants explore their creativity. My teaching
              philosophy centers around nurturing individual expression while building strong technical foundations.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  icon: <Brush className="h-6 w-6 text-primary" />,
                  title: "10+ Years",
                  subtitle: "Teaching Experience",
                },
                { icon: <Users className="h-6 w-6 text-primary" />, title: "500+", subtitle: "Students Taught" },
                { icon: <Award className="h-6 w-6 text-primary" />, title: "25+", subtitle: "Exhibitions" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">{item.icon}</div>
                  <h4 className="font-bold text-neutral-800">{item.title}</h4>
                  <p className="text-sm text-neutral-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-neutral-800 text-center mb-12">My Artistic Journey</h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-neutral-200" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                    <div className="w-1/2" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold z-10">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="w-1/2" />
                  </div>

                  <div className={`flex ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                    <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-100">
                        <h4 className="text-lg font-bold text-neutral-800 mb-2">{milestone.title}</h4>
                        <p className="text-neutral-600">{milestone.description}</p>
                        <div className="text-primary font-bold mt-2">{milestone.year}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

