import React from "react";

export default function DistanceFilter({ distance, onChange }) {
  return (
    <div>
      <label className="block font-semibold mb-1">Distance (Kilometers)</label>
      <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={distance || 5}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full "
        style={{ accentColor: '#1E3A8A' }} // Brand Deep Blue
      />
      <p className="text-sm  text-gray-600 mt-1">{distance || 5} km</p>
    </div>
  );
}
