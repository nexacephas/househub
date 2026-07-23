import {
  FiCreditCard,
  FiHeart,
  FiTool,
  FiMessageSquare,
  FiUser,
  FiSettings,
} from "react-icons/fi";

import { useNavigate } from "react-router-dom";

import QuickActions from "../../../../components/dashboard/QuickActions/QuickActions";
import { actions } from "../data/actions";

export default function QuickActionsSection() {
  const navigate = useNavigate();

  const iconMap = {
    payment: FiCreditCard,
    home: FiHeart,
    tool: FiTool,
    message: FiMessageSquare,
    user: FiUser,
    settings: FiSettings,
  };

  const routeMap = {
    "Pay Rent": "/tenant/payments",
    "Saved Properties": "/tenant/saved-properties",
    Maintenance: "/tenant/maintenance",
    Messages: "/tenant/messages",
    Profile: "/tenant/profile",
    Settings: "/tenant/settings",
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