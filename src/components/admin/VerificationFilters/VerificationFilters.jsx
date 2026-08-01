import "./VerificationFilters.css";

import { Search } from "lucide-react";

export default function VerificationFilters({
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
    <div className="verification-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search by name or email..."
          value={filters.search}
          onChange={handleChange}
        />

      </div>

      <select
        name="type"
        value={filters.type}
        onChange={handleChange}
      >
        <option value="">All Types</option>
        <option value="agent">Agent</option>
        <option value="landlord">Landlord</option>
        <option value="tenant">Tenant</option>
      </select>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">All Status</option>
        <option value="pending">Pending</option>
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>

      <input
        type="date"
        name="date"
        value={filters.date}
        onChange={handleChange}
      />

    </div>
  );
}