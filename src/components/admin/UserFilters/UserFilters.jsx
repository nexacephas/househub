import "./UserFilters.css";

import { Search } from "lucide-react";

export default function UserFilters({
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
    <div className="user-filters">

      <div className="user-search">

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
        name="role"
        value={filters.role}
        onChange={handleChange}
      >
        <option value="">All Roles</option>

        <option value="admin">
          Admin
        </option>

        <option value="landlord">
          Landlord
        </option>

        <option value="tenant">
          Tenant
        </option>

        <option value="agent">
          Agent
        </option>

      </select>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">All Status</option>

        <option value="active">
          Active
        </option>

        <option value="inactive">
          Inactive
        </option>

        <option value="suspended">
          Suspended
        </option>

      </select>

      <select
        name="verified"
        value={filters.verified}
        onChange={handleChange}
      >
        <option value="">
          Verification
        </option>

        <option value="true">
          Verified
        </option>

        <option value="false">
          Not Verified
        </option>

      </select>

    </div>
  );
}