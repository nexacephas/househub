import "./PropertyAmenities.css";

import {
  CheckCircle2,
  Home,
} from "lucide-react";

export default function PropertyAmenities({ property }) {

  const amenities = property.amenities || [];

  return (
    <section className="property-amenities">

      <div className="container">

        <div className="section-heading">

          <span>Amenities</span>

          <h2>Property Features</h2>

          <p>
            Everything included with this property.
          </p>

        </div>

        {amenities.length === 0 ? (

          <div className="empty-amenities">

            <Home size={40} />

            <h3>No amenities listed</h3>

            <p>
              The landlord hasn't added amenities for this property.
            </p>

          </div>

        ) : (

          <div className="amenities-grid">

            {amenities.map((item) => (

              <div
                className="amenity-card"
                key={item}
              >

                <CheckCircle2 size={22} />

                <span>{item}</span>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}