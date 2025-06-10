import React, { useState, useRef } from "react";
import { useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places"];

export default function UserAddressHolder({ setAddress }) {
  const [inputValue, setInputValue] = useState("");
  const autocompleteRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLEMAPS_API_KEY,
    libraries,
  });

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (!place?.geometry) return;

    const { lat, lng } = place.geometry.location;
    const latitude = lat();
    const longitude = lng();
    const label = place.formatted_address;

    setInputValue(label);
    setAddress({ label, latitude, longitude });
  };

  const initAutocomplete = (input) => {
    if (!input || !window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(input, {
      componentRestrictions: { country: "ca" },
      fields: ["formatted_address", "geometry"],
    });

    autocomplete.addListener("place_changed", handlePlaceSelect);
    autocompleteRef.current = autocomplete;
  };

  if (!isLoaded) return null;

  return (
    <div className="space-y-2">
      <label className="block font-semibold mb-2">Your Address</label>
      <input
        type="text"
        className="w-full p-2 border rounded-md"
        placeholder="Enter your address"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        ref={(input) => input && initAutocomplete(input)}
      />
    </div>
  );
}
