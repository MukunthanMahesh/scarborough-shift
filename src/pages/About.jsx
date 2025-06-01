export default function About() {
  return (
    <div className="px-6 md:px-20 py-16 bg-brand-offWhite text-brand-navyBlue">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="font-slab text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight animate-fadeInUp">
          <span className="font-bold">Scarborough Shift</span> makes healthcare more <span className="font-bold">accessible, connected,</span> and <span className="font-bold">compassionate</span> for our community.
        </h1>
      </div>

      {/* Our Mission */}
      <section className="py-20 bg-white text-brand-darkGray">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-slab font-bold text-brand-deepBlue mb-4">Our Mission</h2>
            <p className="text-lg">Mission Mission Mission!</p>
          </div>
          <div className="md:w-1/2">
            <img src="/ourMission.jpg" alt="Our Mission" className="rounded-xl max-w-full w-64 sm:w-80 md:w-96 shadow-md" />
          </div>
        </div>
      </section>

      {/* How It Started */}
      <section className="py-20 bg-brand-offWhite text-brand-darkGray">
        <div className="md:flex md:flex-row-reverse md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-slab font-bold text-brand-deepBlue mb-4">How It Started</h2>
            <p className="text-lg">Our Names!</p>
          </div>
          <div className="md:w-1/2">
            <img src="/howItStarted.jpg" alt="How It Started" className="rounded-xl max-w-full w-64 sm:w-80 md:w-96 shadow-md" />
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-white text-brand-darkGray">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-slab font-bold text-brand-deepBlue mb-4">Who It's For</h2>
            <p className="text-lg">For Scarborough!</p>
          </div>
          <div className="md:w-1/2">
            <img src="/whosItFor.jpg" alt="Who It's For" className="rounded-xl max-w-full w-64 sm:w-80 md:w-96 shadow-md" />
          </div>
        </div>
      </section>

      {/* Why Scarborough Shift */}
      <section className="py-20 bg-brand-offWhite text-brand-darkGray">
        <div className="md:flex md:flex-row-reverse md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-slab font-bold text-brand-deepBlue mb-4">Why Scarborough Shift</h2>
            <p className="text-lg">We care.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/why.png" alt="Why Scarborough Shift" className="rounded-xl max-w-full w-64 sm:w-80 md:w-96 shadow-md" />
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white text-brand-darkGray">
        <div className="md:flex md:items-center md:gap-12">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-slab font-bold text-brand-deepBlue mb-4">What Makes Us Different</h2>
            <p className="text-lg">We care. a lot.</p>
          </div>
          <div className="md:w-1/2">
            <img src="/whyWeBuiltIt.jpg" alt="What Makes Us Different" className="rounded-xl max-w-full w-64 sm:w-80 md:w-96 shadow-md" />
          </div>
        </div>
      </section>
    </div>
  );
}