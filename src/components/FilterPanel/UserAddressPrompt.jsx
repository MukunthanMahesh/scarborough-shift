import React, { useEffect, useState } from "react";

export default function UserAddressPrompt({ address, setAddress }) {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);

  // Auto-detect location on load
  useEffect(() => {
    if (address?.label) return; // already set

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const { latitude, longitude } = pos.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          const {
          road,
          house_number,
          city,
          town,
          suburb,
          postcode,
          state,
        } = data.address;

        // Construct a human-readable address
        const label = [
          house_number,
          road,
          city || town || suburb,
          state,
          postcode,
        ]
          .filter(Boolean)
          .join(", ");

          setAddress({ latitude, longitude, label });
          setInputValue(label);
        } catch (err) {
          console.error("Failed reverse geocoding", err);
        }
      });
    }
  }, [setAddress, address]);

  // Autocomplete suggestions
  const handleInputChange = async (value) => {
    setInputValue(value);
    if (!value.trim()) return setSuggestions([]);

    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(value)}&format=json&addressdetails=1&viewbox=-79.337,43.825,-79.170,43.755&bounded=1`
    );
    const data = await res.json();

    setSuggestions(data.slice(0, 5)); // Limit suggestions
  };

  // Select suggestion
  const handleSelect = (item) => {
    setInputValue(item.display_name);
    setSuggestions([]);
    setAddress({
      label: item.display_name,
      latitude: parseFloat(item.lat),
      longitude: parseFloat(item.lon),
    });
  };

  return (
    <div className="space-y-2">
      <label className="block font-semibold mb-2">
        Your Address
      </label>
      <input
        className="w-full p-2 border rounded-md"
        type="text"
        placeholder="Search for address..."
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="bg-white border rounded shadow text-sm">
          {suggestions.map((s, idx) => (
            <li
              key={idx}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(s)}
            >
              {s.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
