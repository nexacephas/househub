import "./BookingFilters.css";

import { Search } from "lucide-react";

export default function BookingFilters({
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
    <div className="booking-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search tenant, property or booking..."
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
        <option value="Pending">Pending</option>
        <option value="Confirmed">Confirmed</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      <select
        name="paymentStatus"
        value={filters.paymentStatus}
        onChange={handleChange}
      >
        <option value="">Payment Status</option>
        <option value="Paid">Paid</option>
        <option value="Partial">Partial</option>
        <option value="Unpaid">Unpaid</option>
      </select>

      <select
        name="property"
        value={filters.property}
        onChange={handleChange}
      >
        <option value="">All Properties</option>
        <option value="property1">Property 1</option>
        <option value="property2">Property 2</option>
      </select>

      <select
        name="tenant"
        value={filters.tenant}
        onChange={handleChange}
      >
        <option value="">All Tenants</option>
        <option value="tenant1">Tenant 1</option>
        <option value="tenant2">Tenant 2</option>
      </select>

    </div>
  );
}