import "./PropertyFilters.css";

import { useState } from "react";

import {
  SlidersHorizontal,
  BedDouble,
  Bath,
  Home,
  MapPin,
  Car,
  PawPrint,
  Check,
  RotateCcw,
} from "lucide-react";

import {
  MdVerified,
} from "react-icons/md";

export default function PropertyFilters() {

  const [verified, setVerified] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [parking, setParking] = useState(false);
  const [pets, setPets] = useState(false);

  return (

    <section className="property-filters">

      <div className="container">

        <div className="filter-card">

          <div className="filter-header">

            <h3>

              <SlidersHorizontal size={22} />

              Advanced Filters

            </h3>

          </div>

          <div className="filter-grid">

            {/* Property Type */}

            <div className="filter-group">

              <label>

                <Home size={16} />

                Property Type

              </label>

              <select>

                <option>Any</option>
                <option>Apartment</option>
                <option>Duplex</option>
                <option>Detached House</option>
                <option>Office</option>
                <option>Land</option>

              </select>

            </div>

            {/* Location */}

            <div className="filter-group">

              <label>

                <MapPin size={16} />

                State

              </label>

              <select>

                <option>All States</option>
                <option>Abuja</option>
                <option>Lagos</option>
                <option>Oyo</option>
                <option>Rivers</option>
                <option>Kaduna</option>

              </select>

            </div>

            {/* Bedrooms */}

            <div className="filter-group">

              <label>

                <BedDouble size={16} />

                Bedrooms

              </label>

              <select>

                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>

              </select>

            </div>

            {/* Bathrooms */}

            <div className="filter-group">

              <label>

                <Bath size={16} />

                Bathrooms

              </label>

              <select>

                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>

              </select>

            </div>

            {/* Price */}

            <div className="filter-group">

              <label>Minimum Price</label>

              <input
                type="number"
                placeholder="₦ 500,000"
              />

            </div>

            <div className="filter-group">

              <label>Maximum Price</label>

              <input
                type="number"
                placeholder="₦ 10,000,000"
              />

            </div>

          </div>

          {/* Amenities */}

          <div className="amenity-options">

            <button
              className={verified ? "active" : ""}
              onClick={() => setVerified(!verified)}
            >
              <MdVerified />
              Verified
            </button>

            <button
              className={furnished ? "active" : ""}
              onClick={() => setFurnished(!furnished)}
            >
              <Check size={16} />
              Furnished
            </button>

            <button
              className={parking ? "active" : ""}
              onClick={() => setParking(!parking)}
            >
              <Car size={16} />
              Parking
            </button>

            <button
              className={pets ? "active" : ""}
              onClick={() => setPets(!pets)}
            >
              <PawPrint size={16} />
              Pet Friendly
            </button>

          </div>

          <div className="filter-actions">

            <button className="reset-btn">

              <RotateCcw size={18} />

              Reset

            </button>

            <button className="apply-btn">

              Apply Filters

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}