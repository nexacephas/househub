import "./HowItWorks.css";

import {
  Search,
  MessagesSquare,
  House,
  KeyRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search Properties",
    text:
      "Browse thousands of verified properties using smart filters based on location, price, and property type.",
  },

  {
    number: "02",
    icon: MessagesSquare,
    title: "Connect with Agents",
    text:
      "Contact trusted agents or property owners directly through HouseHub.",
  },

  {
    number: "03",
    icon: House,
    title: "Schedule a Visit",
    text:
      "Book physical or virtual inspections before making your decision.",
  },

  {
    number: "04",
    icon: KeyRound,
    title: "Move Into Your New Home",
    text:
      "Complete your transaction securely and confidently through verified listings.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how">

      <div className="container">

        <span className="section-tag">
          HOW IT WORKS
        </span>

        <h2>
          Finding Your Dream Property Is Simple
        </h2>

        <p className="section-description">
          HouseHub simplifies the property journey from discovery to moving into your new home.
        </p>

        <div className="steps-grid">

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                className="step-card"
                key={step.number}
              >

                <span className="step-number">
                  {step.number}
                </span>

                <div className="step-icon">
                  <Icon size={34} />
                </div>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}