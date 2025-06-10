// Controlled address autocomplete with manual Google Places API usage
// Note: Ensure you have the Google Maps API key set in your environment variables

import React, { useState, useEffect, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

export default function UserAddressHolder({ setAddress }) {
  const [inputValue, setInputValue] = useState("");
  const [predictions, setPredictions] = useState([]);
  const [selected, setSelected] = useState(null);
  const autocompleteServiceRef = useRef(null);
  const placesServiceRef = useRef(null);
  const debounceTimer = useRef(null);
  const wrapperRef = useRef(null);

  // Load Google Maps API with Places library
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    libraries,
  });

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

  // Initialize the AutocompleteService once when API is loaded
  useEffect(() => {
    if (isLoaded && !autocompleteServiceRef.current) {
      autocompleteServiceRef.current = new window.google.maps.places.AutocompleteService();
    }
  }, [isLoaded]);

  // Watch for exact match between input and predictions (manual entry of a valid address)
  useEffect(() => {
    if (predictions.length === 0) return;

    const exactMatch = predictions.find(
      (p) => p.description.toLowerCase() === inputValue.trim().toLowerCase()
    );

    if (exactMatch && selected !== exactMatch.description) {
      handleSelect(exactMatch);
    }
  }, [inputValue, predictions]);

  // Debounced autocomplete prediction fetcher
  useEffect(() => {
    if (inputValue.trim() === "") {
      setPredictions([]);
      return;
    }

    clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      autocompleteServiceRef.current.getPlacePredictions(
        {
          input: inputValue,
          componentRestrictions: { country: "ca" },
        },
        (results) => {
          setPredictions(results || []);
        }
      );
    }, 300);
  }, [inputValue]);

  // Handle selecting a prediction
  const handleSelect = (prediction) => {
    setInputValue(prediction.description);
    setPredictions([]);
    document.activeElement?.blur(); // Blur the input to indicate selection

    // Lazily initialize PlacesService
    if (!placesServiceRef.current) {
      const dummyMap = document.createElement("div");
      placesServiceRef.current = new window.google.maps.places.PlacesService(dummyMap);
    }

    // Fetch place details from Google
    placesServiceRef.current.getDetails(
      {
        placeId: prediction.place_id,
        fields: ["formatted_address", "geometry"],
      },
      (place) => {
        if (!place || !place.geometry) return;

        const { lat, lng } = place.geometry.location;
        const label = place.formatted_address;

        setSelected(label);
        setAddress({
          label,
          latitude: lat(),
          longitude: lng(),
        });
      }
    );
  };

  if (!isLoaded) return null;

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
              key={p.place_id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(p)}
            >
              {p.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
