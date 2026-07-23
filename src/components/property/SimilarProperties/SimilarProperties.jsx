import "./SimilarProperties.css";

import { ArrowRight } from "lucide-react";

import PropertyCard from "../PropertyCard";

import properties from "../../../data/properties";

export default function SimilarProperties() {
  return (
    <section className="similar-properties">

      <div className="container">

        <div className="section-header">

          <div>

            <span>You May Also Like</span>

            <h2>Similar Properties</h2>

            <p>
              Discover more verified properties that match
              your preferences.
            </p>

          </div>

          <button className="view-all-btn">

            View All Properties

            <ArrowRight size={18} />

          </button>

        </div>

        <div className="similar-grid">

          {properties.slice(0, 3).map((property) => (

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