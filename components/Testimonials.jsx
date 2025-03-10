"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Determine how many slides to show based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    {
      quote:
        "Their attention to detail and creative approach to video content helped us stand out in a crowded market. The results speak for themselves!",
      author: "David K.",
      role: "Brand Manager",
      initials: "DK",
    },
    {
      quote:
        "Working with CoreVision has been a game-changer for our social media presence. They understand our audience and deliver content that resonates.",
      author: "Sarah P.",
      role: "Social Media Director",
      initials: "SP",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= testimonials.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - slidesToShow : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const visibleTestimonials = [];
  for (let i = 0; i < slidesToShow; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push({ ...testimonials[index], index });
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
          <p className="text-gray-700">
            Hear what our clients have to say about our video marketing and
            growth strategies.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons - positioned outside the slider container */}
          <div className="hidden md:flex justify-between absolute top-1/2 -left-12 -right-12 -mt-4 z-10">
            <motion.button
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-700" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-6 w-6 text-gray-700" />
            </motion.button>
          </div>

          {/* Responsive navigation buttons for mobile - inside the container */}
          <div className="md:hidden flex justify-between absolute top-1/2 left-2 right-2 -mt-4 z-10">
            <motion.button
              onClick={prevSlide}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-md hover:bg-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </motion.button>
          </div>

          {/* Slider container */}
          <div className="overflow-hidden px-4">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                width: `${(100 * testimonials.length) / slidesToShow}%`,
                transform: `translateX(-${
                  currentIndex * (100 / testimonials.length)
                }%)`,
              }}
              transition={{ duration: 0.5 }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-2"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <motion.div
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-yellow-500"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * star, duration: 0.3 }}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </motion.svg>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 flex-grow text-sm md:text-base">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div className="w-10 h-10 rounded-full orange-to-blue-gradient flex items-center justify-center text-white">
                        <span className="font-bold">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: testimonials.length - slidesToShow + 1 }).map(
              (_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-3 w-3 rounded-full ${
                    currentIndex === index ? "bg-orange-500" : "bg-gray-300"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
