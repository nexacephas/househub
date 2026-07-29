import "./PaymentSummary.css";

import {
  Wallet,
  CalendarDays,
  AlertCircle,
  BadgeCheck,
} from "lucide-react";

export default function PaymentSummary() {
  const stats = [
    {
      title: "Total Rent Paid",
      value: "₦18,500,000",
      icon: Wallet,
      color: "#2563eb",
    },
    {
      title: "This Year",
      value: "₦9,000,000",
      icon: CalendarDays,
      color: "#10b981",
    },
    {
      title: "Outstanding",
      value: "₦0",
      icon: AlertCircle,
      color: "#f59e0b",
    },
    {
      title: "Payment Status",
      value: "Up to Date",
      icon: BadgeCheck,
      color: "#22c55e",
    },
  ];

  return (
    <section className="payment-summary">

      {stats.map((item) => {

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