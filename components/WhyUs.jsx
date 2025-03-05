export default function WhyUs() {
  const reasons = [
    {
      title: "Expert Editors",
      description: "Skilled professionals with years of experience in video editing and post-production.",
    },
    {
      title: "Fast Turnaround",
      description: "High-quality edits delivered on time, every time, without compromising on quality.",
    },
    {
      title: "Custom Edits",
      description: "Tailored to match your vision and style, ensuring your content stands out.",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates with flexible packages designed to fit your budget.",
    },
    {
      title: "Seamless Collaboration",
      description: "Easy revision process for perfection, with clear communication throughout.",
    },
    {
      title: "Creative Excellence",
      description: "Innovative approaches that elevate your content beyond the ordinary.",
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">Why Choose CoreVision?</h2>
          <p className="text-gray-300">We deliver exceptional quality with a focus on your unique vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4">
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
                className="h-6 w-6 text-purple-500 flex-shrink-0 mt-1"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

