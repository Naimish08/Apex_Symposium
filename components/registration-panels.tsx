"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const events = [
  {
    title: "Apex Symposium",
    description: "Join us for two days of innovation, technology, and entrepreneurship",
    details:
      "The Apex Symposium is a premier event bringing together industry leaders, innovators, and entrepreneurs. Dive deep into cutting-edge technologies, participate in engaging workshops, and network with like-minded professionals.",
    price: "₹1999",
  },
  {
    title: "Vision X Competition",
    description: "Showcase your innovative ideas and compete for exciting prizes",
    details:
      "Vision X is a high-stakes competition under the Apex Symposium umbrella. Present your groundbreaking ideas to a panel of expert judges, receive valuable feedback, and stand a chance to win substantial funding and mentorship opportunities.",
    price: "₹999",
  },
]

export function RegistrationPanels() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-white">{event.title}</h3>
              <ChevronDown
                className={`h-5 w-5 text-gray-400 transition-transform ${
                  expandedIndex === index ? "transform rotate-180" : ""
                }`}
              />
            </div>
            <p className="text-gray-400 mt-2">{event.description}</p>
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 space-y-4"
                >
                  <p className="text-gray-300">{event.details}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white">{event.price}</span>
                    <button className="px-6 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity">
                      Register Now
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

