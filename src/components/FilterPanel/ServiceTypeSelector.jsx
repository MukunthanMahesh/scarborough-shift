// components/ServiceTypeSelector.js
import React from "react";

const SERVICES = [
  "Vaccine", "Walk-In", "X-Ray", "Blood Work", "Food Bank",
  "Pharmacies", "Dental Clinics", "Pregnancy Health",
  "Physiotherapy", "Hospitals",
];

export default function ServiceTypeSelector({ selected, onSelect }) {
  return (
    <div>
        <label className="block font-bold mb-2">Service Type</label>
        <div className="flex flex-wrap gap-2">
        {SERVICES.map((service) => (
            <button
            key={service}
            onClick={() => onSelect(service)}
            className={`px-4 py-2 rounded-full border transition-colors duration-200 ${
                selected === service ? "bg-brand-deepBlue text-white" : "bg-brand-white text-brand-black border-gray-300 hover:bg-brand-lightGray"
            }`}
            >
            {service}
            </button>
        ))}
        </div>
    </div>
  );
}
