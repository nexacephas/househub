import { useCallback, useEffect, useState } from "react";

import PropertyStats from "../../../components/admin/PropertyStats/PropertyStats";
import PropertyFilters from "../../../components/admin/PropertyFilters/PropertyFilters";
import PropertyTable from "../../../components/admin/PropertyTable/PropertyTable";
import PropertyDetails from "../../../components/admin/PropertyDetails/PropertyDetails";
import PropertyForm from "../../../components/admin/PropertyForm/PropertyForm";
import DeletePropertyModal from "../../../components/admin/DeletePropertyModal/DeletePropertyModal";

import propertyService from "../../../services/property.service";

import "./Properties.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProperty, setSelectedProperty] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    type: "",
    city: "",
    owner: "",
  });

  const loadProperties = useCallback(
    async (filterValues) => {
      try {
        setLoading(true);

        const { data } =
          await propertyService.getProperties(filterValues);

        setProperties(data.properties || []);
      } catch (error) {
        console.error(error);
        setProperties([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadProperties(filters);
  }, [filters, loadProperties]);

  async function handleDelete(property) {
    try {
      await propertyService.deleteProperty(property._id);

      setShowDelete(false);
      setSelectedProperty(null);

      loadProperties(filters);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="admin-properties-page">

      <div className="page-header">

        <div>

          <h1>Properties</h1>

          <p>
            Manage all properties listed on HouseHub.
          </p>

        </div>

        <button
          className="add-property-btn"
          onClick={() => {
            setSelectedProperty(null);
            setShowForm(true);
          }}
        >
          + Add Property
        </button>

      </div>

      <PropertyStats />

      <PropertyFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="properties-content">

        <div className="properties-table">

          <PropertyTable
            properties={properties}
            loading={loading}
            onSelect={setSelectedProperty}
            onDelete={(property) => {
              setSelectedProperty(property);
              setShowDelete(true);
            }}
          />

        </div>

        {selectedProperty && (

          <div className="property-details-panel">

            <PropertyDetails
              property={selectedProperty}
            />

          </div>

        )}

      </div>

      {showForm && (

        <PropertyForm
          property={selectedProperty}
          onClose={() => {
            setShowForm(false);
            setSelectedProperty(null);
          }}
          onSave={() => {
            loadProperties();
            setShowForm(false);
            setSelectedProperty(null);
          }}
        />

      )}

      {showDelete && (

        <DeletePropertyModal
          property={selectedProperty}
          onClose={() => setShowDelete(false)}
          onDelete={handleDelete}
        />

      )}

    </div>
  );
}

export default Properties;