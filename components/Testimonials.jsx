export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "CoreVision transformed my raw footage into a stunning YouTube video! Professional and fast. I'll definitely be using their services again for my channel.",
      author: "Emma R.",
      role: "Content Creator",
      initials: "ER",
    },
    {
      quote:
        "The best video editing service for our brand. Highly recommended! Their team understood our vision perfectly and delivered beyond our expectations.",
      author: "Mark T.",
      role: "Marketing Manager",
      initials: "MT",
    },
    {
      quote:
        "CoreVision edited our wedding video and we couldn't be happier. They captured all the special moments perfectly and created a beautiful story.",
      author: "Jennifer S.",
      role: "Wedding Client",
      initials: "JS",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Client Testimonials</h2>
          <p className="text-gray-300">Hear what our clients have to say about our video editing services.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-500"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <span className="font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

