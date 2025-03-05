import Image from "next/image"

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-gray-300">See how we bring stories to life with precision editing and creativity.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-lg">
              <Image
                src={`/placeholder.svg?height=720&width=1280`}
                width={640}
                height={360}
                alt={`Portfolio item ${item}`}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="font-bold text-lg">Project Title {item}</h3>
                  <p className="text-sm text-gray-300">Category • Client</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transition-colors">
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
                    className="h-5 w-5"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  <span className="sr-only">Play video</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex h-10 px-6 py-2 text-sm font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transition-colors">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

