export default function WhyUs() {
  const reasons = [
    {
      title: "Data-Driven Strategies",
      description:
        "Every decision is backed by insights, analytics, and industry trends.",
      icon: (
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
          className="h-6 w-6 text-orange-500"
        >
          <path d="M3 3v18h18"></path>
          <path d="M18 17V9"></path>
          <path d="M13 17V5"></path>
          <path d="M8 17v-3"></path>
        </svg>
      ),
    },
    {
      title: "AI-Powered Efficiency",
      description:
        "We leverage AI tools for automation, audience targeting, and content optimization.",
      icon: (
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
          className="h-6 w-6 text-blue-500"
        >
          <path d="M12 2a8 8 0 0 0-8 8c0 5.2 8 12 8 12s8-6.8 8-12a8 8 0 0 0-8-8Z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
    },
    {
      title: "End-to-End Management",
      description:
        "From content planning to execution, we handle everything so you can focus on growth.",
      icon: (
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
          className="h-6 w-6 text-orange-500"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: "Multi-Platform Expertise",
      description:
        "Whether it's Instagram, YouTube, Facebook, or websites, we create impactful content that resonates.",
      icon: (
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
          className="h-6 w-6 text-blue-500"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-us"
      className="py-20 orange-to-blue-gradient bg-opacity-10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Why Choose CoreVision?
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
          <p className="text-gray-700">
            We deliver exceptional quality with a focus on your unique vision
            and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex gap-4 bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex-shrink-0 mt-1">{reason.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                <p className="text-gray-700">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
