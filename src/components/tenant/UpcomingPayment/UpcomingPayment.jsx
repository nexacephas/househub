import "./UpcomingPayment.css";

import {
  CalendarClock,
  Wallet,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function UpcomingPayment({ payments = [] }) {
  const payment = payments[0]
    ? {
        amount: `₦${Number(payments[0].amount || 0).toLocaleString()}`,
        dueDate: payments[0].dueDate
          ? new Date(payments[0].dueDate).toLocaleDateString()
          : "No due date set",
        daysLeft: payments[0].dueDate
          ? Math.max(0, Math.ceil((new Date(payments[0].dueDate) - new Date()) / (1000 * 60 * 60 * 24)))
          : 0,
        status: payments[0].status === "paid" || payments[0].status === "Paid" ? "Paid" : "Upcoming",
      }
    : {
        amount: "₦0",
        dueDate: "No payments yet",
        daysLeft: 0,
        status: "No payment",
      };

  return (
    <section className="upcoming-payment">

      <div className="upcoming-header">

        <div>

          <h2>Upcoming Rent</h2>

          <p>Your next scheduled payment</p>

        </div>

        <span className="status-badge">
          {payment.status}
        </span>

      </div>

      <div className="payment-details">

        <div className="payment-row">

          <Wallet size={20} />

          <div>

            <small>Amount</small>

            <h3>{payment.amount}</h3>

          </div>

        </div>

        <div className="payment-row">

          <CalendarClock size={20} />

          <div>

            <small>Due Date</small>

            <h3>{payment.dueDate}</h3>

          </div>

        </div>

        <div className="payment-row">

          <Clock3 size={20} />

          <div>

            <small>Time Remaining</small>

            <h3>{payment.daysLeft} Days Left</h3>

          </div>

        </div>

      </div>

      <button className="pay-now-btn">

        Pay Rent Now

        <ArrowRight size={18} />

      </button>

    </section>
  );
}