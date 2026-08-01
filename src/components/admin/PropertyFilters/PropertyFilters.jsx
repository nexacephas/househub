import "./PropertyFilters.css";

import { Search } from "lucide-react";

export default function PropertyFilters({
  filters,
  setFilters,
}) {
  function handleChange(e) {
    const { name, value } = e.target;

    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="property-filters">

      <div className="property-search">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search property, landlord or address..."
          value={filters.search}
          onChange={handleChange}
        />

      </div>

      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
      >
        <option value="">
          All Types
        </option>

        <option value="Apartment">
          Apartment
        </option>

        <option value="House">
          House
        </option>

        <option value="Duplex">
          Duplex
        </option>

        <option value="Studio">
          Studio
        </option>

        <option value="Office">
          Office
        </option>

        <option value="Commercial">
          Commercial
        </option>

      </select>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">
          All Status
        </option>

        <option value="Available">
          Available
        </option>

        <option value="Occupied">
          Occupied
        </option>

        <option value="Pending">
          Pending
        </option>

        <option value="Draft">
          Draft
        </option>

      </select>

      <select
        name="city"
        value={filters.city}
        onChange={handleChange}
      >
        <option value="">
          All Cities
        </option>

        <option value="Lagos">
          Lagos
        </option>

        <option value="Abuja">
          Abuja
        </option>

        <option value="Port Harcourt">
          Port Harcourt
        </option>

        <option value="Ibadan">
          Ibadan
        </option>

      </select>

      <select
        name="owner"
        value={filters.owner}
        onChange={handleChange}
      >
        <option value="">
          All Owners
        </option>

        <option value="Landlord">
          Landlord
        </option>

        <option value="Agent">
          Agent
        </option>

      </select>

    </div>
  );
}