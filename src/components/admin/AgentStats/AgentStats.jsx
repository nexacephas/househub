import "./AgentStats.css";

import {
  Users,
  BadgeCheck,
  Home,
  TrendingUp,
} from "lucide-react";

export default function AgentStats() {
  const stats = [
    {
      title: "Total Agents",
      value: "248",
      icon: <Users size={22} />,
      color: "blue",
    },
    {
      title: "Verified Agents",
      value: "193",
      icon: <BadgeCheck size={22} />,
      color: "green",
    },
    {
      title: "Properties Listed",
      value: "1,482",
      icon: <Home size={22} />,
      color: "orange",
    },
    {
      title: "Monthly Sales",
      value: "₦86M",
      icon: <TrendingUp size={22} />,
      color: "purple",
    },
  ];

  return (
    <div className="agent-stats">

      {stats.map((stat, index) => (

        <div
          key={index}
          className="agent-stat-card"
        >

          <div className={`stat-icon ${stat.color}`}>
            {stat.icon}
          </div>

          <div>

            <h3>{stat.value}</h3>

            <p>{stat.title}</p>

          </div>

        </div>

      ))}

    </div>
  );
}