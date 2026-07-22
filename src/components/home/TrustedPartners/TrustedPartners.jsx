import "./TrustedPartners.css";

import {
  ShieldCheck,
  Building2,
  BadgeCheck,
  MapPinned,
  Users,
  Headphones,
} from "lucide-react";

const trustItems = [
  {
    icon: ShieldCheck,
    title: "Verified Listings",
  },
  {
    icon: BadgeCheck,
    title: "Verified Agents",
  },
  {
    icon: Building2,
    title: "Premium Properties",
  },
  {
    icon: MapPinned,
    title: "Nationwide Coverage",
  },
  {
    icon: Users,
    title: "Trusted Community",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
  },
];

export default function TrustedPartners() {
  return (
    <section className="trusted">
      <div className="container">

        <span className="section-tag">
          TRUSTED PLATFORM
        </span>

        <h2>
          Why Thousands Trust HouseHub
        </h2>

        <p className="section-description">
          Every property on HouseHub is designed to give buyers,
          renters and investors a secure and transparent experience.
        </p>

        <div className="trusted-grid">
          {trustItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="trusted-card"
                key={index}
              >
                <div className="trusted-icon">
                  <Icon size={34} />
                </div>

                <h3>{item.title}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}