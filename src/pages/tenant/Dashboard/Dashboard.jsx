import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import StatsSection from "./sections/StatsSection";
import PaymentHistorySection from "./sections/PaymentHistorySection";
import ProfileSection from "./sections/ProfileSection";
import ActivitySection from "./sections/ActivitySection";
import NotificationSection from "./sections/NotificationSection";
import QuickActionsSection from "./sections/QuickActionsSection";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout role="tenant">
      <StatsSection />

      <div className="dashboard-row">
        <PaymentHistorySection />
        <ProfileSection />
      </div>

      <div className="dashboard-row-two">
        <ActivitySection />
        <NotificationSection />
      </div>

      <QuickActionsSection />
    </DashboardLayout>
  );
}