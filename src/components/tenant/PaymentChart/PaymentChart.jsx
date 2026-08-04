import "./PaymentChart.css";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function PaymentChart({ payments = [] }) {
  const paymentData = payments.slice(-6).map((payment) => ({
    month: new Date(payment.createdAt).toLocaleString("en", { month: "short" }),
    amount: Number(payment.amount || 0),
  }));
  return (
    <section className="payment-chart">

      <div className="chart-header">

        <div>

          <h2>Payment History</h2>

          <p>
            Monthly rent payments throughout the year
          </p>

        </div>

      </div>

      <div className="chart-wrapper">

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <AreaChart data={paymentData}>

            <defs>

              <linearGradient
                id="paymentGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >

                <stop
                  offset="0%"
                  stopColor="#2563eb"
                  stopOpacity={0.4}
                />

                <stop
                  offset="100%"
                  stopColor="#2563eb"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip
              formatter={(value) =>
                `₦${Number(value).toLocaleString()}`
              }
            />

            <Area
              type="monotone"
              dataKey="amount"
              stroke="#2563eb"
              strokeWidth={3}
              fill="url(#paymentGradient)"
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </section>
  );
}