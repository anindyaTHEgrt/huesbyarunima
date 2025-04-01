import Hero from "@/components/hero"
import About from "@/components/about"
import Classes from "@/components/classes"
import Gallery from "@/components/gallery"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WorkshopBanner from "@/components/workshop-banner"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 to-neutral-100 overflow-hidden">
      <Navbar />
      <Hero />
      <WorkshopBanner />
      <About />
      <Classes />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}

