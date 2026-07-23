import "./PropertySearch.css";

import {
  Search,
  MapPin,
  Home,
  BedDouble,
  SlidersHorizontal,
} from "lucide-react";

export default function PropertySearch() {
  return (
    <section className="property-search">

      <div className="container">

        <div className="search-box">

          {/* Search */}

          <div className="search-field">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search by property, landmark or keyword"
            />

          </div>

          {/* Location */}

          <div className="search-field">

            <MapPin size={20} />

            <select>

              <option>Location</option>

              <option>Abuja</option>

              <option>Lagos</option>

              <option>Port Harcourt</option>

              <option>Ibadan</option>

              <option>Kano</option>

            </select>

          </div>

          {/* Property Type */}

          <div className="search-field">

            <Home size={20} />

            <select>

              <option>Property Type</option>

              <option>Apartment</option>

              <option>Duplex</option>

              <option>Detached House</option>

              <option>Office</option>

              <option>Land</option>

            </select>

          </div>

          {/* Bedrooms */}

          <div className="search-field">

            <BedDouble size={20} />

            <select>

              <option>Bedrooms</option>

              <option>1 Bedroom</option>

              <option>2 Bedrooms</option>

              <option>3 Bedrooms</option>

              <option>4 Bedrooms</option>

              <option>5+ Bedrooms</option>

            </select>

          </div>

          {/* Filter Button */}

          <button className="filter-btn">

            <SlidersHorizontal size={18} />

            Filters

          </button>

          {/* Search */}

          <button className="search-btn">

            Search

          </button>

        </div>

      </div>

    </section>
  );
}