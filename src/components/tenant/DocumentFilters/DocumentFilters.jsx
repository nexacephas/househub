import { Search, RotateCcw } from "lucide-react";
import { useState } from "react";
import "./DocumentFilters.css";

export default function DocumentFilters() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("Newest");

  function resetFilters() {
    setSearch("");
    setType("All");
    setSort("Newest");
  }

  return (
    <section className="document-filters">

      <div className="search-box">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search documents..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option>All</option>
        <option>Lease Agreement</option>
        <option>Receipt</option>
        <option>Invoice</option>
        <option>Inspection Report</option>
        <option>ID Document</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option>Newest</option>
        <option>Oldest</option>
        <option>A-Z</option>
        <option>Z-A</option>
      </select>

      <button
        className="reset-btn"
        onClick={resetFilters}
      >
        <RotateCcw size={18} />
        Reset
      </button>

    </section>
  );
}