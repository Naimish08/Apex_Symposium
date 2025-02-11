export function Logos() {
  const logos = [
    { name: "SPIT Logo", src: "resc/logos/SPIT.jpg?height=60&width=120" },
    { name: "NISP Logo", src: "resc/logos/NISP.png?height=60&width=120" },
    { name: "Stuco Logo", src: "resc/logos/Stuco.png?height=60&width=120" },
    { name: "Logo 4", src: "/placeholder.svg?height=50&width=100" },
  ];

  return (
    <section className="py-8 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-4">
          Our Sponsors & Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 items-center justify-center">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-10 sm:max-h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
