export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Send Your Footage",
      description:
        "Upload your raw files securely through our easy-to-use platform.",
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
          className="h-8 w-8 text-orange-500"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
      ),
    },
    {
      number: 2,
      title: "Tell Us Your Vision",
      description:
        "Share your ideas, preferences, and goals for the final video.",
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
          className="h-8 w-8 text-orange-500"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
    {
      number: 3,
      title: "We Edit & Refine",
      description:
        "Our experts craft a stunning video based on your requirements.",
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
          className="h-8 w-8 text-orange-500"
        >
          <path d="M12 20h9"></path>
          <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
        </svg>
      ),
    },
    {
      number: 4,
      title: "Review & Finalize",
      description: "Request revisions if needed and receive your final cut.",
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
          className="h-8 w-8 text-orange-500"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            How It Works
          </h2>
          <p className="text-gray-300">
            Our simple process makes it easy to get started with your video
            editing project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center mx-auto mb-4">
                {step.icon}
              </div>
              <div className="relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 text-lg font-bold bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  {step.number}
                </div>
              </div>
              <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="py-3 px-6 text-base font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black transition-colors">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
}
