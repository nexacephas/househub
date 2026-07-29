import "./SimilarProperties.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import PropertyCard from "../PropertyCard";

import propertyService from "../../../services/property.service";

export default function SimilarProperties({ property }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!property) return;

    loadSimilarProperties();
  }, [property]);

  async function loadSimilarProperties() {
    try {
      setLoading(true);

      const { data } = await propertyService.getProperties({
        city: property.city,
        propertyType: property.propertyType,
        limit: 3,
      });

      const filtered = data.properties.filter(
        (item) => item._id !== property._id
      );

      setProperties(filtered.slice(0, 3));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="similar-properties">
        <div className="container">
          <h2>Loading similar properties...</h2>
        </div>
      </section>
    );
  }

  if (properties.length === 0) {
    return null;
  }

  return (
    <section className="similar-properties">

      <div className="container">

        <div className="section-header">

          <div>

            <span>You May Also Like</span>

            <h2>Similar Properties</h2>

            <p>
              Discover more verified properties near this location.
            </p>

          </div>

          <Link
            to="/properties"
            className="view-all-btn"
          >
            View All Properties
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="similar-grid">

          {properties.map((item) => (
            <PropertyCard
              key={item._id}
              property={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}