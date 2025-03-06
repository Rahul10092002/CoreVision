export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "CoreVision transformed our digital presence with their strategic video marketing approach. Our engagement increased by 150% within just two months!",
      author: "Emma R.",
      role: "Marketing Director",
      initials: "ER",
    },
    {
      quote:
        "The best digital marketing team we've worked with. Their data-driven approach and AI-powered strategies delivered measurable ROI for our brand.",
      author: "Mark T.",
      role: "CEO, Tech Startup",
      initials: "MT",
    },
    {
      quote:
        "CoreVision helped us build a comprehensive video marketing strategy that aligned perfectly with our business goals. Highly recommended!",
      author: "Jennifer S.",
      role: "E-commerce Founder",
      initials: "JS",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 orange-to-blue-gradient bg-opacity-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Hear what our clients have to say about our video marketing and
            growth strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
            >
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
              <p className="text-gray-700 mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full orange-to-blue-gradient flex items-center justify-center text-white">
                  <span className="font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
