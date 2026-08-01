import "./AgentFilters.css";

import { Search } from "lucide-react";

export default function AgentFilters({
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
    <div className="agent-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search agents..."
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
        <option value="inactive">Inactive</option>
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
      </select>

      <select
        name="specialization"
        value={filters.specialization}
        onChange={handleChange}
      >
        <option value="">Specialization</option>
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
        <option value="luxury">Luxury</option>
        <option value="shortlet">Shortlet</option>
      </select>

    </div>
  );
}