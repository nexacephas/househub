import "./PropertyGrid.css";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import PropertyCard from "../PropertyCard";

import propertyService from "../../../services/property.service";

export default function PropertyGrid() {
  const [properties, setProperties] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
  }, []);

  async function fetchProperties() {
    try {
      setLoading(true);

     const { data } = await propertyService.getAll(filters);

      setProperties(data.properties);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to load properties."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section className="property-grid">
        <div className="container">
          <h2>Loading properties...</h2>
        </div>
      </section>
    );
  }

  if (!properties.length) {
    return (
      <section className="property-grid">
        <div className="container">
          <h2>No properties found.</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="property-grid">
      <div className="container">

        <div className="grid">
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
            />
          ))}
        </div>

      </div>
    </section>
  );
}