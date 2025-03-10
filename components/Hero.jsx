"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!backgroundRef.current) return;

      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20 - 10; // -10 to 10
      const y = (clientY / window.innerHeight) * 20 - 10; // -10 to 10

      backgroundRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 orange-to-blue-gradient opacity-10 transition-transform duration-300 ease-out"
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto space-y-8 text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Where{" "}
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              Creativity
            </motion.span>{" "}
            Meets{" "}
            <motion.span
              className="gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
            >
              Growth
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl text-gray-700 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.7 }}
          >
            Elevate Your Brand with Powerful Video Marketing & Social Media
            Strategies
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            At CoreVision, we don't just create videos—we craft strategic
            content that builds brand identity, drives engagement, and boosts
            growth. Our expertise in video marketing and social media ensures
            that every piece of content serves a purpose, helping businesses and
            creators stand out in a crowded digital world.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            <motion.button
              className="inline-flex items-center justify-center h-12 px-8 py-3 text-base font-medium text-white bg-orange-500 rounded-md hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open(
                  "https://wa.me/7869369536?text=Hello%2C%20I%20am%20interested%20in%20the%20strategy%20call!",
                  "_blank"
                )
              }
            >
              Get a Free Strategy Call
              <motion.svg
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
                initial={{ x: 0 }}
                animate={{ x: [0, 5, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 2,
                }}
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
