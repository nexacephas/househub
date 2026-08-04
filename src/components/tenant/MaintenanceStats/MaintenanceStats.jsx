import "./MaintenanceStats.css";

import {
  Wrench,
  Clock3,
  Hammer,
  CheckCircle2,
} from "lucide-react";

export default function MaintenanceStats({ requests = [] }) {
  const stats = [
    {
      title: "Total Requests",
      value: requests.length,
      icon: Wrench,
      color: "#2563eb",
    },
    {
      title: "Pending",
      value: requests.filter((request) => request.status === "open").length,
      icon: Clock3,
      color: "#f59e0b",
    },
    {
      title: "In Progress",
      value: requests.filter((request) => request.status === "in_progress").length,
      icon: Hammer,
      color: "#8b5cf6",
    },
    {
      title: "Completed",
      value: requests.filter((request) => request.status === "resolved" || request.status === "closed").length,
      icon: CheckCircle2,
      color: "#22c55e",
    },
  ];

  return (
    <section className="maintenance-stats">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (

          <div
            key={stat.title}
            className="maintenance-stat-card"
          >

            <div className="maintenance-stat-info">

              <small>{stat.title}</small>

              <h2>{stat.value}</h2>

            </div>

            <div
              className="maintenance-stat-icon"
              style={{
                background: `${stat.color}15`,
                color: stat.color,
              }}
            >

              <Icon size={28} />

            </div>

          </div>

        );

      })}

    </section>
  );
}