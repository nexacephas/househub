import "./AgentFilters.css";

import {
  BadgeCheck,
  Star,
  Globe,
  Building2,
  Home,
  ArrowDownUp,
  RotateCcw,
} from "lucide-react";

export default function AgentFilters() {
  return (
    <section className="agent-filters">
      <div className="container">

        <div className="filters-card">

          <div className="filters-header">
            <h3>Advanced Filters</h3>

            <button className="reset-btn">
              <RotateCcw size={16} />
              Reset
            </button>
          </div>

          <div className="filters-grid">

            {/* Verified */}

            <div className="filter-field">
              <BadgeCheck size={18} />

              <select>
                <option>Verification</option>
                <option>Verified Only</option>
                <option>All Agents</option>
              </select>
            </div>

            {/* Rating */}

            <div className="filter-field">
              <Star size={18} />

              <select>
                <option>Minimum Rating</option>
                <option>5 Stars</option>
                <option>4.5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
              </select>
            </div>

            {/* Languages */}

            <div className="filter-field">
              <Globe size={18} />

              <select>
                <option>Language</option>
                <option>English</option>
                <option>Yoruba</option>
                <option>Hausa</option>
                <option>Igbo</option>
              </select>
            </div>

            {/* Agency */}

            <div className="filter-field">
              <Building2 size={18} />

              <select>
                <option>Agency</option>
                <option>Prime Properties</option>
                <option>Elite Realtors</option>
                <option>Urban Homes</option>
                <option>Luxury Living</option>
              </select>
            </div>

            {/* Property Type */}

            <div className="filter-field">
              <Home size={18} />

              <select>
                <option>Property Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Luxury</option>
                <option>Land</option>
              </select>
            </div>

            {/* Sort */}

            <div className="filter-field">
              <ArrowDownUp size={18} />

              <select>
                <option>Sort By</option>
                <option>Highest Rated</option>
                <option>Most Listings</option>
                <option>Most Experienced</option>
                <option>Newest</option>
              </select>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}