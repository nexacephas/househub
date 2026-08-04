import "./PropertyGrid.css";

import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

import PropertyCard from "../PropertyCard";
import propertyService from "../../../services/property.service";

export default function PropertyGrid({ filters = {}, onResultsChange = () => {} }) {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchProperties() {
      try {
        setLoading(true);
        setError("");

        const { data } = await propertyService.getProperties(filters);

        if (!isMounted) return;

        const propertiesList = data.properties || [];
        setProperties(propertiesList);
        onResultsChange(data.total ?? data.count ?? propertiesList.length ?? 0);
      } catch (err) {
        if (!isMounted) return;

        setError(err.response?.data?.message || "Failed to load properties.");
        setProperties([]);
        onResultsChange(0);
        toast.error(err.response?.data?.message || "Failed to load properties.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    fetchProperties();

    return () => {
      isMounted = false;
    };
  }, [filters]);

  const content = useMemo(() => {
    if (loading) {
      return (
        <section className="property-grid">
          <div className="property-grid-container state-card">
            <h2>Loading properties...</h2>
            <p>Fetching the latest listings for you.</p>
          </div>
        </section>
      );
    }

    if (error) {
      return (
        <section className="property-grid">
          <div className="property-grid-container state-card state-card-error">
            <h2>Unable to load properties</h2>
            <p>{error}</p>
          </div>
        </section>
      );
    }

    if (!properties.length) {
      return (
        <section className="property-grid">
          <div className="property-grid-container state-card">
            <h2>No properties found.</h2>
            <p>Try a different search or location. New listings appear here automatically.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="property-grid">
        <div className="property-grid-container">
          <div className="grid">
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        </div>
      </section>
    );
  }, [error, loading, properties]);

  return content;
}