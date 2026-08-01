import "./AgentDetails.css";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Home,
  TrendingUp,
  BadgeCheck,
} from "lucide-react";

export default function AgentDetails({ agent }) {
  if (!agent) {
    return (
      <div className="agent-details-empty">
        Select an agent to view details.
      </div>
    );
  }

  return (
    <div className="agent-details">

      <div className="agent-header">

        <img
          src={
            agent.avatar ||
            "https://placehold.co/120x120"
          }
          alt={agent.fullName}
        />

        <div>

          <h2>{agent.fullName}</h2>

          <span className={`status ${agent.status}`}>
            {agent.status}
          </span>

        </div>

      </div>

      <div className="details-grid">

        <div className="detail-item">
          <Mail size={18} />
          <div>
            <label>Email</label>
            <span>{agent.email}</span>
          </div>
        </div>

        <div className="detail-item">
          <Phone size={18} />
          <div>
            <label>Phone</label>
            <span>{agent.phone || "-"}</span>
          </div>
        </div>

        <div className="detail-item">
          <MapPin size={18} />
          <div>
            <label>Location</label>
            <span>{agent.location || "-"}</span>
          </div>
        </div>

        <div className="detail-item">
          <Calendar size={18} />
          <div>
            <label>Joined</label>
            <span>
              {agent.createdAt
                ? new Date(
                    agent.createdAt
                  ).toLocaleDateString()
                : "-"}
            </span>
          </div>
        </div>

        <div className="detail-item">
          <Home size={18} />
          <div>
            <label>Properties Listed</label>
            <span>
              {agent.propertyCount || 0}
            </span>
          </div>
        </div>

        <div className="detail-item">
          <BadgeCheck size={18} />
          <div>
            <label>Verification</label>
            <span>
              {agent.verificationStatus}
            </span>
          </div>
        </div>

      </div>

      <div className="agent-performance">

        <h3>Performance</h3>

        <div className="performance-grid">

          <div className="performance-card">
            <TrendingUp size={22} />
            <strong>
              ₦
              {(agent.totalSales || 0).toLocaleString()}
            </strong>
            <span>Total Sales</span>
          </div>

          <div className="performance-card">
            <Home size={22} />
            <strong>
              {agent.propertyCount || 0}
            </strong>
            <span>Properties</span>
          </div>

          <div className="performance-card">
            <BadgeCheck size={22} />
            <strong>
              {agent.completedDeals || 0}
            </strong>
            <span>Completed Deals</span>
          </div>

        </div>

      </div>

      {agent.bio && (

        <div className="agent-bio">

          <h3>Biography</h3>

          <p>{agent.bio}</p>

        </div>

      )}

    </div>
  );
}