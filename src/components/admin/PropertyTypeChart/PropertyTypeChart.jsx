import "./PropertyTypeChart.css";

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const COLORS = [
  "#2563eb",
  "#10b981",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

export default function PropertyTypeChart({
  data = [],
}) {
  return (
    <div className="property-type-card">

      <div className="chart-header">

        <h2>
          Property Types
        </h2>

        <span>
          Distribution
        </span>

      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            innerRadius={55}
            paddingAngle={3}
          >

            {data.map((entry, index) => (

              <Cell
                key={index}
                fill={
                  COLORS[index % COLORS.length]
                }
              />

            ))}

          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}