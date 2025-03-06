export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            About CoreVision
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-700">
                CoreVision is a strategic video marketing and digital growth
                agency dedicated to helping brands, businesses, and creators
                maximize their impact through high-quality content and
                innovative marketing strategies. We go beyond traditional video
                editing—our expertise lies in crafting data-driven video
                marketing campaigns, AI-powered automation, and social media
                growth strategies that drive real results.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses and content creators with high-impact
                video marketing and digital strategies that not only capture
                attention but also drive measurable growth.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">What We Do</h3>
              <p className="text-gray-700">
                In today's digital landscape, content alone isn't enough. That's
                why we integrate creative storytelling, advanced marketing
                techniques, and AI-driven automation to ensure your brand stands
                out. From developing engaging video strategies to managing ad
                campaigns, optimizing content performance, and building
                conversion-focused websites, CoreVision offers end-to-end
                solutions tailored to your goals.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be a leading digital marketing and video strategy agency
                known for creativity, innovation, and data-driven results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
