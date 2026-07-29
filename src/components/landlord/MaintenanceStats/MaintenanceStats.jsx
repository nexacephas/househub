import "./MaintenanceStats.css";

import {
  Wrench,
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function MaintenanceStats({
  loading,
  stats,
}) {
  const cards = [
    {
      title: "Total Requests",
      value: stats?.totalRequests || 0,
      icon: Wrench,
      color: "#2563eb",
    },
    {
      title: "Pending",
      value: stats?.pending || 0,
      icon: Clock3,
      color: "#f59e0b",
    },
    {
      title: "Completed",
      value: stats?.completed || 0,
      icon: CheckCircle2,
      color: "#16a34a",
    },
    {
      title: "Urgent",
      value: stats?.urgent || 0,
      icon: AlertTriangle,
      color: "#dc2626",
    },
  ];

  return (
    <div className="maintenance-stats">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            className="maintenance-card"
            key={card.title}
          >
            <div className="maintenance-card-info">

              <h4>{card.title}</h4>

              <h2>
                {loading ? "--" : card.value}
              </h2>

            </div>

            <div
              className="maintenance-card-icon"
              style={{
                background: card.color,
              }}
            >
              <Icon size={30} />
            </div>

          </div>
        );
      })}

    </div>
  );
}