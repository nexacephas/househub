import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import TenantForm from "../../../components/landlord/TenantForm/TenantForm";

export default function EditTenant() {
  return (
    <DashboardLayout role="landlord">
      <TenantForm editing />
    </DashboardLayout>
  );
}