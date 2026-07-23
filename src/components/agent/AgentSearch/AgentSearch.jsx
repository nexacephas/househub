import "./AgentSearch.css";

import {
  Search,
  MapPin,
  Briefcase,
  Award,
  SlidersHorizontal,
} from "lucide-react";

export default function AgentSearch() {
  return (
    <section className="agent-search">

      <div className="container">

        <div className="agent-search-box">

          {/* Name */}

          <div className="search-field">

            <Search size={20} />

            <input
              type="text"
              placeholder="Search agent by name..."
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

          {/* Specialization */}

          <div className="search-field">

            <Briefcase size={20} />

            <select>

              <option>Specialization</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Luxury Homes</option>
              <option>Land Sales</option>

            </select>

          </div>

          {/* Experience */}

          <div className="search-field">

            <Award size={20} />

            <select>

              <option>Experience</option>
              <option>1+ Years</option>
              <option>3+ Years</option>
              <option>5+ Years</option>
              <option>10+ Years</option>

            </select>

          </div>

          <button className="filter-btn">

            <SlidersHorizontal size={18} />

            Filters

          </button>

          <button className="search-btn">

            Search

          </button>

        </div>

      </div>

    </section>
  );
}