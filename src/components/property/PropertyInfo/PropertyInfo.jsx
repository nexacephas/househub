import "./PropertyInfo.css";

import { useState } from "react";

import {
  BedDouble,
  Bath,
  Car,
  Maximize,
  Calendar,
  Eye,
  Heart,
  Home,
  MapPin,
  BadgeCheck,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  addFavorite,
} from "../../../services/favorite.service";

import {
  createInquiry,
} from "../../../services/inquiry.service";

export default function PropertyInfo({ property }) {

  const [loading, setLoading] = useState(false);

  const saveProperty = async () => {
    try {
      setLoading(true);

      await addFavorite(property._id);

      toast.success("Property added to favorites.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to save property."
      );
    } finally {
      setLoading(false);
    }
  };

  const contactLandlord = async () => {
    try {
      setLoading(true);

      await createInquiry(property._id, {
        subject: "Interested in this property",
        message:
          "Hello, I would like to schedule a viewing.",
      });

      toast.success("Inquiry sent successfully.");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Unable to send inquiry."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="property-info">

      <div className="container">

        <div className="info-layout">

          <div className="info-content">

            <div className="property-header">

              <div>

                <span className="property-type">

                  <Home size={16} />

                  {property.propertyType}

                </span>

                <h2>{property.title}</h2>

                <p>

                  <MapPin size={16} />

                  {property.address}, {property.city}, {property.state}

                </p>

              </div>

              {property.isVerified && (
                <div className="verified-badge">

                  <BadgeCheck size={18} />

                  Verified

                </div>
              )}

            </div>

            <div className="property-stats">

              <div>

                <BedDouble size={22} />

                <strong>{property.bedrooms}</strong>

                <span>Bedrooms</span>

              </div>

              <div>

                <Bath size={22} />

                <strong>{property.bathrooms}</strong>

                <span>Bathrooms</span>

              </div>

              <div>

                <Car size={22} />

                <strong>-</strong>

                <span>Parking</span>

              </div>

              <div>

                <Maximize size={22} />

                <strong>{property.propertyType}</strong>

                <span>Type</span>

              </div>

            </div>

            <div className="description">

              <h3>Property Description</h3>

              <p>{property.description}</p>

            </div>

            <div className="highlights">

              <h3>Amenities</h3>

              <ul>

                {property.amenities?.length ? (

                  property.amenities.map((item) => (

                    <li key={item}>
                      {item}
                    </li>

                  ))

                ) : (

                  <li>No amenities listed.</li>

                )}

              </ul>

            </div>

          </div>

          <aside className="price-card">

            <h2>

              ₦{property.price.toLocaleString()}

              {property.purpose === "rent" && (
                <span>/month</span>
              )}

            </h2>

            <button
              className="contact-btn"
              onClick={contactLandlord}
              disabled={loading}
            >

              Contact Landlord

            </button>

            <button
              className="schedule-btn"
              onClick={contactLandlord}
              disabled={loading}
            >

              Schedule Inspection

            </button>

            <button
              className="save-btn"
              onClick={saveProperty}
              disabled={loading}
            >

              <Heart size={18} />

              Save Property

            </button>

            <div className="listing-meta">

              <div>

                <Calendar size={18} />

                {new Date(
                  property.createdAt
                ).toLocaleDateString()}

              </div>

              <div>

                <Eye size={18} />

                {property.views} Views

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>
  );
}