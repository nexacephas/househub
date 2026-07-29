import "./PropertyFilters.css";

import { Search } from "lucide-react";

export default function PropertyFilters({
  filters,
  setFilters,
}) {
  return (
    <div className="property-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search property..."
          value={filters.search}
          onChange={(e)=>
            setFilters({
              ...filters,
              search:e.target.value,
            })
          }
        />

      </div>

      <select
        value={filters.status}
        onChange={(e)=>
          setFilters({
            ...filters,
            status:e.target.value,
          })
        }
      >

        <option value="">All Status</option>

        <option value="available">
          Available
        </option>

        <option value="rented">
          Rented
        </option>

        <option value="pending">
          Pending
        </option>

      </select>

      <select
        value={filters.type}
        onChange={(e)=>
          setFilters({
            ...filters,
            type:e.target.value,
          })
        }
      >

        <option value="">
          All Types
        </option>

        <option value="duplex">
          Duplex
        </option>

        <option value="apartment">
          Apartment
        </option>

        <option value="bungalow">
          Bungalow
        </option>

        <option value="studio">
          Studio
        </option>

      </select>

    </div>
  );
}