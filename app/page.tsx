import { Speakers } from "@/components/speakers"
import { Schedule } from "@/components/schedule"
import { RegistrationPanels } from "@/components/RegistrationPanels"
import { Hero } from "@/components/Hero"

export default function ApexSymposium() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <section className="py-24 relative">
        <Speakers />
      </section>
      <section id="register" className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center">Be a Part of Apex</h2>
            <p className="text-gray-400 mb-8 text-center">
              Choose your experience at the Apex Symposium and be part of this transformative event.
            </p>
            <RegistrationPanels />
          </div>
        </div>
      </section>
      <section id="schedule" className="py-24">
        <Schedule />
      </section>
    </div>
  )
}

