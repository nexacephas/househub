import "./RevenueChart.css";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function RevenueChart({
  data = [],
}) {

  return (
    <div className="revenue-chart-card">

      <div className="chart-header">

        <h2>
          Monthly Revenue
        </h2>

        <span>
          Last 12 Months
        </span>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <LineChart data={data}>

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip
            formatter={(value) =>
              `₦${Number(value).toLocaleString()}`
            }
          />

          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}