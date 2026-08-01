import "./PaymentStats.css";

import {
  Wallet,
  CircleCheckBig,
  Clock3,
  RotateCcw,
} from "lucide-react";

export default function PaymentStats({
  stats = {},
}) {
  const cards = [
    {
      title: "Total Revenue",
      value: `₦${(
        stats.totalRevenue || 0
      ).toLocaleString()}`,
      icon: <Wallet size={22} />,
      color: "green",
    },
    {
      title: "Successful",
      value: stats.successful || 0,
      icon: <CircleCheckBig size={22} />,
      color: "blue",
    },
    {
      title: "Pending",
      value: stats.pending || 0,
      icon: <Clock3 size={22} />,
      color: "orange",
    },
    {
      title: "Refunded",
      value: stats.refunded || 0,
      icon: <RotateCcw size={22} />,
      color: "red",
    },
  ];

  return (
    <div className="payment-stats">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`payment-stat-card ${card.color}`}
        >

          <div className="stat-icon">
            {card.icon}
          </div>

          <div>

            <h4>{card.title}</h4>

            <h2>{card.value}</h2>

          </div>

        </div>

      ))}

    </div>
  );
}