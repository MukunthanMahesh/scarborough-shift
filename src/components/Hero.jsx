import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/your-hero-image.png')" }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Main content container */}
      <div className="relative z-10 max-w-3xl px-6">
        
        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Empowering Scarborough’s Health
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-white mb-8">
          Connecting communities with accessible and compassionate care.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/services"
            className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-100"
          >
            Explore Services
          </Link>
          <Link
            to="/donate"
            className="border border-white text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-black"
          >
            ❤️ Donate to SHN
          </Link>
        </div>

      </div>
    </section>
  );
}
