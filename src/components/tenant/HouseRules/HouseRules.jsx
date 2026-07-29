import "./HouseRules.css";

import {
  Ban,
  Dog,
  Users,
  Moon,
  Trash2,
  Wrench,
  Car,
} from "lucide-react";

export default function HouseRules() {
  const rules = [
    {
      icon: Ban,
      title: "No Smoking",
      description:
        "Smoking is strictly prohibited inside the property.",
    },
    {
      icon: Dog,
      title: "Pets",
      description:
        "Pets are not allowed unless approved by the landlord.",
    },
    {
      icon: Moon,
      title: "Quiet Hours",
      description:
        "Maintain low noise levels between 10:00 PM and 6:00 AM.",
    },
    {
      icon: Users,
      title: "Visitors",
      description:
        "Guests are welcome but overnight stays require prior notice.",
    },
    {
      icon: Trash2,
      title: "Waste Disposal",
      description:
        "Dispose of waste only in designated collection areas.",
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description:
        "Report damages immediately through the maintenance portal.",
    },
    {
      icon: Car,
      title: "Parking",
      description:
        "Only assigned parking spaces may be used.",
    },
  ];

  return (
    <section className="house-rules">

      <div className="rules-header">

        <h2>House Rules</h2>

        <span>Guidelines for Residents</span>

      </div>

      <div className="rules-list">

        {rules.map((rule) => {

          const Icon = rule.icon;

          return (

            <div
              key={rule.title}
              className="rule-card"
            >

              <div className="rule-icon">

                <Icon size={24} />

              </div>

              <div className="rule-content">

                <h4>{rule.title}</h4>

                <p>{rule.description}</p>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}