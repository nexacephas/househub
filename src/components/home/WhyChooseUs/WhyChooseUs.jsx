import "./WhyChooseUs.css";

import { Link } from "react-router-dom";

import {
  ShieldCheck,
  Search,
  BadgeCheck,
  Lock,
  ArrowRight,
} from "lucide-react";

import whyImage from  "../../../assets/images/hero/hero5.jpg";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Properties",
    description:
      "Every listing is reviewed and verified to help reduce fraud and provide peace of mind.",
  },

  {
    icon: BadgeCheck,
    title: "Trusted Agents",
    description:
      "Work with verified agents and landlords you can confidently trust.",
  },

  {
    icon: Search,
    title: "Smart Property Search",
    description:
      "Advanced filters help you find the perfect property faster.",
  },

  {
    icon: Lock,
    title: "Secure Transactions",
    description:
      "A transparent platform designed to make property transactions safer.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why">

      <div className="container why-container">

        <div className="why-image">

          <img
            src={whyImage}
            alt="HouseHub"
          />

        </div>

        <div className="why-content">

          <span className="section-tag">
            WHY HOUSEHUB
          </span>

          <h2>
            The Smarter Way to Find Your Next Property
          </h2>

          <p>
            HouseHub connects buyers, renters, landlords, and
            agents through a secure and transparent property
            marketplace built for Nigeria.
          </p>

          <div className="why-features">

            {features.map((feature, index) => {

              const Icon = feature.icon;

              return (
                <div
                  className="why-card"
                  key={index}
                >
                  <div className="why-icon">
                    <Icon size={28} />
                  </div>

                  <div>

                    <h3>{feature.title}</h3>

                    <p>{feature.description}</p>

                  </div>

                </div>
              );
            })}

          </div>

          <Link
            to="/about"
            className="why-btn"
          >
            Learn More

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}