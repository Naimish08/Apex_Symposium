"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, MapPin, FileText } from "lucide-react";
import Link from "next/link";
import { CountdownTimer } from "./CountdownTimer";

const logos = [
  { name: "SPIT Logo", src: "resc/logos/SPIT.jpg?height=80&width=80", rounded: true, link: "https://www.spit.ac.in" },
  { name: "NISP Logo", src: "resc/logos/NISP.png?height=120&width=180", rounded: true, link: "https://nisp.spit.ac.in" },
  { name: "SPTBI Logo", src: "resc/logos/sptbilogo.png?height=120&width=240", rounded: false, link: "https://www.sptbi.com/" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[url('/resc/cover_image.jpg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex min-h-screen items-center">
            <div className="w-full space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="space-y-6 lg:space-y-8">
                {/* Heading */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="relative flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                      <div className="absolute h-3 w-3 bg-red-500 rounded-full animate-ping" />
                    </div>
                    <span className="text-red-500 font-medium text-sm md:text-base">COMING SOON</span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                    Apex{" "}
                    <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                      Symposium
                    </span>
                  </h1>
                  <p className="text-base md:text-xl lg:text-2xl text-gray-400 max-w-xl">
                    Join us for two days of innovation, technology, and entrepreneurship
                  </p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col sm:flex-row flex-wrap gap-4"
                >
                  <Link
                    href="#register"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Discover More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>

                  <Link
                    href="#schedule"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-gray-300 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Schedule
                  </Link>

                  {/* View Brochure Button */}
                  <a
                    href="/Apex 2.0 brochure.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-gray-300 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    View Brochure
                  </a>
                </motion.div>

                {/* Event Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-rose-500" />
                    <span className="text-sm md:text-base">November 13-14, 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-rose-500" />
                    <span className="text-sm md:text-base">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-rose-500" />
                    <span className="text-sm md:text-base">Mumbai, India</span>
                  </div>
                </motion.div>

                {/* Logos */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="pt-6"
                >
                  <p className="text-sm text-gray-500 mb-4">Presented by</p>
                  <div className="grid grid-cols-2 sm:flex items-center gap-4 sm:gap-8">
                    {logos.map((logo, index) => (
                      <motion.a
                        key={index}
                        href={logo.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className={
                          logo.name === "SPTBI Logo"
                            ? "col-span-2 flex justify-center"
                            : logo.name === "NISP Logo"
                            ? "flex justify-end"
                            : "flex justify-start"
                        }
                      >
                        <img
                          src={logo.src || "/placeholder.svg"}
                          alt={logo.name}
                          className={`opacity-100 hover:opacity-100 transition-all duration-300
                            ${logo.rounded ? "h-24 w-24 rounded-full" : "h-24 w-33 rounded-lg content-center"}`}
                        />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Timer */}
              <div className="flex items-center justify-center lg:justify-end">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
