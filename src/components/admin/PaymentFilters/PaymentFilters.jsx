import "./PaymentFilters.css";

import { Search } from "lucide-react";

export default function PaymentFilters({
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
    <div className="payment-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          name="search"
          placeholder="Search payment, tenant or property..."
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

        <option value="Pending">
          Pending
        </option>

        <option value="Successful">
          Successful
        </option>

        <option value="Failed">
          Failed
        </option>

        <option value="Refunded">
          Refunded
        </option>

      </select>

      <select
        name="method"
        value={filters.method}
        onChange={handleChange}
      >
        <option value="">
          All Methods
        </option>

        <option value="Card">
          Card
        </option>

        <option value="Bank Transfer">
          Bank Transfer
        </option>

        <option value="Wallet">
          Wallet
        </option>

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