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
import { performance } from "../data/performance";

export default function PerformanceSection() {
  return (
    <ChartCard
      title="Sales Performance"
      subtitle="Monthly Closed Deals"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={performance}>
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
            dataKey="sales"
            stroke="var(--primary)"
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}