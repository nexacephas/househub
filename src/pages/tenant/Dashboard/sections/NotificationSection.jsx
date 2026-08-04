import { useEffect, useState } from "react";
import NotificationCard from "../../../../components/dashboard/NotificationCard/NotificationCard";
import StatePanel from "../../../../components/common/StatePanel";
import api from "../../../../services/api";

export default function NotificationSection() {
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
        setNotifications((data.notifications || []).map((notification) => ({
          id: notification._id,
          type: notification.type || "info",
          title: notification.title || "Notification",
          message: notification.body || notification.message || "You have a new update.",
          time: new Date(notification.createdAt).toLocaleDateString(),
        })));
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

  if (loading) {
    return <StatePanel status="loading" title="Loading notifications" message="Checking for updates." />;
  }

  if (error) {
    return <StatePanel status="error" title="Unable to load notifications" message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <NotificationCard title="Notifications" notifications={notifications} />
  );
}