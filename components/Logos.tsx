"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Logo 1", src: "resc/speakers/naimish.jpg?height=60&width=120" },
  { name: "Logo 2", src: "/placeholder.svg?height=60&width=120" },
  { name: "Logo 3", src: "/placeholder.svg?height=70&width=70" },
  { name: "Logo 4", src: "/placeholder.svg?height=50&width=100" },
]

export function Logos() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center pt-3 sm:pt-4 md:pt-6 mb-6 sm:mb-8 md:mb-12">
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-2">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                <img
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  className="h-5 sm:h-6 md:h-8 lg:h-10 w-auto max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px] opacity-50 hover:opacity-70 transition-all duration-300 grayscale"
                />
              </motion.div>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs sm:text-sm md:text-base text-gray-500"
          >
            Presents
          </motion.p>
        </div>
      </div>
    </div>
  )
}

