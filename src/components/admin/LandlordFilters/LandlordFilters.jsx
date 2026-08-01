import "./LandlordFilters.css";

import { Search } from "lucide-react";

export default function LandlordFilters({
  filters,
  setFilters,
}) {
  function handleChange(e) {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="landlord-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search landlords..."
          value={filters.search}
          onChange={handleChange}
        />

      </div>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">All Status</option>
        <option value="active">Active</option>
        <option value="pending">Pending</option>
        <option value="verified">Verified</option>
        <option value="suspended">Suspended</option>
      </select>

      <select
        name="verification"
        value={filters.verification}
        onChange={handleChange}
      >
        <option value="">Verification</option>
        <option value="verified">Verified</option>
        <option value="pending">Pending</option>
        <option value="rejected">Rejected</option>
      </select>

      <select
        name="propertyCount"
        value={filters.propertyCount}
        onChange={handleChange}
      >
        <option value="">Properties</option>
        <option value="1">1 Property</option>
        <option value="2-5">2 - 5 Properties</option>
        <option value="6-10">6 - 10 Properties</option>
        <option value="10+">10+ Properties</option>
      </select>

    </div>
  );
}