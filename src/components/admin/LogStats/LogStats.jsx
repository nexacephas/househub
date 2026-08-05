import "./LogStats.css";
import {
  FileText,
  AlertTriangle,
  ShieldAlert,
  Activity,
} from "lucide-react";

export default function LogStats({ stats, loading }) {
  const defaultStats = {
    total: "—",
    errors: "—",
    warnings: "—",
    security: "—",
  };

  const values = stats || defaultStats;

  const statsConfig = [
    {
      title: "Total Logs",
      value: loading ? "Loading…" : values.total ?? "0",
      icon: <FileText size={22} />,
      color: "blue",
    },
    {
      title: "Errors",
      value: loading ? "Loading…" : values.errors ?? "0",
      icon: <AlertTriangle size={22} />,
      color: "red",
    },
    {
      title: "Warnings",
      value: loading ? "Loading…" : values.warnings ?? "0",
      icon: <ShieldAlert size={22} />,
      color: "orange",
    },
    {
      title: "Security",
      value: loading ? "Loading…" : values.security ?? "0",
      icon: <Activity size={22} />,
      color: "green",
    },
  ];

  return (
    <div className="log-stats">
      {statsConfig.map((stat, index) => (
        <div className="log-stat-card" key={index}>
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