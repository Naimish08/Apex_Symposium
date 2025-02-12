"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

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
  {
    name: "Dr.Ganga S",
    role: "Mentor-in-Residence, SINE",
    image: "/resc/speakers/ganga.png",
    topic: "TBA"
  },
  {
    name: "Mr. Parthesh Shah",
    role: "Co-Founder, Knight Fintech",
    image: "/resc/speakers/parthesh.png",
    topic: "TBA"
  },
  {
    name: "Mr. Sandeep Chandalia",
    role: "Co-Founder, Transpure",
    image: "/resc/speakers/sandeep.jpg",
    topic: "TBA"
  },
  {
    name: "Mr. Devansh Lakhani",
    role: "Angel Investor, LFS",
    image: "/resc/speakers/devansh.png",
    topic: "TBA"
  },
  {
    name: "Mr. Champ Alreja",
    role: "Co-Founder, GOQii",
    image: "/resc/speakers/champ.png",
    topic: "TBA"
  },
  {
    name: "Mr. Abhishek Barari",
    role: "Co-Founder, GOQii",
    image: "/resc/speakers/abhishek.png",
    topic: "TBA"
  },
  {
    name: "Mr. Nilesh Dungarwal",
    role: "CEO, WorkIndia",
    image: "/resc/speakers/nilesh.png",
    topic: "TBA"
  },
  {
    name: "Mr. Mitesh Jain",
    role: "Co-Founder & CTO, Symbo",
    image: "/resc/speakers/mitesh.png",
    topic: "TBA"
  },
  {
    name: "Mr. Prasad Shetty",
    role: "VP Portfolio & Opp, SINE",
    image: "/resc/speakers/prasad.jpg",
    topic: "TBA"
  },
  {
    name: "Ms. Alina Namazi",
    role: "Influencer",
    image: "/resc/speakers/alina.png",
    topic: "TBA"
  }
];

export function Speakers() {
  return (
    <div className="container mx-auto px-6 lg:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-20 text-white"
      >
        Chief Guests
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
          >
            <Card className="group relative bg-black/50 border border-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:border-[#00F0FF]/50 transition duration-300">
              <CardContent className="p-0">
                <div className="relative aspect-[4/5]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF1CF7]/10 to-[#00F0FF]/10 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300 z-20" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#FF1CF7] to-[#00F0FF] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                  <img
                    src={speaker.image || "/placeholder.svg"}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-30">
                    <div className="space-y-1">
                      <motion.h3
                        className="text-lg font-bold text-white group-hover:text-[#00F0FF] transition-colors duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.3 }}
                      >
                        {speaker.name}
                      </motion.h3>
                      <p className="text-sm text-[#FF1CF7]">{speaker.role}</p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 right-2 w-8 h-8 border border-white/10 rounded-full opacity-50 group-hover:border-[#00F0FF]/50 transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-2 h-2 bg-[#FF1CF7] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
