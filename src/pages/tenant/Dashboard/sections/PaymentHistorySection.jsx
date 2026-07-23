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
import { payments } from "../data/payment";

export default function PaymentHistorySection() {
  const formatCurrency = (value) => `₦${(value / 1000).toFixed(0)}K`;

  return (
    <ChartCard
      title="Payment History"
      subtitle="Last 6 Months"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={payments}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--gray-200)"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickFormatter={formatCurrency}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value) => [
              `₦${Number(value).toLocaleString()}`,
              "Rent Paid",
            ]}
          />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}