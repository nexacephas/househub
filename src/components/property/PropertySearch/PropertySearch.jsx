import "./PropertySearch.css";

import {
  Search,
  MapPin,
  Home,
  BedDouble,
  SlidersHorizontal,
} from "lucide-react";

export default function PropertySearch({
  filters = {},
  setFilters = () => {},
  filtersOpen = false,
  onToggleFilters = () => {},
}) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="property-search">
      <div className="property-search-container">
        <div className="search-box">
          <div className="search-field">
            <Search size={20} />
            <input
              type="text"
              name="search"
              value={filters.search || ""}
              onChange={handleChange}
              placeholder="Search by title, city or keyword"
            />
          </div>

          <div className="search-field">
            <MapPin size={20} />
            <select name="city" value={filters.city || ""} onChange={handleChange}>
              <option value="">Location</option>
              <option value="Abuja">Abuja</option>
              <option value="Lagos">Lagos</option>
              <option value="Port Harcourt">Port Harcourt</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Kano">Kano</option>
            </select>
          </div>

          <div className="search-field">
            <Home size={20} />
            <select name="propertyType" value={filters.propertyType || ""} onChange={handleChange}>
              <option value="">Property Type</option>
              <option value="apartment">Apartment</option>
              <option value="duplex">Duplex</option>
              <option value="house">House</option>
              <option value="bungalow">Bungalow</option>
              <option value="office">Office</option>
              <option value="land">Land</option>
            </select>
          </div>

          <div className="search-field">
            <BedDouble size={20} />
            <select name="bedrooms" value={filters.bedrooms || ""} onChange={handleChange}>
              <option value="">Bedrooms</option>
              <option value="1">1+ Bedroom</option>
              <option value="2">2+ Bedrooms</option>
              <option value="3">3+ Bedrooms</option>
              <option value="4">4+ Bedrooms</option>
            </select>
          </div>

          <div className="search-field">
            <Home size={20} />
            <select name="purpose" value={filters.purpose || ""} onChange={handleChange}>
              <option value="">Purpose</option>
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
            </select>
          </div>

          <button
            className="filter-btn"
            type="button"
            aria-expanded={filtersOpen}
            onClick={onToggleFilters}
          >
            <SlidersHorizontal size={18} />
            Filters
          </button>
        </div>
      </div>
    </section>
  );
}