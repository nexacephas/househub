import "./PropertyMap.css";

import {
  MapPin,
  Navigation,
} from "lucide-react";

export default function PropertyMap() {
  return (
    <section className="property-map">

      <div className="map-header">

        <div>

          <h2>Property Location</h2>

          <p>
            View your property's location and
            surrounding area.
          </p>

        </div>

        <button className="direction-btn">

          <Navigation size={18} />

          Open in Maps

        </button>

      </div>

      <div className="map-container">

        <iframe
          title="Property Location"
          src="https://www.google.com/maps?q=Lekki+Phase+1,+Lagos&output=embed"
          loading="lazy"
          allowFullScreen
        />

      </div>

      <div className="location-card">

        <MapPin size={22} />

        <div>

          <h4>Property Address</h4>

          <p>
            Plot 24 Admiralty Way,
            Lekki Phase 1,
            Lagos, Nigeria
          </p>

        </div>

      </div>

    </section>
  );
}