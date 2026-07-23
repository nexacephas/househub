import "./AgentHero.css";

import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AgentHero() {
  return (
    <section className="agent-hero">

      <div className="agent-hero-overlay"></div>

      <div className="container">

        <div className="agent-hero-content">

          <span className="hero-tag">
            <ShieldCheck size={18} />
            VERIFIED PROFESSIONALS
          </span>

          <h1>
            Find Trusted
            <span> Real Estate Agents</span>
          </h1>

          <p>
            Connect with experienced and verified real estate
            professionals across Nigeria. Whether you're buying,
            renting or selling, HouseHub helps you work with
            trusted experts every step of the way.
          </p>

          <div className="hero-actions">

            <Link
              to="/verified-agents"
              className="hero-btn primary"
            >
              Find Agents
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/become-agent"
              className="hero-btn secondary"
            >
              Become an Agent
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}