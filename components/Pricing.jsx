export default function Pricing() {
  const packages = [
    {
      title: "Starter",
      description: "Basic edits & cuts",
      features: [
        "Basic color correction",
        "Simple transitions",
        "Audio balancing",
        "Up to 5 minutes final video",
        "1 revision included",
      ],
      popular: false,
    },
    {
      title: "Pro",
      description: "Advanced editing, effects & transitions",
      features: [
        "Advanced color grading",
        "Custom transitions & effects",
        "Sound design & mixing",
        "Up to 15 minutes final video",
        "3 revisions included",
      ],
      popular: true,
    },
    {
      title: "Premium",
      description: "Full-scale production-level editing",
      features: [
        "Cinema-grade color grading",
        "Advanced VFX & motion graphics",
        "Professional sound design",
        "Unlimited video length",
        "Unlimited revisions",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-black to-blue-900/30"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Pricing & Packages
          </h2>
          <p className="text-gray-300">
            We offer flexible pricing based on your project needs. Choose the
            package that works for you or contact us for a custom quote.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden relative"
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-bold">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold">{pkg.title}</h3>
                <p className="text-gray-400 mb-4">{pkg.description}</p>
                <div className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
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
                        className="h-5 w-5 text-orange-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 border-t border-gray-800">
                <button className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gray-800 rounded-lg p-6 max-w-2xl">
            <h3 className="text-xl font-bold mb-2">Need a custom solution?</h3>
            <p className="text-gray-300 mb-4">
              We offer tailored packages for specific project requirements.
              Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
