export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/80 z-10" />
        {/* <div className="bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center h-full w-full opacity-50" /> */}
      </div>
      <div className="container mx-auto px-4 relative z-10 py-24 md:py-32 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Transform Your Footage into <span className="text-purple-500">Cinematic Masterpieces</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Elevate your story with stunning edits that captivate your audience and bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
           
            <button className="inline-flex items-center justify-center h-12 px-6 py-3 text-base font-medium text-white bg-transparent border border-gray-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transition-colors">
              See Our Work
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
                className="ml-2 h-4 w-4"
              >
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

