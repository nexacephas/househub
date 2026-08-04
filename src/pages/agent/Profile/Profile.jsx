import { Mail, Phone, ShieldCheck, UserRound } from "lucide-react";
import { useAuth } from "../../../context/AuthContext";
import "./Profile.css";

export default function Profile() {
  const { user } = useAuth();

  const displayName =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    "Agent";

  return (
    <main className="agent-profile-page">
      <section className="agent-profile-hero">
        <div className="agent-profile-avatar">
          {user?.avatar ? (
            <img src={user.avatar} alt={displayName} />
          ) : (
            <UserRound size={42} />
          )}
        </div>

        <div>
          <p>Agent Profile</p>
          <h1>{displayName}</h1>
          <span>
            <ShieldCheck size={16} />
            {user?.isVerified ? "Verified agent" : "Verification pending"}
          </span>
        </div>
      </section>

      <section className="agent-profile-grid">
        <article className="agent-profile-panel">
          <h2>Contact Information</h2>

          <div className="agent-profile-row">
            <Mail size={18} />
            <span>{user?.email || "No email added"}</span>
          </div>

          <div className="agent-profile-row">
            <Phone size={18} />
            <span>{user?.phone || "No phone number added"}</span>
          </div>
        </article>

        <article className="agent-profile-panel">
          <h2>Account Status</h2>

          <div className="agent-profile-status">
            <span>Role</span>
            <strong>{user?.role || "agent"}</strong>
          </div>

          <div className="agent-profile-status">
            <span>Status</span>
            <strong>{user?.isActive === false ? "Inactive" : "Active"}</strong>
          </div>
        </article>
      </section>
    </main>
  );
}
