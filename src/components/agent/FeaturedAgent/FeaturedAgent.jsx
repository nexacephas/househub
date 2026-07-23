import "./FeaturedAgent.css";

import { Link } from "react-router-dom";

import { ArrowRight } from "lucide-react";

import AgentGrid from "../AgentGrid";

import { featuredAgents } from "../../../data/agents";

export default function FeaturedAgents() {
  return (
    <section className="featured-agents">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            PROFESSIONAL AGENTS
          </span>

          <h2>Meet Our Verified Experts</h2>

          <p>
            Every HouseHub agent is carefully verified to ensure
            safe, transparent and professional property transactions.
          </p>
        </div>

        <AgentGrid agents={featuredAgents} />

        <div className="featured-agents-footer">
          <Link
            to="/verified-agents"
            className="view-all-agents"
          >
            View All Verified Agents

            <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}