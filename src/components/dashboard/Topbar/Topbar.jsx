import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../../../context/AuthContext";

import "./Topbar.css";

export default function Topbar({
  onMenuClick,
}) {
  const { user } = useAuth();
  const fullName = `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || "User";
  const initials = `${user?.firstName?.[0] || ""}${user?.lastName?.[0] || ""}`.toUpperCase() || "U";

  return (
    <header className="topbar">

      {/* LEFT */}

      <div className="topbar-left">

        <button
          className="menu-btn"
          onClick={onMenuClick}
        >
          <Menu size={24} />
        </button>

        <div className="search-box">
          <Search size={20} />

          <input
            type="text"
            placeholder="Search properties, users..."
          />
        </div>

      </div>

      {/* RIGHT */}

      <div className="topbar-actions">

        <button className="notification-btn">

          <Bell size={22} />

          <span></span>

        </button>

        <div className="profile-menu">
          {user?.avatar ? (
            <img src={user.avatar} alt={fullName} className="profile-avatar" />
          ) : (
            <div className="profile-avatar">{initials}</div>
          )}

          <div className="profile-info">
            <h4>{fullName}</h4>
            <div className="verified">
              <ShieldCheck size={14} />
              {user?.isVerified ? "Verified" : "Pending"}
            </div>
          </div>

          <ChevronDown size={18} />
        </div>

      </div>

    </header>
  );
}