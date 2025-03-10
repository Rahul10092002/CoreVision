"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header({
  isMenuOpen,
  setIsMenuOpen,
  scrolled,
  handleNavClick,
}) {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "About Us", id: "about" },
    { name: "Why Us", id: "why-us" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Image
                src="/WEBP.webp"
                width={40}
                height={40}
                alt="CoreVision"
                className=""
              />
            </motion.div>
            <span className="text-3xl font-bold">
              <span className="gradient-text">CoreVision</span>
            </span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm text-gray-700 hover:text-orange-500 transition-colors cursor-pointer font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {item.name}
            </motion.button>
          ))}
          <motion.button
            className="py-2 px-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            onClick={() =>
              window.open(
                "https://wa.me/7869369536?text=Hello%2C%20I%20am%20interested%20in%20the%20strategy%20call!",
                "_blank"
              )
            }
          >
            Get a Free Strategy Call
          </motion.button>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-b"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.05 * index }}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.35 }}
              onClick={() =>
                window.open(
                  "https://wa.me/7869369536?text=Hello%2C%20I%20am%20interested%20in%20the%20strategy%20call!",
                  "_blank"
                )
              }
            >
              Get a Free Strategy Call
            </motion.button>
          </div>
        </motion.div>
      )}
    </header>
  );
}
