import "./FeaturedProperties.css";
import { properties } from "./index";

import { Link } from "react-router-dom";

import {
  Heart,
  MapPin,
  BedDouble,
  Bath,
  Ruler,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function FeaturedProperties() {
  return (
    <section className="featured-properties">
      <div className="container">

        <div className="section-header">

          <div>
            <span className="section-tag">
              FEATURED PROPERTIES
            </span>

            <h2>
              Discover Handpicked Premium Properties
            </h2>

            <p>
              Explore our latest verified listings across Nigeria,
              carefully selected for quality, location, and value.
            </p>
          </div>

          <Link
            to="/properties"
            className="view-all-btn"
          >
            View All
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="properties-grid">

          {properties.map((property) => (

            <article
              className="property-card"
              key={property.id}
            >

              {/* Image */}

              <div className="property-image">

                <img
                  src={property.image}
                  alt={property.title}
                />

                <span className="status-badge">
                  {property.status}
                </span>

                {property.verified && (
                  <span className="verified-badge">
                    <ShieldCheck size={15} />
                    Verified
                  </span>
                )}

                <button className="wishlist-btn">
                  <Heart size={18} />
                </button>

              </div>

              {/* Content */}

              <div className="property-content">

                <h3>{property.price}</h3>

                <h4>{property.title}</h4>

                <div className="property-location">

                  <MapPin size={16} />

                  <span>{property.location}</span>

                </div>

                <div className="property-features">

                  <span>
                    <BedDouble size={17} />
                    {property.beds} Beds
                  </span>

                  <span>
                    <Bath size={17} />
                    {property.baths} Baths
                  </span>

                  <span>
                    <Ruler size={17} />
                    {property.area}
                  </span>

                </div>

                <Link
                  to={`/properties/${property.id}`}
                  className="details-btn"
                >
                  View Details

                  <ArrowRight size={17} />
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}