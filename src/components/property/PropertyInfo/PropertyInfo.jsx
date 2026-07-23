import "./PropertyInfo.css";

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

export default function PropertyInfo() {
  return (
    <section className="property-info">

      <div className="container">

        <div className="info-layout">

          {/* LEFT */}

          <div className="info-content">

            <div className="property-header">

              <div>

                <span className="property-type">

                  <Home size={16} />

                  Apartment

                </span>

                <h2>Luxury 3 Bedroom Apartment</h2>

                <p>

                  <MapPin size={16} />

                  Wuse 2, Abuja, Nigeria

                </p>

              </div>

              <div className="verified-badge">

                <BadgeCheck size={18} />

                Verified

              </div>

            </div>

            <div className="property-stats">

              <div>

                <BedDouble size={22} />
                <strong>3</strong>
                <span>Bedrooms</span>

              </div>

              <div>

                <Bath size={22} />
                <strong>4</strong>
                <span>Bathrooms</span>

              </div>

              <div>

                <Car size={22} />
                <strong>2</strong>
                <span>Parking</span>

              </div>

              <div>

                <Maximize size={22} />
                <strong>320</strong>
                <span>sqm</span>

              </div>

            </div>

            <div className="description">

              <h3>Property Description</h3>

              <p>
                Experience luxury living in the heart of Abuja.
                This beautifully finished apartment offers spacious
                bedrooms, modern bathrooms, premium finishing,
                24-hour security, uninterrupted power supply,
                water treatment, ample parking and close proximity
                to shopping malls, schools and major road networks.
              </p>

            </div>

            <div className="highlights">

              <h3>Highlights</h3>

              <ul>

                <li>24 Hours Electricity</li>

                <li>Security Gate</li>

                <li>Swimming Pool</li>

                <li>Gym</li>

                <li>Fiber Internet</li>

                <li>Smart Home Features</li>

              </ul>

            </div>

          </div>

          {/* RIGHT */}

          <aside className="price-card">

            <h2>

              ₦2,500,000

              <span>/year</span>

            </h2>

            <button className="contact-btn">

              Contact Agent

            </button>

            <button className="schedule-btn">

              Schedule Inspection

            </button>

            <button className="save-btn">

              <Heart size={18} />

              Save Property

            </button>

            <div className="listing-meta">

              <div>

                <Calendar size={18} />

                Listed: 12 Jul 2026

              </div>

              <div>

                <Eye size={18} />

                1,245 Views

              </div>

            </div>

          </aside>

        </div>

      </div>

    </section>
  );
}