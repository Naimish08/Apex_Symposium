"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const eventDate = new Date("2024-02-18T13:30:00") // Setting to 1:30 PM as per the schedule

    const calculateTimeLeft = () => {
      const difference = eventDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    calculateTimeLeft()

    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full max-w-sm lg:max-w-md"
    >
      <div className="bg-white/5 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10">
        <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center text-white">Event Starts In</h3>
        <div className="grid grid-cols-4 gap-3 sm:gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/50 backdrop-blur-sm p-2 sm:p-4 rounded-xl border border-white/10 text-center">
                <div className="text-xl sm:text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs sm:text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

