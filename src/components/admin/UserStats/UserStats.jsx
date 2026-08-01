import "./UserStats.css";

import {
  Users,
  UserCheck,
  UserRound,
  ShieldCheck,
} from "lucide-react";

export default function UserStats({ users = [] }) {
  const totalUsers = users.length;

  const landlords = users.filter(
    (user) => user.role === "landlord"
  ).length;

  const tenants = users.filter(
    (user) => user.role === "tenant"
  ).length;

  const agents = users.filter(
    (user) => user.role === "agent"
  ).length;

  const admins = users.filter(
    (user) => user.role === "admin"
  ).length;

  const cards = [
    {
      title: "Total Users",
      value: totalUsers,
      icon: <Users size={24} />,
    },
    {
      title: "Landlords",
      value: landlords,
      icon: <UserCheck size={24} />,
    },
    {
      title: "Tenants",
      value: tenants,
      icon: <UserRound size={24} />,
    },
    {
      title: "Admins",
      value: admins,
      icon: <ShieldCheck size={24} />,
    },
  ];

  return (
    <div className="user-stats">

      {cards.map((card) => (

        <div
          key={card.title}
          className="user-stat-card"
        >

          <div className="user-stat-icon">
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