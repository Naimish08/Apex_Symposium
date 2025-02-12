"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [eventStarted, setEventStarted] = useState(false);

  useEffect(() => {
    // Ensure correct UTC time handling
    const eventDate = new Date(Date.UTC(2025, 1, 18, 8, 0, 0)).getTime(); // 202-02-18 08:00 UTC

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference <= 0) {
        setEventStarted(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft(); // Run immediately to prevent delay
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (eventStarted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10">
          <h3 className="text-lg sm:text-xl font-semibold text-center text-white">
            Event Has Started!
          </h3>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="bg-black/40 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border border-white/10">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center text-white">
          Event Starts In
        </h3>
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-purple-500/20 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative bg-black/50 backdrop-blur-sm p-2 sm:p-3 rounded-xl border border-white/10 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm text-gray-400 capitalize">{unit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}