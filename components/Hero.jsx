export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 z-0 orange-to-blue-gradient opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Where <span className="gradient-text">Creativity</span> Meets{" "}
            <span className="gradient-text">Growth</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-700 font-medium">
            Elevate Your Brand with Powerful Video Marketing & Social Media
            Strategies
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At CoreVision, we don't just create videos—we craft strategic
            content that builds brand identity, drives engagement, and boosts
            growth. Our expertise in video marketing and social media ensures
            that every piece of content serves a purpose, helping businesses and
            creators stand out in a crowded digital world.
          </p>
          <div className="pt-4">
            <button
              className="inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-orange-500 rounded-md hover:opacity-90 transition-opacity shadow-lg"
              onClick={() =>
                window.open(
                  "https://wa.me/7869369536?text=Hello%2C%20I%20am%20interested%20in%20the%20strategy%20call!",
                  "_blank"
                )
              }
            >
              Get a Free Strategy Call
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
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
