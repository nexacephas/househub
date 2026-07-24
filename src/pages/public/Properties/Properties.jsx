import "./Properties.css";

import Navbar from "../../../components/layout/Navbar";

/* import Footer from "../../../components/layout/Footer"; */

import PropertyHero from "../../../components/property/PropertyHero";
import PropertySearch from "../../../components/property/PropertySearch";
import PropertyFilters from "../../../components/property/PropertyFilters";
import PropertySort from "../../../components/property/PropertySort";
import PropertyGrid from "../../../components/property/PropertyGrid";
import Pagination from "../../../components/ui/Pagination";

import CTASection from "../../../components/home/CTASection";

export default function Properties() {
  return (
    <>
      <Navbar />

      <main className="properties-page">

        <PropertyHero />

        <PropertySearch />

        <PropertyFilters />

        <PropertySort />

        <PropertyGrid />

       <Pagination
  currentPage={1}
  totalPages={10}
/>

        <CTASection />

      </main>
{/*  */}
{/*       <Footer /> */}
    </>
  );
}