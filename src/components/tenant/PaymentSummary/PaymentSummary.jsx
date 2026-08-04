import "./PaymentSummary.css";

import {
  Wallet,
  CalendarDays,
  AlertCircle,
  BadgeCheck,
} from "lucide-react";

export default function PaymentSummary({ stats = {} }) {
  const summaryCards = [
    {
      title: "Total Rent Paid",
      value: `₦${Number(stats.total || 0).toLocaleString()}`,
      icon: Wallet,
      color: "#2563eb",
    },
    {
      title: "Payments Recorded",
      value: Number(stats.paid || 0),
      icon: CalendarDays,
      color: "#10b981",
    },
    {
      title: "Outstanding",
      value: Number(stats.outstanding || 0),
      icon: AlertCircle,
      color: "#f59e0b",
    },
    {
      title: "Payment Status",
      value: Number(stats.outstanding || 0) === 0 ? "Up to Date" : "Needs Attention",
      icon: BadgeCheck,
      color: "#22c55e",
    },
  ];

  return (
    <section className="payment-summary">

      {summaryCards.map((item) => {

        const Icon = item.icon;

        return (

          <div
            key={item.title}
            className="summary-card"
          >

            <div className="summary-info">

              <small>{item.title}</small>

              <h2>{item.value}</h2>

            </div>

            <div
              className="summary-icon"
              style={{
                background: `${item.color}15`,
                color: item.color,
              }}
            >

              <Icon size={30} />

            </div>

          </div>

        );

      })}

    </section>
  );
}