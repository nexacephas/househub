import { useEffect, useState } from "react";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import tenantService from "../../../services/tenant.service";

import TenantStats from "../../../components/landlord/TenantStats/TenantStats";
import TenantFilters from "../../../components/landlord/TenantFilters/TenantFilters";
import TenantTable from "../../../components/landlord/TenantTable/TenantTable";

import "./Tenants.css";

export default function Tenants() {
  const [tenants, setTenants] = useState([]);

  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    status: "all",
  });

  async function loadTenants() {
    try {
      setLoading(true);

      const { data } =
        await tenantService.getTenants();

      setTenants(data.tenants || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadTenants();
  }, []);

const filteredTenants = [...tenants]
  .filter((tenant) => {
    const searchMatch =
      tenant.fullName
        ?.toLowerCase()
        .includes(filters.search.toLowerCase());

    const statusMatch =
      filters.status === "all" ||
      tenant.status === filters.status;

    return searchMatch && statusMatch;
  })
  .sort((a, b) => {
    switch (filters.sort) {
      case "oldest":
        return (
          new Date(a.createdAt) -
          new Date(b.createdAt)
        );

      case "rent-high":
        return (
          b.rentAmount -
          a.rentAmount
        );

      case "rent-low":
        return (
          a.rentAmount -
          b.rentAmount
        );

      case "name":
        return a.fullName.localeCompare(
          b.fullName
        );

      default:
        return (
          new Date(b.createdAt) -
          new Date(a.createdAt)
        );
    }
  });

  return (
    <DashboardLayout role="landlord">

      <div className="tenants-page">

        <div className="page-header">

          <div>

            <h1>Tenants</h1>

            <p>
              Manage all tenants across your
              properties.
            </p>

          </div>

        </div>

        <TenantStats
          tenants={tenants}
        />

        <TenantFilters
          filters={filters}
          setFilters={setFilters}
        />

        <TenantTable
          tenants={filteredTenants}
          loading={loading}
          reload={loadTenants}
        />

      </div>

    </DashboardLayout>
  );
}