import "./LandlordStats.css";

import {
  Users,
  BadgeCheck,
  Clock3,
  Ban,
} from "lucide-react";

export default function LandlordStats() {
  const stats = [
    {
      title: "Total Landlords",
      value: "1,284",
      icon: <Users size={22} />,
      color: "blue",
    },
    {
      title: "Verified",
      value: "986",
      icon: <BadgeCheck size={22} />,
      color: "green",
    },
    {
      title: "Pending Verification",
      value: "142",
      icon: <Clock3 size={22} />,
      color: "orange",
    },
    {
      title: "Suspended",
      value: "21",
      icon: <Ban size={22} />,
      color: "red",
    },
  ];

  return (
    <div className="landlord-stats">

      {stats.map((stat, index) => (

        <div
          key={index}
          className="landlord-stat-card"
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