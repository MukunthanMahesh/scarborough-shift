import React, { useState, useEffect, useRef } from "react";

// Set your LocationIQ API key in your environment variables
const LOCATIONIQ_API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;

export default function UserAddressHolder({ setAddress }) {
  const [inputValue, setInputValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [selected, setSelected] = useState(null);
  const debounceTimer = useRef(null);
  const wrapperRef = useRef(null);
  
  const formatShortAddress = (prediction) => {
  const addr = prediction.address || {};
  // Use road or house_number+road for street
  const street = [addr.house_number, addr.road].filter(Boolean).join(" ") || "";
  const postcode = addr.postcode || "";
  // Always use "Scarborough"
    return [street, "Scarborough", postcode].filter(Boolean).join(", ");
  };

  // Click-away listener to close predictions dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setPredictions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Debounced autocomplete fetcher using LocationIQ
  useEffect(() => {
    if (inputValue.trim() === "") {
      setPredictions([]);
      return;
    }

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      fetch(
        `https://us1.locationiq.com/v1/autocomplete?key=${LOCATIONIQ_API_KEY}&q=${encodeURIComponent(
          inputValue
        )}&countrycodes=ca&limit=5&normalizecity=0&viewbox=-79.304472,43.658056,-79.158417,43.873445&bounded=1`,
        { method: "GET", headers: { accept: "application/json" } }
      )
        .then((res) => res.json())
        .then((data) => setPredictions(Array.isArray(data) ? data : []))
        .catch(() => setPredictions([]));
    }, 300);
  }, [inputValue]);

  // Watch for exact match between input and predictions (manual entry of a valid address)
  useEffect(() => {
    if (predictions.length === 0) return;

    const exactMatch = predictions.find(
      (p) =>
        (p.display_place || p.display_name || "").toLowerCase() ===
        inputValue.trim().toLowerCase()
    );

    if (exactMatch && selected !== (exactMatch.display_place || exactMatch.display_name)) {
      handleSelect(exactMatch);
    }
    // eslint-disable-next-line
  }, [inputValue, predictions]);

  // Handle selecting a prediction
  const handleSelect = (prediction) => {
    const shortLabel = formatShortAddress(prediction);
    setInputValue(shortLabel);
    setPredictions([]);
    setSelected(shortLabel);

    setAddress({
      label: shortLabel,
      latitude: parseFloat(prediction.lat),
      longitude: parseFloat(prediction.lon),
    });
  };

  return (
    <div className="space-y-2" ref={wrapperRef}>
      <label className="block font-semibold mb-2">Your Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded-md"
        placeholder="Enter your address"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => {
          // Allow keyboard selection with Enter key
          if (e.key === "Enter" && predictions.length > 0) {
            e.preventDefault();
            handleSelect(predictions[0]);
          }
        }}
      />
      {/* Autocomplete dropdown */}
      {predictions.length > 0 && (
        <ul className="bg-white border rounded shadow text-sm">
          {predictions.map((p) => (
            <li
              key={p.place_id || p.osm_id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(p)}
            >
              {formatShortAddress(p)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
