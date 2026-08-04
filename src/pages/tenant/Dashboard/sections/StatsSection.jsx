import { useEffect, useMemo, useState } from "react";
import {
  FiHome,
  FiCreditCard,
  FiTool,
  FiMessageSquare,
} from "react-icons/fi";

import StatsCard from "../../../../components/dashboard/StatsCard/StatsCard";
import StatePanel from "../../../../components/common/StatePanel";
import dashboardService from "../../../../services/dashboard.service";
import paymentService from "../../../../services/payment.service";
import maintenanceService from "../../../../services/maintenance.service";
import messageService from "../../../../services/message.service";

const iconMap = {
  home: FiHome,
  payment: FiCreditCard,
  tool: FiTool,
  message: FiMessageSquare,
};

export default function StatsSection() {
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadStats() {
      try {
        setLoading(true);
        setError("");

        const [dashboardRes, paymentRes, maintenanceRes, messageRes] = await Promise.all([
          dashboardService.getStats().catch(() => null),
          paymentService.getPayments().catch(() => null),
          maintenanceService.getRequests().catch(() => null),
          messageService.getConversations().catch(() => null),
        ]);

        if (!isMounted) return;

        const dashboardStats = dashboardRes?.data?.stats || {};
        const payments = paymentRes?.data?.payments || [];
        const requests = maintenanceRes?.data?.requests || maintenanceRes?.data?.maintenance || [];
        const conversations = messageRes?.data?.conversations || [];

        const nextStats = [
          {
            id: "properties",
            title: "Active Listings",
            value: dashboardStats.properties ?? "—",
            change: "+0%",
            color: "primary",
            icon: "home",
          },
          {
            id: "payments",
            title: "Payments",
            value: payments.length,
            change: "+0%",
            color: "success",
            icon: "payment",
          },
          {
            id: "maintenance",
            title: "Maintenance",
            value: requests.length,
            change: "+0%",
            color: "warning",
            icon: "tool",
          },
          {
            id: "messages",
            title: "Messages",
            value: conversations.length,
            change: "+0%",
            color: "info",
            icon: "message",
          },
        ];

        setStats(nextStats);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load dashboard stats.");
        setStats([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadStats();

    return () => {
      isMounted = false;
    };
  }, []);

  const renderedStats = useMemo(() => stats, [stats]);

  if (loading) {
    return <StatePanel status="loading" title="Loading overview" message="Preparing your tenant dashboard." />;
  }

  if (error) {
    return <StatePanel status="error" title="Unable to load overview" message={error} onRetry={() => window.location.reload()} />;
  }

  if (!renderedStats.length) {
    return <StatePanel status="empty" title="No overview data" message="There is no dashboard data available yet." />;
  }

  return (
    <div className="tenant-dashboard-stats-grid">
      {renderedStats.map((item) => {
        const Icon = iconMap[item.icon];

        return (
          <StatsCard
            key={item.id}
            title={item.title}
            value={item.value}
            change={item.change}
            color={item.color}
            icon={Icon}
          />
        );
      })}
    </div>
  );
}