import React from "react";
import AvailabilityFilter from "./AvailabilityFilter";
import DistanceFilter from "./DistanceFilter";
import LanguageFilter from "./LanguageFilter";

export default function FilterPanel({ filters, setFilters }) {
  const handleToggleFilter = (key) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleDistanceChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      distance: value,
    }));
  };

  const handleLanguageChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      language: value,
    }));
  };

  return (
    <div className="space-y-6">
      <DistanceFilter distance={filters.distance} onChange={handleDistanceChange} />
      <AvailabilityFilter selectedKey={filters.availability} onSelect={(key) => setFilters((prev) => ({...prev,availability: key,}))}/>
      <LanguageFilter language={filters.language} onChange={handleLanguageChange} />
    </div>
  );
}
