// AvailabilityFilter.jsx
import React from "react";

const availabilityOptions = [
  { key: "openNow", label: "Open Now" },
  { key: "is24h", label: "24/7 Services" },
  { key: "weekend", label: "Weekend Availability" },
  { key: "evening", label: "Evening Hours" },
  { key: "appointmentOnly", label: "Appointment-Only Clinics" },
];

export default function AvailabilityFilter({ selectedKey, onSelect }) {
  return (
    <div>
      <label className="block font-semibold mb-2">Availability</label>
      <div className="flex flex-wrap gap-2">
        {availabilityOptions.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => onSelect(key)}
            className={`px-3 py-1 border text-sm rounded ${
              selectedKey === key
                ? "bg-brand-deepBlue text-white border-blue-600"
                : "bg-brand-white text-brand-darkGray border-gray-300 hover:bg-brand-lightGray"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
