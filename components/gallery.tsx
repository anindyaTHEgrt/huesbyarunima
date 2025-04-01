"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    title: string
    description: string
    price?: string
    size?: string
    forSale: boolean
  } | null>(null)

  const artworks = {
    landscapes: [
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Sunset Valley",
        description: "Acrylic on canvas, inspired by the valleys of Western Ghats",
        price: "₹12,000",
        size: '24" x 36"',
        forSale: true,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Misty Mountains",
        description: "Watercolor painting of mountains shrouded in mist",
        price: "₹8,500",
        size: '18" x 24"',
        forSale: true,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Coastal Serenity",
        description: "Oil painting of the serene coastal landscape",
        forSale: false,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Riverside Reflections",
        description: "Acrylic painting capturing reflections on a calm river",
        price: "₹15,000",
        size: '30" x 40"',
        forSale: true,
      },
    ],
    indian: [
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Festival of Colors",
        description: "Vibrant depiction of Holi celebrations in India",
        price: "₹18,000",
        size: '36" x 48"',
        forSale: true,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Village Life",
        description: "Portrayal of traditional Indian village life",
        price: "₹14,000",
        size: '24" x 36"',
        forSale: true,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Classical Dancer",
        description: "Bharatanatyam dancer in motion",
        forSale: false,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Monsoon Magic",
        description: "Capturing the beauty of Indian monsoon",
        price: "₹10,000",
        size: '20" x 30"',
        forSale: true,
      },
    ],
    abstract: [
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Emotional Waves",
        description: "Abstract representation of human emotions",
        price: "₹20,000",
        size: '40" x 40"',
        forSale: true,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Cosmic Journey",
        description: "Abstract interpretation of space and cosmos",
        price: "₹16,000",
        size: '30" x 30"',
        forSale: true,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Inner Thoughts",
        description: "Visual representation of the subconscious mind",
        forSale: false,
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        title: "Harmony in Chaos",
        description: "Finding order in disorder through abstract forms",
        price: "₹22,000",
        size: '36" x 48"',
        forSale: true,
      },
    ],
  }

  return (
    <section id="gallery" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Art Gallery</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="max-w-2xl mx-auto text-neutral-600">
            Explore a collection of original artworks, many of which are available for purchase
          </p>
        </motion.div>

        <Tabs defaultValue="landscapes" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="landscapes">Landscapes</TabsTrigger>
              <TabsTrigger value="indian">Indian Themes</TabsTrigger>
              <TabsTrigger value="abstract">Abstract</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(artworks).map(([category, items]) => (
            <TabsContent key={category} value={category}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((artwork, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(artwork)}
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md bg-white">
                      <div className="relative h-64 w-full">
                        <Image
                          src={artwork.src || "/placeholder.svg?height=600&width=800"}
                          alt={artwork.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105 duration-300"
                        />
                        {artwork.forSale && (
                          <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                            For Sale
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-neutral-800">{artwork.title}</h3>
                        <p className="text-sm text-neutral-600 line-clamp-2">{artwork.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            <DialogHeader>
              <DialogTitle>{selectedImage?.title}</DialogTitle>
              <DialogDescription>{selectedImage?.description}</DialogDescription>
            </DialogHeader>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative h-80 md:h-96 w-full">
                <Image
                  src={selectedImage?.src || "/placeholder.svg?height=600&width=800"}
                  alt={selectedImage?.title || "Artwork"}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-between">
                <div className="space-y-4">
                  <p className="text-neutral-600">{selectedImage?.description}</p>

                  {selectedImage?.forSale && (
                    <>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-semibold">Price:</span>
                          <span>{selectedImage?.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-semibold">Size:</span>
                          <span>{selectedImage?.size}</span>
                        </div>
                      </div>

                      <Button className="w-full mt-4">Inquire About This Artwork</Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

