import {
  FiPlus,
  FiHome,
  FiUsers,
  FiCalendar,
  FiMessageSquare,
  FiBarChart2,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import QuickActions from "../../../../components/dashboard/QuickActions/QuickActions";
import { actions } from "../data/actions";

export default function QuickActionsSection() {
  const navigate = useNavigate();

  const iconMap = {
    plus: FiPlus,
    home: FiHome,
    users: FiUsers,
    calendar: FiCalendar,
    message: FiMessageSquare,
    report: FiBarChart2,
  };

  const routeMap = {
    "Add Listing": "/agent/listings/new",
    "My Listings": "/agent/listings",
    Leads: "/agent/leads",
    Appointments: "/agent/appointments",
    Messages: "/agent/messages",
    Reports: "/agent/reports",
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