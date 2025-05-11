import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-brand-offWhite text-brand-black py-12 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Scarborough’s Health
          </h1>

          <p className="text-lg md:text-xl mb-8">
            Connecting communities with accessible and compassionate care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Primary CTA */}
            <Link
              to="/services"
              className="bg-brand-navyBlueDeep text-white font-semibold px-6 py-3 rounded hover:bg-brand-navyBlue transition"
            >
              Explore Services
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/donate"
              className="bg-white border border-brand-navyBlueDeep text-brand-navyBlueDeep font-semibold px-6 py-3 rounded hover:bg-pink-200"
            >
              ❤️ Donate to SHN
            </Link>
          </div>
        </div>

        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/hero_image.jpg"
            alt="Scarborough Health"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
