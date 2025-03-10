"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="gradient-text">CoreVision</span>
              </span>
            </div>
            <p className="text-gray-600">Where Creativity Meets Growth</p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
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
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span className="sr-only">Instagram</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
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
                  className="h-5 w-5"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
                <span className="sr-only">YouTube</span>
              </motion.a>
              <motion.a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
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
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                <span className="sr-only">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="font-bold text-lg mb-4 text-gray-800">Services</h3>
            <ul className="space-y-2">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Video Marketing Strategy
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Content Production
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Social Media Management
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Ad Campaign Management
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Website Development
                </a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="font-bold text-lg mb-4 text-gray-800">Company</h3>
            <ul className="space-y-2">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About Us
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Portfolio
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Testimonials
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Blog
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h3 className="font-bold text-lg mb-4 text-gray-800">Legal</h3>
            <ul className="space-y-2">
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Privacy Policy
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Terms of Service
                </a>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Cookie Policy
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p>&copy; {currentYear} CoreVision. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
