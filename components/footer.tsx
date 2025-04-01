"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hues by Arunima</h3>
            <p className="text-neutral-400 mb-4">
              Bringing out the artist in you through classes, workshops, and inspiration.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", id: "hero" },
                { name: "About", id: "about" },
                { name: "Classes", id: "classes" },
                { name: "Gallery", id: "gallery" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Class Schedule</h3>
            <ul className="space-y-2 text-neutral-400">
              <li>Monday & Wednesday: 4:00 PM - 5:30 PM</li>
              <li>Tuesday & Thursday: 4:00 PM - 5:30 PM</li>
              <li>Saturday & Sunday: 10:00 AM - 12:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hues by Arunima. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

