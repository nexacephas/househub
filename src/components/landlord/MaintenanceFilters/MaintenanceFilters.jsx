import "./MaintenanceFilters.css";

import { Search } from "lucide-react";

export default function MaintenanceFilters({
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
    <div className="maintenance-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search tenant, property or request..."
          value={filters.search}
          onChange={handleChange}
        />

      </div>

      <select
        name="priority"
        value={filters.priority}
        onChange={handleChange}
      >
        <option value="">All Priorities</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
        <option value="Urgent">Urgent</option>
      </select>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">All Status</option>
        <option value="Pending">Pending</option>
        <option value="Assigned">Assigned</option>
        <option value="In Progress">
          In Progress
        </option>
        <option value="Completed">
          Completed
        </option>
        <option value="Cancelled">
          Cancelled
        </option>
      </select>

      <select
        name="property"
        value={filters.property}
        onChange={handleChange}
      >
        <option value="">All Properties</option>

        <option value="property1">
          Property 1
        </option>

        <option value="property2">
          Property 2
        </option>

      </select>

      <select
        name="technician"
        value={filters.technician}
        onChange={handleChange}
      >
        <option value="">All Technicians</option>

        <option value="John Doe">
          John Doe
        </option>

        <option value="Mike James">
          Mike James
        </option>

      </select>

    </div>
  );
}