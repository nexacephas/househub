import "./BookingChart.css";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function BookingChart({
  data = [],
}) {
  return (
    <div className="booking-chart-card">

      <div className="chart-header">

        <h2>
          Monthly Bookings
        </h2>

        <span>
          Last 12 Months
        </span>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <BarChart
          data={data}
        >

          <CartesianGrid
            strokeDasharray="3 3"
          />

          <XAxis
            dataKey="month"
          />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="bookings"
            fill="#10b981"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}