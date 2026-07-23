import "./AgentStats.css";

import CountUp from "react-countup";

import {
  BadgeCheck,
  MapPinned,
  Smile,
  Landmark,
} from "lucide-react";

const stats = [
  {
    id: 1,
    icon: <BadgeCheck size={32} />,
    value: 3200,
    suffix: "+",
    title: "Verified Agents",
    description: "Professionally verified across Nigeria",
  },
  {
    id: 2,
    icon: <MapPinned size={32} />,
    value: 36,
    suffix: "",
    title: "States Covered",
    description: "Nationwide real estate coverage",
  },
  {
    id: 3,
    icon: <Smile size={32} />,
    value: 98,
    suffix: "%",
    title: "Client Satisfaction",
    description: "Trusted by thousands of clients",
  },
  {
    id: 4,
    icon: <Landmark size={32} />,
    value: 15,
    prefix: "₦",
    suffix: "B+",
    title: "Property Transactions",
    description: "Successful deals completed",
  },
];

export default function AgentStats() {
  console.log(CountUp);
  return (
    <section className="agent-stats">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            OUR IMPACT
          </span>

          <h2>Trusted Across Nigeria</h2>

          <p>
            HouseHub connects buyers, sellers, landlords, and
            trusted real estate professionals through a secure
            and transparent marketplace.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <div
              className="stat-card"
              key={stat.id}
            >
              <div className="stat-icon">
                {stat.icon}
              </div>

              <h3>
                {stat.prefix}

              {stat.value}

                {stat.suffix}
              </h3>

              <h4>{stat.title}</h4>

              <p>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}