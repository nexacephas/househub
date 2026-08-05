import "./Properties.css";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import PropertyHero from "../../../components/property/PropertyHero";
import PropertySearch from "../../../components/property/PropertySearch";
import PropertyFilters from "../../../components/property/PropertyFilters";
import PropertySort from "../../../components/property/PropertySort";
import PropertyGrid from "../../../components/property/PropertyGrid";
import Pagination from "../../../components/ui/Pagination";
import CTASection from "../../../components/home/CTASection";
import Navbar from "../../../components/layout/Navbar/Navbar";
import { normalizePropertyFilters } from "../../../utils/propertyFilters";

function createInitialFilters(category = "") {
  return {
    search: "",
    city: "",
    state: "",
    propertyType: "",
    bedrooms: "",
    bathrooms: "",
    purpose: category || "",
    minPrice: "",
    maxPrice: "",
    sort: "-createdAt",
  };
}

export default function Properties() {
  const { category } = useParams();
  const [filters, setFilters] = useState(() => createInitialFilters(category));
  const [activeFilters, setActiveFilters] = useState(() => createInitialFilters(category));
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, purpose: category || "" }));
    setActiveFilters((prev) => ({ ...prev, purpose: category || "" }));
    setPage(1);
  }, [category]);

  const normalizedFilters = useMemo(
    () => normalizePropertyFilters(activeFilters, category),
    [activeFilters, category]
  );

  const handleApplyFilters = () => {
    setActiveFilters((prev) => ({ ...prev, ...filters, purpose: filters.purpose || category || "" }));
    setPage(1);
  };

  const handleSortChange = (sortValue) => {
    setFilters((prev) => ({ ...prev, sort: sortValue }));
    setActiveFilters((prev) => ({ ...prev, sort: sortValue }));
  };

  const totalPages = Math.max(1, Math.ceil(totalResults / 12));

  return (
    <>
      <Navbar />

      <main className="properties-page">
        <PropertyHero />
        <PropertySearch filters={filters} setFilters={setFilters} />
        <PropertyFilters filters={filters} setFilters={setFilters} onApply={handleApplyFilters} />
        <PropertySort count={totalResults} filters={activeFilters} onSortChange={handleSortChange} />
        <PropertyGrid filters={{ ...normalizedFilters, page, limit: 12 }} onResultsChange={setTotalResults} />
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        <CTASection />
      </main>
    </>
  );
}