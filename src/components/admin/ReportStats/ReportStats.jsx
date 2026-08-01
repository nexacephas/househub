import "./ReportStats.css";

import {
  FileText,
  DollarSign,
  CalendarCheck,
  Users,
  Clock3,
} from "lucide-react";

export default function ReportStats({
  stats = {
    totalReports: 0,
    revenueReports: 0,
    bookingReports: 0,
    userReports: 0,
    scheduledReports: 0,
  },
}) {
  const cards = [
    {
      title: "Total Reports",
      value: stats.totalReports,
      icon: FileText,
    },
    {
      title: "Revenue Reports",
      value: stats.revenueReports,
      icon: DollarSign,
    },
    {
      title: "Booking Reports",
      value: stats.bookingReports,
      icon: CalendarCheck,
    },
    {
      title: "User Reports",
      value: stats.userReports,
      icon: Users,
    },
    {
      title: "Scheduled",
      value: stats.scheduledReports,
      icon: Clock3,
    },
  ];

  return (
    <div className="report-stats">

      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            className="report-stat-card"
            key={card.title}
          >
            <div className="report-stat-icon">
              <Icon size={26} />
            </div>

            <div className="report-stat-info">
              <h3>{card.value}</h3>
              <p>{card.title}</p>
            </div>
          </div>
        );
      })}

    </div>
  );
}