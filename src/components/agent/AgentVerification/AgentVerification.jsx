import "./AgentVerification.css";

import {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Building2,
  Star,
  ArrowRight,
} from "lucide-react";

const verifications = [
  {
    icon: <BadgeCheck size={34} />,
    title: "Identity Verification",
    description:
      "Every agent completes identity verification using government-issued identification before joining HouseHub.",
  },
  {
    icon: <FileCheck size={34} />,
    title: "License & Documents",
    description:
      "Professional licenses, agency documents, and business credentials are reviewed by our team.",
  },
  {
    icon: <Building2 size={34} />,
    title: "Agency Validation",
    description:
      "Registered agencies undergo office and business verification for additional trust and transparency.",
  },
  {
    icon: <Star size={34} />,
    title: "Continuous Reviews",
    description:
      "Client ratings and transaction history help maintain quality and accountability.",
  },
];

export default function AgentVerification() {
  return (
    <section className="agent-verification">
      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            TRUST & SAFETY
          </span>

          <h2>How We Verify Every Agent</h2>

          <p>
            We take agent verification seriously. Every professional on
            HouseHub passes multiple verification stages before earning
            the Verified badge.
          </p>

        </div>

        <div className="verification-grid">

          {verifications.map((item, index) => (
            <div
              className="verification-card"
              key={index}
            >
              <div className="verification-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          ))}

        </div>

        <div className="verification-bottom">

          <div className="verification-banner">

            <ShieldCheck size={42} />

            <div>

              <h3>100% Verified Marketplace</h3>

              <p>
                Our verification system helps buyers, renters,
                landlords and investors transact with confidence.
              </p>

            </div>

            <button>
              Learn More

              <ArrowRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}