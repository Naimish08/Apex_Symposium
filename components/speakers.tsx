"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const speakers = [
  {
    name: "Dr. Padmaja Joshi",
    role: "Senior Director, CDAC",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Parvez Kudrolli",
    role: "Principal Associate, Khurana & Khurana",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Dr. Ganga S",
    role: "Mentor-in-Residence, SINE",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Parthesh Shah",
    role: "Co-Founder, Knight Fintech",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Sandeep Chandalia",
    role: "Co-Founder, Transpure",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Devansh Lakhani",
    role: "Angel Investor, Director - LFS",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Champ Alreja",
    role: "Co-Founder, GOQii",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Hemant Kelkar",
    role: "Founder, VCounsel",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Nilesh Dungarwal",
    role: "CEO, WorkIndia",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Mitesh Jain",
    role: "Co-Founder & CTO, Symbo",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Mr. Prasad Shetty",
    role: "VP Portfolio & Opp, SINE",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
  {
    name: "Ms. Alina Namazi",
    role: "Influencer",
    image: "/placeholder.svg?height=600&width=400",
    topic: "TBA",
  },
];


export function Speakers() {
  return (
    <div className="container mx-auto px-4 sm:px-6 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16"
      >
        Keynote Speakers
      </motion.h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="group bg-white/10 border-white/20 overflow-hidden relative">
              <CardContent className="p-0 relative text-white">
                <div className="relative aspect-[3/4] mb-4 sm:mb-6 overflow-hidden">
                  <motion.img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 brightness-110 contrast-110"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20 text-white bg-black/40 backdrop-blur-md rounded-b-lg">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{speaker.name}</h3>
                    <p className="text-white">{speaker.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
