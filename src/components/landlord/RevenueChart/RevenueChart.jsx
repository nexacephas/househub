import "./RevenueChart.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", revenue: 1200000 },
  { month: "Feb", revenue: 1800000 },
  { month: "Mar", revenue: 1500000 },
  { month: "Apr", revenue: 2100000 },
  { month: "May", revenue: 2800000 },
  { month: "Jun", revenue: 2400000 },
  { month: "Jul", revenue: 3200000 },
  { month: "Aug", revenue: 3500000 },
  { month: "Sep", revenue: 3900000 },
  { month: "Oct", revenue: 4200000 },
  { month: "Nov", revenue: 4700000 },
  { month: "Dec", revenue: 5200000 },
];

function formatMoney(value) {
  return `₦${value.toLocaleString()}`;
}

export default function RevenueChart() {
  return (
    <div className="revenue-chart">

      <div className="chart-header">

        <div>

          <h2>Revenue Overview</h2>

          <p>
            Monthly rent collected across all
            properties.
          </p>

        </div>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <AreaChart data={data}>

          <defs>

            <linearGradient
              id="colorRevenue"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#4F46E5"
                stopOpacity={0.5}
              />

              <stop
                offset="95%"
                stopColor="#4F46E5"
                stopOpacity={0}
              />

            </linearGradient>

          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
          />

          <XAxis dataKey="month" />

          <YAxis
            tickFormatter={(value) =>
              `₦${value / 1000000}M`
            }
          />

          <Tooltip
            formatter={(value) =>
              formatMoney(value)
            }
          />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#4F46E5"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorRevenue)"
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
}