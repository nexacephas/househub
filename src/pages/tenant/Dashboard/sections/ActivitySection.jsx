import { useEffect, useMemo, useState } from "react";
import {
  FiHome,
  FiCreditCard,
  FiTool,
} from "react-icons/fi";

import RecentActivity from "../../../../components/dashboard/RecentActivity/RecentActivity";
import StatePanel from "../../../../components/common/StatePanel";
import maintenanceService from "../../../../services/maintenance.service";
import paymentService from "../../../../services/payment.service";

const iconMap = {
  home: FiHome,
  payment: FiCreditCard,
  tool: FiTool,
};

export default function ActivitySection() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadActivities() {
      try {
        setLoading(true);
        setError("");
        const [maintenanceRes, paymentRes] = await Promise.all([
          maintenanceService.getRequests().catch(() => null),
          paymentService.getPayments().catch(() => null),
        ]);

        if (!isMounted) return;

        const requests = maintenanceRes?.data?.requests || maintenanceRes?.data?.maintenance || [];
        const payments = paymentRes?.data?.payments || [];

        const nextActivities = [
          ...requests.slice(0, 2).map((request) => ({
            id: `request-${request._id}`,
            title: request.title || "Maintenance request",
            description: `Status: ${request.status || "open"}`,
            time: new Date(request.createdAt).toLocaleDateString(),
            icon: "tool",
          })),
          ...payments.slice(0, 2).map((payment) => ({
            id: `payment-${payment._id}`,
            title: "Payment recorded",
            description: `${payment.status || "pending"} • ₦${Number(payment.amount || 0).toLocaleString()}`,
            time: new Date(payment.createdAt).toLocaleDateString(),
            icon: "payment",
          })),
        ].slice(0, 4);

        setActivities(nextActivities);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load activity feed.");
        setActivities([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadActivities();

    return () => {
      isMounted = false;
    };
  }, []);

  const formattedActivities = useMemo(() => activities.map((activity) => ({
    ...activity,
    icon: iconMap[activity.icon],
  })), [activities]);

  if (loading) {
    return <StatePanel status="loading" title="Loading activity feed" message="Checking your latest updates." />;
  }

  if (error) {
    return <StatePanel status="error" title="Unable to load activity" message={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <RecentActivity title="Recent Activity" activities={formattedActivities} />
  );
}