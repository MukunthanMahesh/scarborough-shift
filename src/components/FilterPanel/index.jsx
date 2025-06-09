import React from "react";
import AvailabilityFilter from "./AvailabilityFilter";
import DistanceFilter from "./DistanceFilter";
import LanguageFilter from "./LanguageFilter";
import ServiceTypeSelector from "./ServiceTypeSelector";
import serviceFilterConfig from "../../config/serviceFilterConfig";

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

  // Ensure serviceType is set to default "Hospitals" on mount
  React.useEffect(() => {
    if (!filters.serviceType) {
      setFilters((prev) => ({ ...prev, serviceType: "Hospitals" }));
    }
  }, []);

  const { serviceType } = filters;
  const config = serviceFilterConfig[serviceType] || {};

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6 max-w-full bg-brand-white rounded-lg shadow-md">
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

      {/* Conditional filters based on config */}
      {config.availability && (
        <AvailabilityFilter
          selectedKeys={filters.availability || []}
          onToggle={toggleAvailability}
        />
      )}

    </div>
  );
}
