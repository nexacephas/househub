import "./PropertyDetails.css";

import {
  MapPin,
  Home,
  BedDouble,
  Bath,
  Square,
  User,
  Calendar,
  BadgeDollarSign,
} from "lucide-react";

export default function PropertyDetails({ property }) {
  if (!property) return null;

  return (
    <div className="property-details">

      <img
        className="property-banner"
        src={
          property.images?.[0] ||
          "https://placehold.co/600x350"
        }
        alt={property.title}
      />

      <div className="property-header">

        <h2>{property.title}</h2>

        <span
          className={`status ${(
            property.status || ""
          ).toLowerCase()}`}
        >
          {property.status}
        </span>

      </div>

      <h3 className="price">
        ₦{(property.price || 0).toLocaleString()}
      </h3>

      <div className="detail-item">
        <MapPin size={18} />
        <span>
          {property.address || "-"}
        </span>
      </div>

      <div className="detail-item">
        <Home size={18} />
        <span>
          {property.type || "-"}
        </span>
      </div>

      <div className="property-specs">

        <div>

          <BedDouble size={18} />

          <span>
            {property.bedrooms || 0} Beds
          </span>

        </div>

        <div>

          <Bath size={18} />

          <span>
            {property.bathrooms || 0} Baths
          </span>

        </div>

        <div>

          <Square size={18} />

          <span>
            {property.area || 0} sqft
          </span>

        </div>

      </div>

      <div className="section">

        <h4>Description</h4>

        <p>
          {property.description ||
            "No description available."}
        </p>

      </div>

      <div className="section">

        <h4>Owner</h4>

        <div className="detail-item">
          <User size={18} />
          <span>
            {property.owner?.fullName ||
              property.owner?.name ||
              "-"}
          </span>
        </div>

      </div>

      <div className="section">

        <h4>Dates</h4>

        <div className="detail-item">
          <Calendar size={18} />
          <span>
            Created:{" "}
            {property.createdAt
              ? new Date(
                  property.createdAt
                ).toLocaleDateString()
              : "-"}
          </span>
        </div>

        <div className="detail-item">
          <Calendar size={18} />
          <span>
            Updated:{" "}
            {property.updatedAt
              ? new Date(
                  property.updatedAt
                ).toLocaleDateString()
              : "-"}
          </span>
        </div>

      </div>

      <div className="section">

        <h4>Listing</h4>

        <div className="detail-item">
          <BadgeDollarSign size={18} />

          <span>
            {property.featured
              ? "Featured Listing"
              : "Standard Listing"}
          </span>

        </div>

      </div>

    </div>
  );
}