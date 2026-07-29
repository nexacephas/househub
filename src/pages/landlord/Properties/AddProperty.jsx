import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import PropertyForm from "../../../components/landlord/PropertyForm/PropertyForm";

export default function AddProperty() {
  return (
    <DashboardLayout role="landlord">
      <div className="add-property-page">
        <div className="page-header">
          <h1>Add New Property</h1>

          <p>
            Fill in the details below to publish a verified property listing on
            HouseHub.
          </p>
        </div>

        <PropertyForm />
      </div>
    </DashboardLayout>
  );
}