import "./PropertyCard.css";
import { Link } from "react-router-dom";
import {
  BedDouble,
  Bath,
  MapPin,
  Heart,
  Maximize,
  Star,
} from "lucide-react";

import { MdVerified } from "react-icons/md";

export default function PropertyCard({
  image,
  title,
  price,
  period,
  location,
  bedrooms,
  bathrooms,
  area,
  rating,
  verified,
  listingType,
  agent,
}) {
  return (
    <article className="property-card">

      <div className="property-image">

        <img src={image} alt={title} />

        <div className="property-badges">

          {verified && (
            <span className="verified">
              <MdVerified />
              Verified
            </span>
          )}

          <span className="rent">
            {listingType}
          </span>

        </div>

        <button className="favorite-btn">
          <Heart size={20} />
        </button>

      </div>

      <div className="property-content">

        <div className="price-rating">

          <h2>
            ₦{price}
            <span>/{period}</span>
          </h2>

          <div className="rating">
            <Star
              size={16}
              fill="currentColor"
            />
            {rating}
          </div>

        </div>

        <h3>{title}</h3>

        <div className="location">
          <MapPin size={17} />
          {location}
        </div>

        <div className="property-meta">

          <span>
            <BedDouble size={18} />
            {bedrooms} Beds
          </span>

          <span>
            <Bath size={18} />
            {bathrooms} Baths
          </span>

          <span>
            <Maximize size={18} />
            {area} sqm
          </span>

        </div>

        <div className="property-footer">

          <div className="agent">

            <img
              src={agent.image}
              alt={agent.name}
            />

            <div>

              <strong>{agent.name}</strong>

              <small>{agent.role}</small>

            </div>

          </div>

         <Link
  to={`/properties/${1}`}
  className="details-btn"
>
  View Details
</Link>

        </div>

      </div>

    </article>
  );
}