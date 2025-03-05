export default function Header({ isMenuOpen, setIsMenuOpen, scrolled, handleNavClick }) {
  const navItems = [
    { name: "Services", id: "services" },
    { name: "Why Us", id: "why-us" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gray-800 ${scrolled ? "bg-black/90" : "bg-black"} backdrop-blur-sm transition-all duration-300`}
    >
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-purple-600"
          >
            <path d="M12 2v8"></path>
            <rect x="2" y="10" width="20" height="12" rx="2"></rect>
            <path d="m6 20 4-4 4 4 4-4"></path>
          </svg>
          <span className="text-xl font-bold">CoreVision</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-sm hover:text-purple-500 transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
        </nav>

        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800"
              >
                {item.name}
              </button>
            ))}
           
          </div>
        </div>
      )}
    </header>
  )
}

