import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import PropertyForm from "../../../components/landlord/PropertyForm/PropertyForm";

import propertyService from "../../../services/property.service";

export default function EditProperty() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const { data } = await propertyService.getProperty(id);

        setProperty(data.property);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Unable to load property."
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout role="landlord">
        <h2>Loading property...</h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="landlord">
      <PropertyForm
        editing
        property={property}
      />
    </DashboardLayout>
  );
}