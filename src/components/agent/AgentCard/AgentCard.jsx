import "./AgentCard.css";

import { Link } from "react-router-dom";

import {
  BadgeCheck,
  Building2,
  MapPin,
  Star,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function AgentCard({ agent }) {
  return (
    <article className="agent-card">
      <div className="agent-image">
        <img
          src={agent.image}
          alt={agent.name}
          loading="lazy"
        />

        {agent.verified && (
          <span className="verified">
            <BadgeCheck size={16} />
            Verified
          </span>
        )}
      </div>

      <div className="agent-body">
        <h3>{agent.name}</h3>

        <div className="company">
          <Building2 size={16} />
          <span>{agent.company}</span>
        </div>

        <div className="agent-meta">
          <span>
            <MapPin size={16} />
            {agent.location}
          </span>

          <span className="rating">
            <Star
              size={16}
              fill="currentColor"
              strokeWidth={1.8}
            />
            {agent.rating}
          </span>
        </div>

        <div className="stats">
          <div>
            <strong>{agent.listings}</strong>
            <small>Listings</small>
          </div>

          <div>
            <strong>{agent.experience}</strong>
            <small>Experience</small>
          </div>
        </div>

        <div className="agent-actions">
          <a
            href={`tel:${agent.phone}`}
            className="icon-btn"
            aria-label={`Call ${agent.name}`}
          >
            <Phone size={18} />
          </a>

          <a
            href={`mailto:${agent.email}`}
            className="icon-btn"
            aria-label={`Email ${agent.name}`}
          >
            <Mail size={18} />
          </a>

          <Link
            to={`/agents/${agent.id}`}
            className="profile-btn"
          >
            View Profile
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}