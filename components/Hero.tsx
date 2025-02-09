"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { CountdownTimer } from "./CountdownTimer"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6">
        <div className="flex min-h-[calc(100vh-80px)] items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 py-12 lg:py-20 w-full">
            <div className="space-y-6 lg:space-y-8">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="relative flex items-center">
                    <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse" />
                    <div className="absolute h-3 w-3 bg-red-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-red-500 font-medium">LIVE NOW</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4">
                  Apex{" "}
                  <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
                    Symposium
                  </span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-xl">
                  Join us for two days of innovation, technology, and entrepreneurship
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="#register"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-white bg-gradient-to-r from-rose-500 to-purple-500 rounded-lg hover:opacity-90 transition-opacity"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="#schedule"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 text-base sm:text-lg font-medium text-gray-300 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#schedule")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  View Schedule
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-rose-500" />
                  <span>February 18-19, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-rose-500" />
                  <span>9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-rose-500" />
                  <span>Mumbai, India</span>
                </div>
              </motion.div>
            </div>

            <div className="flex items-center justify-center lg:justify-end">
              <CountdownTimer />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}

