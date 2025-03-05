"use client"

import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import WhyUs from "@/components/WhyUs"
import Portfolio from "@/components/Portfolio"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import HowItWorks from "@/components/HowItWorks"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    setIsMenuOpen(false)

    // Find the element
    const element = document.getElementById(sectionId)
    if (element) {
      // Get the element's position relative to the viewport
      const rect = element.getBoundingClientRect()

      // Calculate the absolute position and adjust for header height
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const headerHeight = 64 // This should match your header height
      const absoluteTop = rect.top + scrollTop - headerHeight

      // Scroll to the element
      window.scrollTo({
        top: absoluteTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrolled={scrolled}
        handleNavClick={handleNavClick}
      />

      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <HowItWorks />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

