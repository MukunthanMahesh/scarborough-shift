import React from "react";
import AvailabilityFilter from "./AvailabilityFilter";
import DistanceFilter from "./DistanceFilter";
import LanguageFilter from "./LanguageFilter";
import ServiceTypeSelector from "./ServiceTypeSelector";

export default function FilterPanel({ filters, setFilters }) {
  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const toggleAvailability = (key) => {
    setFilters((prev) => {
      const current = prev.availability || [];
      return {
        ...prev,
        availability: current.includes(key)
          ? current.filter((k) => k !== key)
          : [...current, key],
      };
    });
  };

  const { serviceType } = filters;

  // Only show availability/language filters for these types
  const serviceTypesWithAvailability = [
    "Vaccine", "Walk-In", "X-Ray", "Blood Work", "Food Bank",
    "Pharmacies", "Dental Clinics", "Pregnancy Health", "Physiotherapy", "Hospitals"
  ];

  const serviceTypesWithLanguage = [
    "Hospitals", "Dental Clinics", "Pregnancy Health", "Physiotherapy"
  ];

  return (
    <div className="space-y-6">
      {/* Service Type Selector */}
      <ServiceTypeSelector
        selected={filters.serviceType}
        onSelect={(value) => updateFilter("serviceType", value)}
      />

      {/* Always shown */}
      <DistanceFilter
        distance={filters.distance}
        onChange={(value) => updateFilter("distance", value)}
      />

      {/* Conditionally show AvailabilityFilter */}
      {serviceTypesWithAvailability.includes(serviceType) && (
        <AvailabilityFilter
          selectedKeys={filters.availability || []}
          onToggle={toggleAvailability}
        />
      )}

      {/* Conditionally show LanguageFilter */}
      {serviceTypesWithLanguage.includes(serviceType) && (
        <LanguageFilter
          language={filters.language}
          onChange={(value) => updateFilter("language", value)}
        />
      )}
    </div>
  );
}
