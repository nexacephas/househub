import "./VerificationStats.css";

import {
  ShieldCheck,
  Clock3,
  CheckCircle2,
  XCircle,
} from "lucide-react";

export default function VerificationStats() {
  const stats = [
    {
      title: "Total Requests",
      value: "1,248",
      icon: <ShieldCheck size={22} />,
      color: "blue",
    },
    {
      title: "Pending Review",
      value: "74",
      icon: <Clock3 size={22} />,
      color: "orange",
    },
    {
      title: "Approved",
      value: "1,097",
      icon: <CheckCircle2 size={22} />,
      color: "green",
    },
    {
      title: "Rejected",
      value: "77",
      icon: <XCircle size={22} />,
      color: "red",
    },
  ];

  return (
    <div className="verification-stats">

      {stats.map((stat, index) => (

        <div
          key={index}
          className="verification-stat-card"
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