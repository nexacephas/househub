import {
  FiPlus,
  FiHome,
  FiUsers,
  FiMessageSquare,
  FiDollarSign,
  FiSettings,
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
    message: FiMessageSquare,
    dollar: FiDollarSign,
    settings: FiSettings,
  };

  const routeMap = {
    "Add Property": "/landlord/properties/new",
    "My Properties": "/landlord/properties",
    Tenants: "/landlord/tenants",
    Messages: "/landlord/messages",
    Earnings: "/landlord/earnings",
    Settings: "/landlord/settings",
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