"use client";

import Image from "next/image";

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
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="/WEBP.webp"
              width={40}
              height={40}
              alt="CoreVision"
              className=""
            />
            <span className="text-3xl font-bold">
              <span className="gradient-text">CoreVision</span>
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm text-gray-700 hover:text-orange-500 transition-colors cursor-pointer font-medium"
            >
              {item.name}
            </button>
          ))}
          <button
            className="py-2 px-4 bg-orange-500 text-white rounded-md hover:opacity-90 transition-opacity"
            onClick={() =>
              window.open(
                "https://wa.me/7869369536?text=Hello%2C%20I%20am%20interested%20in%20the%20strategy%20call!",
                "_blank"
              )
            }
          >
            Get a Free Strategy Call
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500"
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
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
              >
                {item.name}
              </button>
            ))}
            <button
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium bg-orange-500 text-white"
              onClick={() =>
                window.open(
                  "https://wa.me/7869369536?text=Hello%2C%20I%20am%20interested%20in%20the%20strategy%20call!",
                  "_blank"
                )
              }
            >
              Get a Free Strategy Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

