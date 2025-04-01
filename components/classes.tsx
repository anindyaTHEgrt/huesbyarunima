"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from 'next/link';

export default function Classes() {
  const [activeTab, setActiveTab] = useState("workshops")

  const classes = [
    {
      title: "Beginner Art Class",
      description: "Perfect for those just starting their artistic journey",
      ageGroup: "6-12 years",
      schedule: "Mon & Wed, 4:00 PM - 5:30 PM",
      batchSize: "8-10 students",
      price: "₹2,500 per month",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Intermediate Art Class",
      description: "For students with basic knowledge looking to enhance their skills",
      ageGroup: "10-15 years",
      schedule: "Tue & Thu, 4:00 PM - 5:30 PM",
      batchSize: "8-10 students",
      price: "₹3,000 per month",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Advanced Art Class",
      description: "For serious art students looking to master techniques",
      ageGroup: "15+ years",
      schedule: "Sat & Sun, 10:00 AM - 12:00 PM",
      batchSize: "6-8 students",
      price: "₹3,500 per month",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  const workshops = [
    {
      title: "Watercolor Landscapes",
      description: "Learn to paint beautiful landscapes using watercolor techniques",
      date: "May 15, 2025",
      time: "10:00 AM - 1:00 PM",
      price: "₹1,500",
      image: "workshop_banners/workshop-photo.png?height=300&width=400",
      gformlink: "https://docs.google.com"
    },
    {
      title: "Portrait Drawing",
      description: "Master the art of capturing facial features and expressions",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      price: "₹1,800",
      image: "workshop_banners/workshop-photo.png?height=300&width=400",
      gformlink: "https://docs.google.com"
    },
    {
      title: "Mixed Media Art",
      description: "Explore creative possibilities by combining different art materials",
      date: "June 20, 2025",
      time: "11:00 AM - 3:00 PM",
      price: "₹2,000",
      image: "/placeholder.svg?height=300&width=400",
      gformlink: "https://docs.google.com"
    },
  ]

  return (
    <section id="classes" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Art Classes & Workshops</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-neutral-600">
            Join our regular art classes or special workshops to explore your creativity and develop your artistic
            skills
          </p>
        </motion.div>

        <Tabs defaultValue="workshops" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">

              <TabsTrigger value="workshops">Workshops</TabsTrigger>
              <TabsTrigger value="classes">Regular Classes</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="classes">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classes.map((classItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-neutral-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={classItem.image || "/placeholder.svg?height=300&width=400"}
                        alt={classItem.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{classItem.title}</CardTitle>
                      <CardDescription>{classItem.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-primary" />
                          <span>Age Group: {classItem.ageGroup}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <span>Schedule: {classItem.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-primary" />
                          <span>Batch Size: {classItem.batchSize}</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                          <span>Price: {classItem.price}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Enroll Now</Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="workshops">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-neutral-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <div className="relative h-48 w-full overflow-hidden">
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                        Upcoming
                      </div>
                      <Image
                        src={workshop.image || "/placeholder.svg?height=300&width=400"}
                        alt={workshop.title}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{workshop.title}</CardTitle>
                      <CardDescription>{workshop.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-primary" />
                          <span>Date: {workshop.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          <span>Time: {workshop.time}</span>
                        </div>
                        <div className="flex items-center gap-2 font-semibold">
                          <span>Price: {workshop.price}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href={workshop.gformlink} passHref legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer">
                          <Button className="w-full">Register Now</Button>
                        </a>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  )
}

