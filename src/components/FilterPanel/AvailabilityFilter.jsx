import React from "react";

const availabilityOptions = [
  { key: "openNow", label: "Open Now" },
  { key: "is24h", label: "24/7 Services" },
  { key: "weekend", label: "Weekend Availability" },
  { key: "evening", label: "Evening Hours" },
  { key: "appointmentOnly", label: "Appointment-Only Clinics" },
];

export default function AvailabilityFilter({ selectedKeys = [], onToggle }) {
  return (
    <div>
      <label className="block font-semibold mb-2">Availability</label>
      <div className="flex flex-wrap gap-2">
        {availabilityOptions.map(({ key, label }) => {
          const isSelected = selectedKeys.includes(key);
          return (
            <button
              key={key}
              type="button"
              onClick={() => onToggle(key)}
              className={`px-3 py-1 border rounded transition-colors duration-200 ${
                isSelected
                  ? "bg-brand-deepBlue text-white"
                  : "bg-brand-white text-brand-black border-gray-300 hover:bg-brand-lightGray"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
