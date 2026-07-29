import "./TenantFilters.css";

import { Search } from "lucide-react";

export default function TenantFilters({
  filters,
  setFilters,
}) {
  return (
    <div className="tenant-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search tenants..."
          value={filters.search}
          onChange={(e) =>
            setFilters({
              ...filters,
              search: e.target.value,
            })
          }
        />

      </div>

      <select
        value={filters.status}
        onChange={(e) =>
          setFilters({
            ...filters,
            status: e.target.value,
          })
        }
      >
        <option value="all">All Status</option>

        <option value="active">
          Active
        </option>

        <option value="pending">
          Pending
        </option>

        <option value="expired">
          Expired
        </option>

        <option value="overdue">
          Overdue
        </option>

      </select>

      <select
        value={filters.sort || "newest"}
        onChange={(e) =>
          setFilters({
            ...filters,
            sort: e.target.value,
          })
        }
      >
        <option value="newest">
          Newest
        </option>

        <option value="oldest">
          Oldest
        </option>

        <option value="rent-high">
          Highest Rent
        </option>

        <option value="rent-low">
          Lowest Rent
        </option>

        <option value="name">
          Name (A-Z)
        </option>

      </select>

    </div>
  );
}