import "./DocumentStats.css";

import {
  FileText,
  Receipt,
  FileSignature,
  HardDrive,
} from "lucide-react";

export default function DocumentStats() {
  const stats = [
    {
      title: "Total Documents",
      value: 24,
      icon: FileText,
      color: "#2563eb",
    },
    {
      title: "Rent Receipts",
      value: 12,
      icon: Receipt,
      color: "#22c55e",
    },
    {
      title: "Lease Agreements",
      value: 2,
      icon: FileSignature,
      color: "#f59e0b",
    },
    {
      title: "Storage Used",
      value: "180 MB",
      icon: HardDrive,
      color: "#8b5cf6",
    },
  ];

  return (
    <section className="document-stats">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (

          <div
            className="document-stat-card"
            key={stat.title}
          >

            <div className="document-stat-info">

              <small>{stat.title}</small>

              <h2>{stat.value}</h2>

            </div>

            <div
              className="document-stat-icon"
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