export default function FAQ() {
  return (
    <div className="bg-brand-offWhite px-6 md:px-20 py-16 text-brand-navyBlue">
      <h2 className="font-slab font-bold text-3xl sm:text-4xl md:text-5xl mb-6">FAQs</h2>

      {/* Q1 */}
      <div className="border-t bg-brand-lightGray py-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
            {/* Animateing the arrow */}
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
      <div className="border-t bg-brand-lightGray py-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
            {/* Animateing the arrow (copy paste)*/}
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
      <div className="border-t bg-brand-lightGray py-4">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="cursor-pointer font-slab text-lg font-medium mb-6 group-hover:underline flex items-center">
            {/* Animateing the arrow (copy paste)*/}
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

    </div>
  );
}
