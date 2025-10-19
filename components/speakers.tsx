"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

/* 
// Speakers data is commented out because the chief guests haven't been announced yet
const speakers = [
  {
    name: "Dr. Padmaja Joshi",
    role: "Senior Director, CDAC",
    image: "/resc/speakers/padmaja.png",
    topic: "TBA"
  },
  {
    name: "Dr.Aarti Karande",
    role: "Professor,SPIT",
    image: "/resc/speakers/aarti.jpg",
    topic: "TBA"
  },
  {
    name: "Mr.Parvez Kudrolli",
    role: "Principal Associate, Khurana & Khurana",
    image: "/resc/speakers/parvez.png",
    topic: "TBA"
  },
  // ... more speakers
];
*/

export function Speakers() {
  return (
    <div className="container mx-auto px-6 lg:px-16">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-20 text-white"
      >
        Chief Guests
      </motion.h2>

      {/* Placeholder message since speakers are not announced */}
      <Card className="bg-black/40 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/20 p-8 flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
            Chief Guests Coming Soon
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            We are finalizing the list of chief guests. Stay tuned for updates!
          </p>
        </motion.div>
      </Card>

      {/*
      // Original speakers grid code can be uncommented later when the list is finalized
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {speakers.map((speaker, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }}>
            <Card> ... </Card>
          </motion.div>
        ))}
      </div>
      */}
    </div>
  );
}
