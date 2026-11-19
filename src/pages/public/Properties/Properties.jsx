import "./Properties.css";

import { useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import PropertyHero from "../../../components/property/PropertyHero";
import PropertySearch from "../../../components/property/PropertySearch";
import PropertyFilters from "../../../components/property/PropertyFilters";
import PropertySort from "../../../components/property/PropertySort";
import PropertyGrid from "../../../components/property/PropertyGrid";
import Pagination from "../../../components/ui/Pagination";
import CTASection from "../../../components/home/CTASection";
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
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialCity = searchParams.get("city") || "";
  const initialState = searchParams.get("state") || "";
  const initialPropertyType = searchParams.get("propertyType") || "";
  const initialBedrooms = searchParams.get("bedrooms") || "";
  const initialBathrooms = searchParams.get("bathrooms") || "";
  const initialMinPrice = searchParams.get("minPrice") || "";
  const initialMaxPrice = searchParams.get("maxPrice") || "";
  const [filters, setFilters] = useState(() => createInitialFilters(category));
  const [activeFilters, setActiveFilters] = useState(() => createInitialFilters(category));
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [view, setView] = useState("grid");

  useEffect(() => {
    const urlFilters = {
      search: initialSearch,
      city: initialCity,
      state: initialState,
      propertyType: initialPropertyType,
      bedrooms: initialBedrooms,
      bathrooms: initialBathrooms,
      purpose: category || "",
      minPrice: initialMinPrice,
      maxPrice: initialMaxPrice,
      sort: "-createdAt",
    };
    setFilters(urlFilters);
    setActiveFilters(urlFilters);
    setPage(1);
  }, [category, initialSearch, initialCity, initialState, initialPropertyType, initialBedrooms, initialBathrooms, initialMinPrice, initialMaxPrice]);

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
      <main className="properties-page">
        <PropertyHero />
        <PropertySearch
          filters={filters}
          setFilters={setFilters}
          filtersOpen={filtersOpen}
          onToggleFilters={() => setFiltersOpen((open) => !open)}
        />
        <PropertyFilters
          filters={filters}
          setFilters={setFilters}
          open={filtersOpen}
          onClose={() => setFiltersOpen(false)}
          onApply={() => {
            handleApplyFilters();
            setFiltersOpen(false);
          }}
        />
        <PropertySort
          count={totalResults}
          filters={activeFilters}
          view={view}
          onViewChange={setView}
          onSortChange={handleSortChange}
        />
        <PropertyGrid
          filters={{ ...normalizedFilters, page, limit: 12 }}
          view={view}
          onResultsChange={setTotalResults}
        />
        <Pagination currentPage={page} totalPages={totalPages} onPageChange={setPage} />
        <CTASection />
      </main>
    </>
  );
}