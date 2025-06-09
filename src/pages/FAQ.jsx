export default function FAQ() {
  return (
    <div className="bg-brand-offWhite px-6 md:px-20 py-16 text-brand-navyBlue">
      <h2 className="font-slab font-bold text-3xl sm:text-4xl md:text-5xl mb-12 leading-tight animate-fadeInUp">Freakuently Asked Questions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left side*/}
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-sm text-brand-darkGray">Can’t find what you’re looking for?</p>
          <p className="text-lg font-medium font-slab">We’d LOVE to chat with y- pls omg im so lonely...</p>
          <div className="flex items-center gap-2 p-8">
            <img src="/search.png" alt="Search icon" className="w-5 h-5" />
            <p className="text-sm text-brand-darkGray font-thin">Search Bar Placeholder</p>
            </div>
        </div>

        {/* Right side*/}
        <div className="space-y-6">
          {/* Q1 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                What is Scarborough Shift?
              </summary>
              <p className="mt-2 text-base pl-11">
                Scarborough Shift is a centralized healthcare database built to help residents find clinics,
                services, and resources in one place.
              </p>
            </details>
          </div>

          {/* Q2 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                Who is this platform for?
              </summary>
              <p className="mt-2 text-base pl-11">
                Anyone in Scarborough looking for healthcare services. From walk-in clinic to mental health support, we got you covered.
              </p>
            </details>
          </div>

          {/* Q3 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                How do I find a clinic near me?
              </summary>
              <p className="mt-2 text-base pl-11">
                You can search by location, clinic type, or availability, all by using the filters to find the nearest clinic that fits your needs.
              </p>
            </details>
          </div>

          {/* Q4 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                Can I book appointments through this site?
              </summary>
              <p className="mt-2 text-base pl-11">
                Not yet;  Scarborough Shift helps you find the right clinic quickly, but appointment booking is still done directly through the clinic. We’ll link their website or contact info when available so it’s easy for you to reach out.
              </p>
            </details>
          </div>

          {/* Q5 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                How do the wait time estimates work?
              </summary>
              <p className="mt-2 text-base pl-11">
                Wait times are either reported by clinics or estimated based on community input. They give you a rough idea of how long you might wait. However, clinics get busy fast and we always suggest calling ahead to confirm.
              </p>
            </details>
          </div>

          {/* Q6 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                Do I need to create an account to use the site?
              </summary>
              <p className="mt-2 text-base pl-11">
                Scarborough Shift is completely open. No logins, no sign-ups, just the info you need.
              </p>
            </details>
          </div>

          {/* Q7 */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
                <svg
                  className="w-8 h-8 mr-2 transition-transform duration-300 group-open:rotate-90"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 6L14 10L6 14V6Z" />
                </svg>
                How do I reach out to Scarborough Shift?
              </summary>
              <p className="mt-2 text-base pl-11">
                You can email us at <span className="font-bold">scarboroughshift@health.ca</span> for any queries or complaints you have!
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}