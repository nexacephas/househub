import "./PropertyDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import CTASection from "../../../components/home/CTASection";

import PropertyGallery from "../../../components/property/PropertyGallery";
import PropertyInfo from "../../../components/property/PropertyInfo";
import PropertyAmenities from "../../../components/property/PropertyAmenities";
import PropertyLocation from "../../../components/property/PropertyLocation";
import PropertyAgent from "../../../components/property/PropertyAgent";
import PropertyReviews from "../../../components/property/PropertyReviews";
import SimilarProperties from "../../../components/property/SimilarProperties";

import propertyService from "../../../services/property.service";

export default function PropertyDetails() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  async function fetchProperty() {
    try {
      setLoading(true);

      const { data } = await propertyService.getProperty(id);

      setProperty(data.property);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to load property."
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="property-details-page">
          <h2>Loading property...</h2>
        </main>
      </>
    );
  }

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="property-details-page">
          <h2>Property not found.</h2>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="property-details-page">

        <PropertyGallery property={property} />

        <PropertyInfo property={property} />

        <PropertyAmenities property={property} />

        <PropertyLocation property={property} />

        <PropertyAgent property={property} />

        <PropertyReviews property={property} />

        <SimilarProperties property={property} />

        <CTASection />

      </main>

      <Footer />
    </>
  );
}