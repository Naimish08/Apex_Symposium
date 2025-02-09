"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useState } from "react"

const schedule = {
  day1: [
    { time: "1:30 PM - 2:30 PM", event: "Registration Starts" },
    { time: "2:30 PM - 3:00 PM", event: "Inauguration" },
    {
      time: "3:00 PM - 5:00 PM",
      event: [
        "Students: Case Study Competition",
        "Teachers: Entreprenuership Culture Workshop",
        "Startups: Seminar on IPR",
        "Startups: 1 minute pitching",
      ],
    },
    { time: "5:00 PM - 5:30 PM", event: "High Tea + Networking" },
    { time: "5:30 PM - 6:30 PM", event: "Unlocking Innovation: A FinTech Conversation" },
    { time: "6:30 PM - 7:00 PM", event: "Champ Alreja (Cofounder, GOQii)" },
    { time: "7:00 PM - 7:30 PM", event: "Visionary Speaker" },
  ],
  day2: [
    { time: "10:00 AM - 11:00 AM", event: "Registration + Breakfast" },
    {
      time: "11:00 AM - 12:00 PM",
      event: [
        "Students: Business Canvas Model Competition (continued)",
        "Teachers and Startups: Legal Compliance (Mr. Hemant Kelkar, Founder & Principal - VCounsel Legal Services)",
      ],
    },
    { time: "12:00 PM - 12:30 PM", event: "Nilesh Dungarwal, Co-Founder of WorkIndia" },
    { time: "12:45 PM - 1:15 PM", event: "Mitesh Jain, Co-Founder and CTO at Symbo" },
    { time: "1:15 PM - 2:00 PM", event: "Lunch + Networking" },
    {
      time: "2:00 PM - 3:30 PM",
      event: "Beyond the Pitch: Funding Opportunities Explored (Mr. Prasad Shetty, SINE IIT Bombay)",
    },
    { time: "3:30 PM - 4:00 PM", event: "Behind the Canvas: Fireside Chat with an Influencer (Alina Namazi)" },
    { time: "4:00 PM - 4:30 PM", event: "Event Conclusion" },
    { time: "4:30 PM - 5:00 PM", event: "HighTea + Networking" },
  ],
}

export function Schedule() {
  const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1")

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-white"
      >
        Event Schedule
      </motion.h2>

      <Card className="bg-white/5 border-white/10">
        <CardContent className="p-4 sm:p-6 md:p-8">
          <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center">
            <button
              onClick={() => setActiveDay("day1")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors ${
                activeDay === "day1"
                  ? "bg-gradient-to-r from-rose-500 to-purple-500 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              Day 1
            </button>
            <button
              onClick={() => setActiveDay("day2")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-colors ${
                activeDay === "day2"
                  ? "bg-gradient-to-r from-rose-500 to-purple-500 text-white"
                  : "bg-white/10 text-gray-400 hover:bg-white/20"
              }`}
            >
              Day 2
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {schedule[activeDay].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white/5 p-4 sm:p-6 rounded-xl">
                    <div className="flex flex-col gap-2 sm:gap-4">
                      <div className="text-rose-400 font-medium">{item.time}</div>
                      <div className="flex-1">
                        {Array.isArray(item.event) ? (
                          <ul className="space-y-2">
                            {item.event.map((subEvent, subIndex) => (
                              <li key={subIndex} className="text-sm sm:text-base text-gray-300">
                                • {subEvent}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="text-sm sm:text-base text-gray-300">{item.event}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

