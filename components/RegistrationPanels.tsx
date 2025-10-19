"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const events = [
  {
    title: "Apex Symposium",
    description: "Join us for two days of innovation, technology, and entrepreneurship",
    details:
      "Brought to you by NISP-S.P.I.T., APEX SYMPOSIUM 2025 is the ultimate gathering where entrepreneurial minds unite for a day of innovation, collaboration, and limitless possibilities! Registration and fees will be announced soon.",
    price: "To Be Announced",
    buttonLabel: "To Be Announced",
    link: "#" // Disabled
  },
  {
    title: "Vision X: Case Study Competition",
    description: "Showcase your innovative ideas and compete for exciting prizes",
    details:
      "Vision X is a premier case study competition under the Apex Symposium umbrella. Registration and prize details will be announced soon.",
    price: "To Be Announced",
    buttonLabel: "To Be Announced",
    link: "#" // Disabled
  },
  {
    title: "Event Brochure",
    description: "Get detailed insights about the Apex Symposium and Vision X Competition",
    details:
      "Download our official brochure to explore event details, schedules, and competition guidelines.",
    buttonLabel: "View Brochure",
    link: "/Apex 2.0 brochure.pdf"
  },
  // WhatsApp group commented out
  /*
  {
    title: "Join Our WhatsApp Group",
    description: "Stay updated with event announcements and important updates",
    details:
      "Join our official WhatsApp group to get real-time updates, interact with fellow participants, and stay connected with the event organizers.",
    buttonLabel: "Join Now",
    link: "https://chat.whatsapp.com/ELuxGNrYE5o3ifEv3V10oy"
  },
  */
]

export function RegistrationPanels() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {events.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="bg-black/30 backdrop-blur-xl p-6 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/10 cursor-pointer hover:border-cyan-500/70 transition-all duration-300 relative overflow-hidden group"
            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="flex justify-between items-center relative z-10">
              <h3 className="text-xl font-semibold text-cyan-400 group-hover:text-white transition-colors duration-300">
                {event.title}
              </h3>
              <ChevronDown
                className={`h-5 w-5 text-cyan-500 transition-transform ${
                  expandedIndex === index ? "rotate-180" : ""
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
                  className="mt-4 space-y-4 relative z-10"
                >
                  <p className="text-gray-300">{event.details}</p>

                  {/* Price & Button */}
                  <div className="flex justify-between items-center mt-2">
                    {event.price && (
                      <span className="text-2xl font-bold text-cyan-400">
                        {event.price}
                      </span>
                    )}
                    <a href={event.link}>
                      <button
                        disabled={event.link === "#"}
                        className={`px-6 py-2 font-medium rounded-lg shadow-md ${
                          event.link === "#"
                            ? "bg-gray-500 cursor-not-allowed opacity-60"
                            : "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-cyan-500/50 hover:opacity-90"
                        }`}
                      >
                        {event.buttonLabel}
                      </button>
                    </a>
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
