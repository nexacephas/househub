export function normalizePropertyFilters(filters = {}, category = "") {
  const normalized = {
    search: (filters.search || "").trim(),
    city: (filters.city || "").trim(),
    state: (filters.state || "").trim(),
    propertyType: (filters.propertyType || "").trim(),
    bedrooms: (filters.bedrooms || "").toString().trim(),
    bathrooms: (filters.bathrooms || "").toString().trim(),
    purpose: (filters.purpose || category || "").trim(),
    minPrice: (filters.minPrice || "").toString().trim(),
    maxPrice: (filters.maxPrice || "").toString().trim(),
    sort: filters.sort || "-createdAt",
  };

  return normalized;
}
