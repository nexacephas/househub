import test from "node:test";
import assert from "node:assert/strict";

import { normalizePropertyFilters } from "./propertyFilters.js";

test("normalizePropertyFilters derives purpose from a category route", () => {
  const result = normalizePropertyFilters(
    { search: "  villa  ", city: " Lagos ", propertyType: "house" },
    "rent"
  );

  assert.deepEqual(result, {
    search: "villa",
    city: "Lagos",
    state: "",
    propertyType: "house",
    bedrooms: "",
    bathrooms: "",
    purpose: "rent",
    minPrice: "",
    maxPrice: "",
    sort: "-createdAt",
  });
});

test("normalizePropertyFilters preserves an explicit purpose override", () => {
  const result = normalizePropertyFilters(
    { purpose: "sale", city: " Abuja " },
    "rent"
  );

  assert.equal(result.purpose, "sale");
  assert.equal(result.city, "Abuja");
});
