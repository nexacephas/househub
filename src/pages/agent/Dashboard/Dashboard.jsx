import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import StatsSection from "./sections/StatsSection";
import PerformanceSection from "./sections/PerformanceSection";
import ProfileSection from "./sections/ProfileSection";
import ActivitySection from "./sections/ActivitySection";
import NotificationSection from "./sections/NotificationSection";
import QuickActionsSection from "./sections/QuickActionsSection";

import "./Dashboard.css";

export default function Dashboard() {
  return (
    <DashboardLayout role="agent">
      <StatsSection />

      <div className="dashboard-grid">
        <PerformanceSection />
        <ProfileSection />
      </div>

      <div className="dashboard-grid dashboard-grid--stacked">
        <ActivitySection />
        <NotificationSection />
      </div>

      <QuickActionsSection />
    </DashboardLayout>
  );
}