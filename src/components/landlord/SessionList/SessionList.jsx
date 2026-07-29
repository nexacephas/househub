import "./SessionList.css";

import { useState } from "react";
import {
  Monitor,
  Smartphone,
  Tablet,
  MapPin,
  Clock,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";

const initialSessions = [
  {
    id: 1,
    device: "Windows PC",
    browser: "Chrome 138",
    location: "Lagos, Nigeria",
    ip: "102.xxx.xxx.xxx",
    lastActive: "Just now",
    current: true,
    type: "desktop",
  },
  {
    id: 2,
    device: "iPhone 15",
    browser: "Safari",
    location: "Abuja, Nigeria",
    ip: "105.xxx.xxx.xxx",
    lastActive: "2 hours ago",
    current: false,
    type: "mobile",
  },
  {
    id: 3,
    device: "iPad Air",
    browser: "Safari",
    location: "Port Harcourt",
    ip: "197.xxx.xxx.xxx",
    lastActive: "Yesterday",
    current: false,
    type: "tablet",
  },
];

export default function SessionList() {
  const [sessions, setSessions] =
    useState(initialSessions);

  function removeSession(id) {
    setSessions((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Session revoked.");
  }

  function logoutAll() {
    setSessions([]);

    toast.success(
      "Logged out from every device."
    );
  }

  function DeviceIcon(type) {
    switch (type) {
      case "mobile":
        return <Smartphone size={28} />;

      case "tablet":
        return <Tablet size={28} />;

      default:
        return <Monitor size={28} />;
    }
  }

  return (
    <div className="session-list">

      <div className="session-header">

        <div>

          <h2>Active Sessions</h2>

          <p>
            Manage devices currently logged
            into your HouseHub account.
          </p>

        </div>

        <button
          className="logout-all"
          onClick={logoutAll}
        >
          Logout All Devices
        </button>

      </div>

      <div className="sessions">

        {sessions.map((session) => (

          <div
            key={session.id}
            className="session-card"
          >

            <div className="session-icon">
              {DeviceIcon(session.type)}
            </div>

            <div className="session-info">

              <div className="session-title">

                <h3>
                  {session.device}
                </h3>

                {session.current && (
                  <span className="current">

                    <ShieldCheck size={16} />

                    Current Device

                  </span>
                )}

              </div>

              <p>
                {session.browser}
              </p>

              <div className="session-meta">

                <span>

                  <MapPin size={14} />

                  {session.location}

                </span>

                <span>

                  <Clock size={14} />

                  {session.lastActive}

                </span>

              </div>

              <small>
                IP: {session.ip}
              </small>

            </div>

            {!session.current && (
              <button
                className="remove-session"
                onClick={() =>
                  removeSession(session.id)
                }
              >
                <Trash2 size={18} />
              </button>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}