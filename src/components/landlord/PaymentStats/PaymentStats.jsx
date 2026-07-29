import "./PaymentStats.css";

import {
  DollarSign,
  TrendingUp,
  AlertCircle,
  Wallet,
} from "lucide-react";

function formatCurrency(value = 0) {
  return `₦${Number(value).toLocaleString()}`;
}

export default function PaymentStats({
  stats = {},
  loading = false,
}) {
  const cards = [
    {
      title: "Total Revenue",
      value: formatCurrency(stats.totalRevenue),
      icon: DollarSign,
      color: "green",
    },
    {
      title: "This Month",
      value: formatCurrency(stats.monthRevenue),
      icon: TrendingUp,
      color: "blue",
    },
    {
      title: "Outstanding",
      value: formatCurrency(stats.outstanding),
      icon: AlertCircle,
      color: "orange",
    },
    {
      title: "Collection Rate",
      value: `${stats.collectionRate ?? 0}%`,
      icon: Wallet,
      color: "purple",
    },
  ];

  return (
    <div className="payment-stats">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="payment-card"
          >
            <div className="payment-info">
              <h4>{card.title}</h4>

              <h2>
                {loading ? "..." : card.value}
              </h2>
            </div>

            <div
              className={`payment-icon ${card.color}`}
            >
              <Icon size={30} />
            </div>
          </div>
        );
      })}
    </div>
  );
}