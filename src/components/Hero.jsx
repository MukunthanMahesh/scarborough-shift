import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-brand-navyBlueDeep text-brand-offWhite px-6 md:px-12 py-20 text-center md:text-left">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left side: text content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Empowering Scarborough’s Health
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Connecting communities with accessible and compassionate care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="/services"
              className="bg-brand-offWhite text-brand-darkGray font-medium px-6 py-3 rounded"
            >
              Explore Services
            </Link>
            <Link
              to="/donate"
              className="border border-brand-offWhite text-brand-offWhite font-medium px-6 py-3 rounded"
            >
              ❤️ Donate to SHN
            </Link>
          </div>
        </div>

        {/* Right side: placeholder for image or illustration */}
        <div className="flex-1 hidden md:block">
          <img src="/logo.png"></img>
        </div>
      </div>
    </section>
  );
}
