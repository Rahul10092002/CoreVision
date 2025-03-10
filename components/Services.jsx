"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Briefcase,
  FileVideo,
  LucideBrainCircuit,
  Monitor,
  MonitorSmartphone,
} from "lucide-react";
import { FaTwitterSquare } from "react-icons/fa";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const services = [
    {
      icon: <FileVideo className="h-6 w-6 text-red-500" />,
      title: "Video Marketing Strategy",
      description:
        "Comprehensive video marketing plans tailored to your business goals and target audience.",
    },
    {
      icon: <Monitor className="h-6 w-6 text-green-500" />,
      title: "Content Production",
      description:
        "High-quality video creation and editing that captures your brand's unique voice and message.",
    },
    {
      icon: <FaTwitterSquare className="h-6 w-6 text-sky-500" />,
      title: "Social Media Management",
      description:
        "End-to-end social media strategy, content creation, and community engagement.",
    },
    {
      icon: <Briefcase className="h-6 w-6 text-purple-500" />,
      title: "Ad Campaign Management",
      description:
        "Strategic planning, execution, and optimization of paid advertising campaigns across platforms.",
    },
    {
      icon: <MonitorSmartphone className="h-6 w-6 text-yellow-500" />,
      title: "Website Development",
      description:
        "Conversion-focused website design and development that aligns with your marketing goals.",
    },
    {
      icon: <LucideBrainCircuit className="h-6 w-6 text-gray-600" />,
      title: "AI-Powered Solutions",
      description:
        "Cutting-edge AI tools for content creation, audience targeting, and marketing automation.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-20 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-blue-900 mx-auto mb-8"></div>
          <p className="text-gray-700">
            We specialize in comprehensive video marketing and digital
            strategies for businesses and content creators.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="p-6">
                <motion.div
                  className="mb-4 w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
