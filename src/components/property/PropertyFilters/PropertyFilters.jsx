import "./PropertyFilters.css";

import { useEffect, useState } from "react";

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
  X,
} from "lucide-react";

import {
  MdVerified,
} from "react-icons/md";

export default function PropertyFilters({
  filters = {},
  setFilters = () => {},
  open = false,
  onClose = () => {},
  onApply = () => {},
}) {

  const [verified, setVerified] = useState(false);
  const [furnished, setFurnished] = useState(false);
  const [parking, setParking] = useState(false);
  const [pets, setPets] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (

    <section className={`property-filters${open ? " open" : ""}`}>

      <button
        className="filter-backdrop"
        type="button"
        aria-label="Close filters"
        onClick={onClose}
      />

      <div className="property-filters-container">

        <div
          className="filter-card"
          role={open ? "dialog" : undefined}
          aria-modal={open ? "true" : undefined}
          aria-label="Property filters"
        >

          <div className="filter-header">

            <h3>

              <SlidersHorizontal size={22} />

              Advanced Filters

            </h3>

            <button
              className="filter-close"
              type="button"
              aria-label="Close filters"
              onClick={onClose}
            >
              <X size={20} />
            </button>

          </div>

          <div className="filter-grid">

            {/* Property Type */}

            <div className="filter-group">

              <label>

                <Home size={16} />

                Property Type

              </label>

              <select name="propertyType" value={filters.propertyType || ""} onChange={handleChange}>

                <option value="">Any</option>
                <option value="apartment">Apartment</option>
                <option value="duplex">Duplex</option>
                <option value="house">House</option>
                <option value="bungalow">Bungalow</option>
                <option value="office">Office</option>
                <option value="land">Land</option>

              </select>

            </div>

            {/* Location */}

            <div className="filter-group">

              <label>

                <MapPin size={16} />

                State

              </label>

              <select name="state" value={filters.state || ""} onChange={handleChange}>

                <option value="">All States</option>
                <option value="Abuja">Abuja</option>
                <option value="Lagos">Lagos</option>
                <option value="Oyo">Oyo</option>
                <option value="Rivers">Rivers</option>
                <option value="Kaduna">Kaduna</option>

              </select>

            </div>

            {/* Bedrooms */}

            <div className="filter-group">

              <label>

                <BedDouble size={16} />

                Bedrooms

              </label>

              <select name="bedrooms" value={filters.bedrooms || ""} onChange={handleChange}>

                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>
                <option value="4">4+</option>

              </select>

            </div>

            {/* Bathrooms */}

            <div className="filter-group">

              <label>

                <Bath size={16} />

                Bathrooms

              </label>

              <select name="bathrooms" value={filters.bathrooms || ""} onChange={handleChange}>

                <option value="">Any</option>
                <option value="1">1+</option>
                <option value="2">2+</option>
                <option value="3">3+</option>

              </select>

            </div>

            {/* Price */}

            <div className="filter-group">

              <label>Minimum Price</label>

              <input
                type="number"
                name="minPrice"
                value={filters.minPrice || ""}
                placeholder="₦ 500,000"
                onChange={handleNumberChange}
              />

            </div>

            <div className="filter-group">

              <label>Maximum Price</label>

              <input
                type="number"
                name="maxPrice"
                value={filters.maxPrice || ""}
                placeholder="₦ 10,000,000"
                onChange={handleNumberChange}
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

            <button className="reset-btn" type="button" onClick={() => setFilters((prev) => ({ ...prev, state: "", propertyType: "", bedrooms: "", bathrooms: "", minPrice: "", maxPrice: "" }))}>

              <RotateCcw size={18} />

              Reset

            </button>

            <button className="apply-btn" type="button" onClick={onApply}>

              Apply Filters

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}