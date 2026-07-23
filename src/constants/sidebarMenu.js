import {
  FiGrid,
  FiHome,
  FiUsers,
  FiDollarSign,
  FiTool,
  FiMessageSquare,
  FiSettings,
  FiUserCheck,
  FiFileText,
  FiBarChart2,
  FiShield,
} from "react-icons/fi";

export const sidebarMenus = {
  landlord: [
    {
      name: "Dashboard",
      path: "/landlord/dashboard",
      icon: FiGrid,
    },
    {
      name: "Properties",
      path: "/landlord/properties",
      icon: FiHome,
    },
    {
      name: "Tenants",
      path: "/landlord/tenants",
      icon: FiUsers,
    },
    {
      name: "Payments",
      path: "/landlord/payments",
      icon: FiDollarSign,
    },
    {
      name: "Maintenance",
      path: "/landlord/maintenance",
      icon: FiTool,
    },
    {
      name: "Messages",
      path: "/landlord/messages",
      icon: FiMessageSquare,
    },
    {
      name: "Settings",
      path: "/landlord/settings",
      icon: FiSettings,
    },
  ],

  tenant: [
    {
      name: "Dashboard",
      path: "/tenant/dashboard",
      icon: FiGrid,
    },
    {
      name: "My Property",
      path: "/tenant/property",
      icon: FiHome,
    },
    {
      name: "Rent",
      path: "/tenant/rent",
      icon: FiDollarSign,
    },
    {
      name: "Maintenance",
      path: "/tenant/maintenance",
      icon: FiTool,
    },
    {
      name: "Messages",
      path: "/tenant/messages",
      icon: FiMessageSquare,
    },
    {
      name: "Documents",
      path: "/tenant/documents",
      icon: FiFileText,
    },
    {
      name: "Settings",
      path: "/tenant/settings",
      icon: FiSettings,
    },
  ],

  agent: [
    {
      name: "Dashboard",
      path: "/agent/dashboard",
      icon: FiGrid,
    },
    {
      name: "Listings",
      path: "/agent/listings",
      icon: FiHome,
    },
    {
      name: "Clients",
      path: "/agent/clients",
      icon: FiUsers,
    },
    {
      name: "Analytics",
      path: "/agent/analytics",
      icon: FiBarChart2,
    },
    {
      name: "Messages",
      path: "/agent/messages",
      icon: FiMessageSquare,
    },
    {
      name: "Settings",
      path: "/agent/settings",
      icon: FiSettings,
    },
  ],

  admin: [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: FiGrid,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: FiUserCheck,
    },
    {
      name: "Properties",
      path: "/admin/properties",
      icon: FiHome,
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: FiBarChart2,
    },
    {
      name: "Messages",
      path: "/admin/messages",
      icon: FiMessageSquare,
    },
    {
      name: "Settings",
      path: "/admin/settings",
      icon: FiSettings,
    },
    {
      name: "System",
      path: "/admin/system",
      icon: FiShield,
    },
  ],
};