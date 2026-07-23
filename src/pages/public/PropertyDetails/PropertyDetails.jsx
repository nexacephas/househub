import "./PropertyDetails.css";

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

export default function PropertyDetails() {
  return (
    <>
      <Navbar />

      <main className="property-details-page">

        <PropertyGallery />

        <PropertyInfo />

        <PropertyAmenities />

        <PropertyLocation />

        <PropertyAgent />

        <PropertyReviews />

        <SimilarProperties />

        <CTASection />

      </main>

      <Footer />
    </>
  );
}