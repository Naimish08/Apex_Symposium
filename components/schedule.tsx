"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

/* 
// Uncomment and use this when schedule is finalized
const schedule = {
  day1: [
    { time: "1:00 PM - 2:00 PM", event: "Registration Starts" },
    { time: "2:00 PM - 2:30 PM", event: "Inauguration" },
    { time: "2:30 PM - 3:00 PM", event: "Keynote Session on 'Enterprise Architecture and Entrepreneurship' by Dr. Padmaja Joshi" },
    {
      time: "3:00 PM - 5:00 PM",
      event: [
        "Students: Case Study Competition",
        "Teachers: Entrepreneurship Culture Workshop by Dr. Aarti Karande",
        "Startups: Seminar on IPR by Mr. Parvez Kudrolli",
        "Startups: 1 minute pitching",
      ],
    },
    { time: "5:00 PM - 5:30 PM", event: "High Tea + Networking" },
    { time: "5:30 PM - 6:30 PM", event: "Unlocking Innovation: A FinTech Conversation" },
    { time: "6:30 PM - 7:00 PM", event: "KeyNote Speech by Champ Alreja (Cofounder, GOQii)" },
    { time: "7:00 PM - 7:30 PM", event: "Visionary Speaker" },
  ],
  day2: [
    { time: "09:00 AM - 10:00 AM", event: "Registration + Breakfast" },
    { time: "10:00 AM - 11:00 AM", event: "Cultural Program" },
    { time: "11:00 AM - 12:00 PM", event: "Legal Compliance by Mr. Hemant Kelkar" },
    { time: "12:00 PM - 12:30 PM", event: "KeyNote Speech by Mr. Nilesh Dungarwal" },
    { time: "12:45 PM - 1:15 PM", event: "KeyNote Speech by Mr. Mitesh Jain" },
    { time: "1:15 PM - 2:00 PM", event: "Lunch + Networking" },
    { time: "2:00 PM - 3:30 PM", event: "Beyond the Pitch: Funding Opportunities Explored by Mr. Prasad Shetty" },
    { time: "3:30 PM - 4:00 PM", event: "Behind the Canvas: Fireside Chat with an Influencer (Alina Namazi)" },
    { time: "4:00 PM - 4:30 PM", event: "Event Conclusion" },
    { time: "4:30 PM - 5:00 PM", event: "HighTea + Networking" },
  ],
};
*/

export function Schedule() {
  // Uncomment below if you want future toggle between Day1/Day2
  // const [activeDay, setActiveDay] = useState<"day1" | "day2">("day1");

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-16 text-white"
      >
        Event Schedule
      </motion.h2>

      {/* Card */}
      <Card className="bg-black/40 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-cyan-500/20">
        <CardContent className="p-4 sm:p-6 md:p-8 flex justify-center items-center">
          {/* Placeholder message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2">
              Schedule Coming Soon
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We are finalizing the event schedule. Stay tuned for updates!
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  );
}
