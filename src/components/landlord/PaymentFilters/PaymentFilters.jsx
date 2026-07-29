import "./PaymentFilters.css";

import { Search } from "lucide-react";

export default function PaymentFilters({
  filters,
  setFilters,
}) {
  function handleChange(e) {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="payment-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search tenant or property..."
          value={filters.search}
          onChange={handleChange}
        />

      </div>

      <select
        name="status"
        value={filters.status}
        onChange={handleChange}
      >
        <option value="">
          All Status
        </option>

        <option value="paid">
          Paid
        </option>

        <option value="pending">
          Pending
        </option>

        <option value="overdue">
          Overdue
        </option>

      </select>

      <select
        name="month"
        value={filters.month}
        onChange={handleChange}
      >
        <option value="">
          All Months
        </option>

        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>

      </select>

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={filters.year}
        onChange={handleChange}
      />

    </div>
  );
}