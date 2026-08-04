import { useCallback, useEffect, useMemo, useState } from "react";

import propertyService from "../../../services/property.service";

import PropertyStats from "../../../components/landlord/PropertyStats/PropertyStats";
import PropertyFilters from "../../../components/landlord/PropertyFilters/PropertyFilters";
import PropertyTable from "../../../components/landlord/PropertyTable/PropertyTable";
/* import PropertyStats from "../../../components/landlord/PropertyStats/PropertyStats";
import PropertyFilters from "../../../components/landlord/PropertyFilters/PropertyFilters";
import PropertyTable from "../../../components/landlord/PropertyTable/PropertyTable";
 */
import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import "./MyProperties.css";

export default function MyProperties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    type: "",
  });

  const loadProperties = useCallback(async () => {
    try {
      const { data } =
        await propertyService.getMyProperties();

      setProperties(data.properties);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadProperties();
  }, [loadProperties]);

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchMatch =
        property.title
          .toLowerCase()
          .includes(filters.search.toLowerCase());

      const statusMatch =
        filters.status === "" ||
        property.status === filters.status;

      const typeMatch =
        filters.type === "" ||
        property.propertyType === filters.type;

      return (
        searchMatch &&
        statusMatch &&
        typeMatch
      );
    });
  }, [properties, filters]);

  if (loading) {
    return <h2>Loading properties...</h2>; 
  }

  return (
    <DashboardLayout role="landlord">
    <div className="my-properties">

      <div className="page-header">

        <h1>My Properties</h1>

        <p>
          Manage all your property listings.
        </p>

      </div>

      <PropertyStats
        properties={properties}
      />

      <PropertyFilters
        filters={filters}
        setFilters={setFilters}
      />

      <PropertyTable
        properties={filteredProperties}
        reload={loadProperties}
      />

    </div>
    </DashboardLayout>
  );
}   