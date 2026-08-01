import "./LogStats.css";
import {
  FileText,
  AlertTriangle,
  ShieldAlert,
  Activity,
} from "lucide-react";

export default function LogStats() {
  const stats = [
    {
      title: "Total Logs",
      value: "18,452",
      icon: <FileText size={22} />,
      color: "blue",
    },
    {
      title: "Errors",
      value: "126",
      icon: <AlertTriangle size={22} />,
      color: "red",
    },
    {
      title: "Warnings",
      value: "412",
      icon: <ShieldAlert size={22} />,
      color: "orange",
    },
    {
      title: "Today",
      value: "1,294",
      icon: <Activity size={22} />,
      color: "green",
    },
  ];

  return (
    <div className="log-stats">
      {stats.map((stat, index) => (
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