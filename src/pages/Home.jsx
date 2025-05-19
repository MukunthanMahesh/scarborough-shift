import { useState } from "react";
import Hero from "../components/Hero";
import FilterPanel from "../components/FilterPanel";

export default function Home() {
  // Initial filter state
  const [filters, setFilters] = useState({
    distance: 15,
    availability: "openNow", // or null
    language: "English",
  });
  
  return (
    <main className="p-4">
      {/* Top banner */}
      <Hero />

      {/* Main content: sidebar + results */}
      <div className="flex flex-col md:flex-row gap-6 mt-6">
        
        {/* Filter panel */}
        <aside className="w-full md:w-1/4 border rounded-lg p-4 shadow">
          <FilterPanel filters={filters} setFilters={setFilters} />
        </aside>

        {/* Placeholder for results*/}
        <section className="flex-1">
          <div className="text-brand-darkGray font-slab italic">
            Results Placeholder (Create Card System).
          </div>
        </section>
      </div>
    </main>
  );
}
