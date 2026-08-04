import { useEffect, useMemo, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import ChartCard from "../../../../components/dashboard/ChartCard/ChartCard";
import StatePanel from "../../../../components/common/StatePanel";
import paymentService from "../../../../services/payment.service";

export default function PaymentHistorySection() {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadPayments() {
      try {
        setLoading(true);
        setError("");
        const { data } = await paymentService.getPayments();

        if (!isMounted) return;

        const paymentRows = (data.payments || []).map((payment) => ({
          month: new Date(payment.createdAt).toLocaleString("en", { month: "short" }),
          amount: payment.amount || 0,
        }));

        setPayments(paymentRows);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load payment history.");
        setPayments([]);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadPayments();

    return () => {
      isMounted = false;
    };
  }, []);

  const formatCurrency = (value) => `₦${(value / 1000).toFixed(0)}K`;
  const chartData = useMemo(() => payments.slice(-6), [payments]);

  if (loading) {
    return <StatePanel status="loading" title="Loading payment history" message="Fetching your recent rent payments." />;
  }

  if (error) {
    return <StatePanel status="error" title="Unable to load payment history" message={error} onRetry={() => window.location.reload()} />;
  }

  if (!chartData.length) {
    return <StatePanel status="empty" title="No payment history yet" message="Your payment history will appear here once a payment is recorded." />;
  }

  return (
    <ChartCard title="Payment History" subtitle="Recent payments">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis tickFormatter={formatCurrency} axisLine={false} tickLine={false} />
          <Tooltip formatter={(value) => [`₦${Number(value).toLocaleString()}`, "Rent Paid"]} />
          <Line type="monotone" dataKey="amount" stroke="var(--primary)" strokeWidth={3} dot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}