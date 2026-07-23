import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import StatsSection from "./sections/StatsSection";
import RevenueSection from "./sections/RevenueSection";
import ProfileSection from "./sections/ProfileSection";
import ActivitySection from "./sections/ActivitySection";
import NotificationSection from "./sections/NotificationSection";
import QuickActionsSection from "./sections/QuickActionsSection";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout role="landlord">
      <StatsSection />

      <div className="dashboard-row">
        <RevenueSection />
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