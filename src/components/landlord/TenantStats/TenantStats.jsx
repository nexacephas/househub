import "./TenantStats.css";

import {
  Users,
  Home,
  Wallet,
  AlertCircle,
} from "lucide-react";

export default function TenantStats({ tenants }) {
  const total = tenants.length;

  const active = tenants.filter(
    (tenant) => tenant.status === "active"
  ).length;

  const overdue = tenants.filter(
    (tenant) => tenant.rentStatus === "overdue"
  ).length;

  const monthlyRevenue = tenants.reduce(
    (total, tenant) =>
      total + (tenant.rentAmount || 0),
    0
  );

  const cards = [
    {
      title: "Total Tenants",
      value: total,
      icon: <Users size={24} />,
    },
    {
      title: "Active Leases",
      value: active,
      icon: <Home size={24} />,
    },
    {
      title: "Monthly Revenue",
      value: `₦${monthlyRevenue.toLocaleString()}`,
      icon: <Wallet size={24} />,
    },
    {
      title: "Overdue Rent",
      value: overdue,
      icon: <AlertCircle size={24} />,
    },
  ];

  return (
    <div className="tenant-stats">
      {cards.map((card) => (
        <div className="tenant-stat-card" key={card.title}>
          <div className="stat-icon">
            {card.icon}
          </div>

          <div>
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}