import "./PropertyStats.css";

import {
  Building2,
  CheckCircle,
  Home,
  Wallet,
} from "lucide-react";

export default function PropertyStats({ properties }) {
  const total = properties.length;

  const available = properties.filter(
    (p) => p.status === "available"
  ).length;

  const rented = properties.filter(
    (p) => p.status === "rented"
  ).length;

  const totalValue = properties.reduce(
    (sum, p) => sum + p.price,
    0
  );

  const cards = [
    {
      title: "Total Properties",
      value: total,
      icon: <Building2 size={28} />,
    },
    {
      title: "Available",
      value: available,
      icon: <CheckCircle size={28} />,
    },
    {
      title: "Rented",
      value: rented,
      icon: <Home size={28} />,
    },
    {
      title: "Portfolio Value",
      value: `₦${totalValue.toLocaleString()}`,
      icon: <Wallet size={28} />,
    },
  ];

  return (
    <section className="property-stats">
      {cards.map((card) => (
        <div className="stats-card" key={card.title}>
          <div className="stats-icon">
            {card.icon}
          </div>

          <div>
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </section>
  );
}