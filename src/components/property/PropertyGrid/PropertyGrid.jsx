import "./PropertyGrid.css";

import PropertyCard from "../PropertyCard";

import properties from "../../../data/properties";

export default function PropertyGrid() {
  return (
    <section className="property-grid">

      <div className="container">

        <div className="grid">

          {properties.map((property) => (

            <PropertyCard
              key={property.id}
              {...property}
            />

          ))}

        </div>

      </div>

    </section>
  );
}