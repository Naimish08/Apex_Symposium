"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

const speakers = [
  {
    name: "Dr. Sarah Johnson",
    role: "AI Research Director, Google",
    image: "/placeholder.svg?height=600&width=400",
    topic: "Future of AI in Innovation",
  },
  {
    name: "Michael Chen",
    role: "Chief Innovation Officer, Microsoft",
    image: "resc/speakers/naimish.jpg?height=600&width=400",
    topic: "Digital Transformation in 2024",
  },
  {
    name: "Dr. Emily Williams",
    role: "Founder & CEO, TechVentures",
    image: "/placeholder.svg?height=600&width=400",
    topic: "Startup Ecosystem Development",
  },
]

export function Speakers() {
  return (
    <div className="container mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-white"
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
            <Card className="group bg-white/5 border-white/10 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[3/4] mb-4 sm:mb-6">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 z-20">
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{speaker.name}</h3>
                    <p className="text-rose-400">{speaker.role}</p>
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

