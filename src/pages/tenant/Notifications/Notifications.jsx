import { useEffect, useState } from "react";
import "./Notifications.css";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import StatePanel from "../../../components/common/StatePanel";
import api from "../../../services/api";

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadNotifications() {
      try {
        setLoading(true);
        setError("");
        const { data } = await api.get("/notifications");

        if (!isMounted) return;
        setNotifications(data.notifications || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load notifications.");
        setNotifications([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadNotifications();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <DashboardLayout role="tenant">
      <div className="tenant-notifications-page">
        <div className="page-header">
          <div>
            <h1>Notifications</h1>
            <p>Stay up to date with your account activity.</p>
          </div>
        </div>

        {loading ? (
          <StatePanel status="loading" title="Loading notifications" message="Checking for new activity." />
        ) : error ? (
          <StatePanel status="error" title="Unable to load notifications" message={error} onRetry={() => window.location.reload()} />
        ) : notifications.length === 0 ? (
          <StatePanel status="empty" title="No notifications yet" message="You are all caught up." />
        ) : (
          <div className="notification-list">
            {notifications.map((item) => (
              <div className="notification-item" key={item._id}>
                <h3>{item.title}</h3>
                <p>{item.body || item.message}</p>
                <span>{new Date(item.createdAt).toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
