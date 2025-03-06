"use client";

import { useState } from "react";
import Image from "next/image";

const videos = [
  {
    title: "Marketing Campaign 1",
    description: "Video Strategy • Brand Growth",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
  },
  {
    title: "Marketing Campaign 2",
    description: "Boosting Engagement",
    url: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    thumbnail: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
  },
  {
    title: "Marketing Campaign 3",
    description: "Brand Storytelling",
    url: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    thumbnail: "https://img.youtube.com/vi/2Vv-BfVoq4g/hqdefault.jpg",
  },
  {
    title: "Marketing Campaign 4",
    description: "Social Media Growth",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
  },
  {
    title: "Marketing Campaign 5",
    description: "Creative Advertising",
    url: "https://www.youtube.com/embed/kJQP7kiw5Fk",
    thumbnail: "https://img.youtube.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
  },
  {
    title: "Marketing Campaign 6",
    description: "Innovative Branding",
    url: "https://www.youtube.com/embed/L_jWHffIx5E",
    thumbnail: "https://img.youtube.com/vi/L_jWHffIx5E/hqdefault.jpg",
  },
];

export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState("");

  const openModal = (videoUrl) => {
    setSelectedVideo(videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo("");
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
          <p className="text-gray-700">
            See how we bring brands to life with strategic video marketing and
            creative content.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(video.url)}
            >
              <Image
                src={video.thumbnail}
                width={640}
                height={360}
                alt={video.title}
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4">
                  <h3 className="font-bold text-lg text-white">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-200">{video.description}</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white hover:opacity-90 transition-opacity">
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
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex h-10 px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors">
            View All Projects
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
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
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
