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
import { revenueData } from "../data/revenue";

export default function RevenueSection() {
  const formatCurrency = (value) => {
    if (value >= 1000000) {
      return `₦${(value / 1000000).toFixed(1)}M`;
    }

    if (value >= 1000) {
      return `₦${(value / 1000).toFixed(0)}K`;
    }

    return `₦${value}`;
  };

  return (
    <ChartCard
      title="Revenue Overview"
      subtitle="Monthly rental income"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={revenueData}>
          <CartesianGrid
            strokeDasharray="4 4"
            stroke="var(--gray-200)"
          />

          <XAxis
            dataKey="month"
            tick={{ fill: "var(--gray-500)" }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tickFormatter={formatCurrency}
            tick={{ fill: "var(--gray-500)" }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            formatter={(value) => [
              `₦${Number(value).toLocaleString()}`,
              "Revenue",
            ]}
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{
              r: 5,
              fill: "var(--primary)",
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}