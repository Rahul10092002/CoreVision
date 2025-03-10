"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    title: "Short form content",
    description: "Motion Graphics and Fast Paced Editing",
    url: "https://www.youtube.com/embed/KixeMHwtWg0",
    thumbnail: "https://img.youtube.com/vi/KixeMHwtWg0/hqdefault.jpg",
  },
  {
    title: "Short form content 2",
    description: "Real Estate Marketing",
    url: "https://www.youtube.com/embed/LFU2oL2nM_4",
    thumbnail: "https://img.youtube.com/vi/LFU2oL2nM_4/hqdefault.jpg",
  },
  {
    title: "Ad Campaign Edit",
    description: "Advertisement for a business",
    url: "https://www.youtube.com/embed/hqZs677seMU",
    thumbnail: "https://img.youtube.com/vi/hqZs677seMU/hqdefault.jpg",
  },
  {
    title: "Ad Campaign Edit",
    description: "Advertisement for a business",
    url: "https://www.youtube.com/embed/dNRq0y9h64g",
    thumbnail: "https://img.youtube.com/vi/dNRq0y9h64g/hqdefault.jpg",
  },
  {
    title: "Brand Story",
    description: "Storytelling for brand identity",
    url: "https://www.youtube.com/embed/KixeMHwtWg0", // Placeholder, replace with actual video
    thumbnail: "https://img.youtube.com/vi/KixeMHwtWg0/hqdefault.jpg",
  },
  {
    title: "Product Launch",
    description: "New product introduction video",
    url: "https://www.youtube.com/embed/LFU2oL2nM_4", // Placeholder, replace with actual video
    thumbnail: "https://img.youtube.com/vi/LFU2oL2nM_4/hqdefault.jpg",
  },
];

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");
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

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo("");
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex >= videos.length - slidesToShow ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? videos.length - slidesToShow : prevIndex - 1
    );
  };

  const visibleVideos = [];
  for (let i = 0; i < slidesToShow; i++) {
    const index = (currentIndex + i) % videos.length;
    visibleVideos.push({ ...videos[index], index });
  }

  return (
    <section id="portfolio" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
          <p className="text-gray-700">
            See how we bring brands to life with strategic video marketing and
            creative content.
          </p>
        </motion.div>

        {/* Portfolio Slider */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              style={{
                width: `${(100 * videos.length) / slidesToShow}%`,
                transform: `translateX(-${
                  currentIndex * (100 / videos.length)
                }%)`,
              }}
              transition={{ duration: 0.5 }}
            >
              {videos.map((video, index) => (
                <div
                  key={index}
                  className="px-2"
                  style={{ width: `${100 / videos.length}%` }}
                >
                  <motion.div
                    className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-[220px] sm:h-[250px] md:h-[280px]"
                    onClick={() => openModal(video.url)}
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={video.thumbnail || "/placeholder.svg"}
                      fill
                      alt={video.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-white">
                          {video.title}
                        </h3>
                        <p className="text-sm text-gray-200">
                          {video.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white hover:bg-orange-600 transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-6 w-6"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        <span className="sr-only">Play video</span>
                      </button>
                    </motion.div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -mt-4 px-2">
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
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.button
            className="inline-flex h-10 px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ✖
            </button>
            <div className="aspect-video">
              <iframe
                src={selectedVideo}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
