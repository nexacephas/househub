import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import TenantForm from "../../../components/landlord/TenantForm/TenantForm";

export default function AddTenant() {
  return (
    <DashboardLayout role="landlord">
      <TenantForm />
    </DashboardLayout>
  );
}