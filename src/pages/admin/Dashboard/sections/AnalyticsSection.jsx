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
import { analytics } from "../data/analytics";

export default function AnalyticsSection() {
  return (
    <ChartCard
      title="Platform Growth"
      subtitle="New Users Per Month"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={analytics}>
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
            axisLine={false}
            tickLine={false}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="users"
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}