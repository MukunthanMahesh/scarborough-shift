export default function About() {
  return (
    <div className="px-6 md:px-20 py-16 bg-brand-offWhite text-brand-navyBlue">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="font-slab text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">About Scarborough Shift</h1>
        <p className="text-lg md:text-xl mb-8 text-brand-black">
          Making healthcare more accessible, connected, and compassionate for our community.
        </p>
      </div>

      {/* Super Sexy Card */}
      <div className="bg-white shadow-xl rounded-2xl p-10 md:flex md:items-start md:gap-12 border-t-4 border-brand-skybBlue">
        {/* Left: Text Sections */}
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="font-slab text-2xl font-bold text-brand-deepBlue mb-2">Our Mission</h2>
            <p className="text-brand-darkGray">Mission Mission Mission!</p>
          </div>

          <div>
            <h2 className="font-slab text-2xl font-bold text-brand-deepBlue mb-2">How It Started</h2>
            <p className="text-brand-darkGray">Our Names!</p>
          </div>

          <div>
            <h2 className="font-slab text-2xl font-bold text-brand-deepBlue mb-2">Who It's For</h2>
            <p className="text-brand-darkGray">For Scarborough!</p>
          </div>

          <div>
            <h2 className="font-slab text-2xl font-bold text-brand-deepBlue mb-2">Why Scarborough Shift</h2>
            <p className="text-brand-darkGray">We care.</p>
          </div>

          <div>
            <h2 className="font-slab text-2xl font-bold text-brand-deepBlue mb-2">What Makes Us Different</h2>
            <p className="text-brand-darkGray">We care. a lot.</p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="md:w-1/2">
          <img
            src="/about_us_image.jpg"
            alt="Our team"
            className="w-full max-w-sm mx-auto h-auto rounded-xl shadow-lg hover:shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
