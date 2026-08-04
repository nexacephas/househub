import "./PropertyCard.css";

import { Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  MapPin,
  Heart,
  Maximize,
  Square,
} from "lucide-react";
import { MdVerified } from "react-icons/md";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900";

export default function PropertyCard({ property }) {
  const image = property.images?.length > 0 ? property.images[0].url : FALLBACK_IMAGE;
  const location = [property.city, property.state].filter(Boolean).join(", ");
  const area = property.area ? `${property.area} sqft` : "Area not listed";
  const status = (property.status || "available").toLowerCase();

  return (
    <article className="property-card">
      <div className="property-image">
        <img src={image} alt={property.title} />

        <div className="property-badges">
          {property.isVerified && (
            <span className="verified">
              <MdVerified />
              Verified
            </span>
          )}

          <span className={`rent ${status}`}>{property.purpose?.toUpperCase() || "FOR SALE"}</span>
        </div>

        <button className="favorite-btn" type="button">
          <Heart size={20} />
        </button>
      </div>

      <div className="property-content">
        <div className="price-rating">
          <h2>
            ₦{(property.price || 0).toLocaleString()}
            {property.purpose === "rent" && <span>/month</span>}
          </h2>
        </div>

        <h3>{property.title}</h3>

        <div className="location">
          <MapPin size={17} />
          <span>{location || property.address || "Location not listed"}</span>
        </div>

        <div className="property-meta">
          <span>
            <BedDouble size={18} />
            {property.bedrooms || 0} Beds
          </span>
          <span>
            <Bath size={18} />
            {property.bathrooms || 0} Baths
          </span>
          <span>
            <Maximize size={18} />
            {property.propertyType || "Property"}
          </span>
        </div>

        <div className="property-meta secondary-meta">
          <span>{area}</span>
          <span className={`status-pill ${status}`}>{status}</span>
        </div>

        <div className="property-footer">
          <div className="agent">
            <img src="https://ui-avatars.com/api/?name=HouseHub" alt="Owner" />
            <div>
              <strong>
                {property.owner?.firstName} {property.owner?.lastName}
              </strong>
              <small>Property Owner</small>
            </div>
          </div>

          <Link to={`/properties/${property._id}`} className="details-btn">
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}