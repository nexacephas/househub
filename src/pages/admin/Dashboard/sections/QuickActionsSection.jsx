import {
  FiUsers,
  FiHome,
  FiShield,
  FiBarChart2,
  FiFileText,
  FiSettings,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import QuickActions from "../../../../components/dashboard/QuickActions/QuickActions";
import { actions } from "../data/actions";

export default function QuickActionsSection() {
  const navigate = useNavigate();

  const iconMap = {
    users: FiUsers,
    home: FiHome,
    shield: FiShield,
    chart: FiBarChart2,
    report: FiFileText,
    settings: FiSettings,
  };

  const routeMap = {
    "Manage Users": "/admin/users",
    Properties: "/admin/properties",
    "Verify Agents": "/admin/verification",
    Analytics: "/admin/analytics",
    Reports: "/admin/reports",
    Settings: "/admin/settings",
  };

  const formattedActions = actions.map((action) => ({
    ...action,
    icon: iconMap[action.icon],
    onClick: () => navigate(routeMap[action.label] || "#"),
  }));

  return (
    <section className="quick-actions-section">
      <QuickActions
        title="Quick Actions"
        actions={formattedActions}
      />
    </section>
  );
}