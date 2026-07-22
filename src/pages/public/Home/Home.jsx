import Hero from "../../../components/home/Hero/Hero";
import TrustedPartners from "../../../components/home/TrustedPartners/TrustedPartners";
import PropertyCategories from "../../../components/home/PropertyCategories/PropertyCategories";
import FeaturedProperties from "../../../components/home/FeaturedProperties";
import WhyChooseUs from "../../../components/home/WhyChooseUs";
import HowItWorks from "../../../components/home/HowItWorks/HowItWorks";
import FeaturedLocations from "../../../components/home/FeaturedLocations/FeaturedLocations";
import Testimonials from "../../../components/home/Testimonials/Testimonials";
import FAQ from "../FAQ";
import CallToAction from "../../../components/home/CTASection/CTASection";

import "./Home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedPartners />
      <PropertyCategories />
      <FeaturedProperties />
      <WhyChooseUs />
      <HowItWorks />
      <FeaturedLocations />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </>
  );
}