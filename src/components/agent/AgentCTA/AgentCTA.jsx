import "./AgentCTA.css";

import { Link } from "react-router-dom";

import {
  BadgeCheck,
  TrendingUp,
  Users,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const benefits = [
  "Verified HouseHub Badge",
  "Premium Property Exposure",
  "Qualified Buyer & Tenant Leads",
  "Professional Analytics Dashboard",
];

export default function AgentCTA() {
  return (
    <section className="agent-cta">
      <div className="container">

        <div className="agent-cta-card">

          <div className="agent-cta-content">

            <span className="section-tag">
              JOIN HOUSEHUB
            </span>

            <h2>
              Become a Verified
              <span> HouseHub Agent</span>
            </h2>

            <p>
              Grow your real estate business with Nigeria's trusted
              property marketplace. Reach more buyers, renters and
              property investors while building credibility through
              our verification program.
            </p>

            <div className="benefits-grid">

              {benefits.map((benefit, index) => (
                <div
                  className="benefit-item"
                  key={index}
                >
                  <BadgeCheck size={18} />

                  <span>{benefit}</span>
                </div>
              ))}

            </div>

            <div className="cta-buttons">

              <Link
                to="/become-agent"
                className="apply-btn"
              >
                Apply Now

                <ArrowRight size={18} />
              </Link>

              <Link
                to="/contact"
                className="contact-btn"
              >
                Contact Sales
              </Link>

            </div>

          </div>

          <div className="agent-cta-stats">

            <div className="mini-card">

              <TrendingUp size={32} />

              <h3>300%</h3>

              <p>Average Lead Growth</p>

            </div>

            <div className="mini-card">

              <Users size={32} />

              <h3>3200+</h3>

              <p>Verified Agents</p>

            </div>

            <div className="mini-card">

              <BarChart3 size={32} />

              <h3>₦15B+</h3>

              <p>Transactions Closed</p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}