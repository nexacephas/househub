import "./WhyChooseAgent.css";

import {
  ShieldCheck,
  Users,
  Home,
  TrendingUp,
  BadgeDollarSign,
  Headset,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: "Verified Professionals",
    description:
      "Every HouseHub agent is thoroughly verified before joining our marketplace.",
  },
  {
    icon: <Users size={32} />,
    title: "Local Market Experts",
    description:
      "Work with experienced professionals who understand your local property market.",
  },
  {
    icon: <Home size={32} />,
    title: "Exclusive Listings",
    description:
      "Access premium and verified listings you won't easily find elsewhere.",
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Better Negotiation",
    description:
      "Experienced agents help you negotiate the best prices and secure better deals.",
  },
  {
    icon: <BadgeDollarSign size={32} />,
    title: "Transparent Pricing",
    description:
      "No hidden charges. Clear pricing and honest professional advice every step of the way.",
  },
  {
    icon: <Headset size={32} />,
    title: "End-to-End Support",
    description:
      "From your first viewing to handing over the keys, your agent stays with you.",
  },
];

export default function WhyChooseAgent() {
  return (
    <section className="why-agent">
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            WHY HOUSEHUB AGENTS
          </span>

          <h2>Why Choose a HouseHub Agent?</h2>

          <p>
            Buying, renting or selling property becomes easier when you work
            with verified professionals backed by HouseHub's trusted platform.
          </p>

        </div>

        <div className="why-grid">

          {features.map((item, index) => (
            <div
              className="why-card"
              key={index}
            >
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}