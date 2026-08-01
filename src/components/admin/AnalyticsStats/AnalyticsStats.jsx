import "./AnalyticsStats.css";

import {
  DollarSign,
  Users,
  Building2,
  CalendarDays,
  TrendingUp,
} from "lucide-react";

export default function AnalyticsStats({
  stats = {},
}) {
  const cards = [
    {
      title: "Revenue",
      value: `₦${(stats.revenue || 0).toLocaleString()}`,
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Users",
      value: (stats.users || 0).toLocaleString(),
      icon: Users,
      color: "blue",
    },
    {
      title: "Properties",
      value: (stats.properties || 0).toLocaleString(),
      icon: Building2,
      color: "orange",
    },
    {
      title: "Bookings",
      value: (stats.bookings || 0).toLocaleString(),
      icon: CalendarDays,
      color: "purple",
    },
    {
      title: "Growth",
      value: `${stats.growth || 0}%`,
      icon: TrendingUp,
      color: "emerald",
    },
  ];

  return (
    <div className="analytics-stats">

      {cards.map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="analytics-card"
          >

            <div className={`analytics-icon ${card.color}`}>

              <Icon size={24} />

            </div>

            <div className="analytics-info">

              <span>{card.title}</span>

              <h2>{card.value}</h2>

            </div>

          </div>

        );
      })}

    </div>
  );
}