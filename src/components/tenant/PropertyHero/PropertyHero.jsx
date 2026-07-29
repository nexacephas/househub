import "./PropertyHero.css";

import {
  MapPin,
  BedDouble,
  Bath,
  Car,
  Ruler,
  Home,
} from "lucide-react";

export default function PropertyHero() {
  return (
    <section className="property-hero">

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400"
          alt="Property"
        />

        <span className="property-status">
          Occupied
        </span>

      </div>

      <div className="hero-content">

        <div className="hero-header">

          <div>

            <h1>
              Luxury 4 Bedroom Detached Duplex
            </h1>

            <p>

              <MapPin size={18} />

              Lekki Phase 1, Lagos,
              Nigeria

            </p>

          </div>

          <div className="rent-box">

            <span>Monthly Rent</span>

            <h2>₦4,500,000</h2>

          </div>

        </div>

        <div className="property-info">

          <div>

            <BedDouble size={22} />

            <span>4 Bedrooms</span>

          </div>

          <div>

            <Bath size={22} />

            <span>5 Bathrooms</span>

          </div>

          <div>

            <Car size={22} />

            <span>4 Parking</span>

          </div>

          <div>

            <Ruler size={22} />

            <span>650 sqm</span>

          </div>

          <div>

            <Home size={22} />

            <span>Detached Duplex</span>

          </div>

        </div>

      </div>

    </section>
  );
}