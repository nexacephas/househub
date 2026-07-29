import "./UpcomingPayment.css";

import {
  CalendarClock,
  Wallet,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function UpcomingPayment() {
  const payment = {
    amount: "₦750,000",
    dueDate: "August 15, 2026",
    daysLeft: 17,
    status: "Upcoming",
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