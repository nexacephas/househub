import "./LeaseCard.css";

import {
  CalendarDays,
  Wallet,
  Shield,
  Clock3,
} from "lucide-react";

export default function LeaseCard() {
  const totalDays = 365;
  const remainingDays = 148;

  const progress =
    ((totalDays - remainingDays) / totalDays) * 100;

  return (
    <section className="lease-card">

      <h2>Lease Information</h2>

      <div className="lease-status">

        <span className="active-badge">
          Active Lease
        </span>

      </div>

      <div className="lease-info">

        <div className="lease-item">

          <CalendarDays size={20} />

          <div>

            <small>Lease Start</small>

            <h4>01 Jan 2026</h4>

          </div>

        </div>

        <div className="lease-item">

          <CalendarDays size={20} />

          <div>

            <small>Lease Ends</small>

            <h4>31 Dec 2026</h4>

          </div>

        </div>

        <div className="lease-item">

          <Wallet size={20} />

          <div>

            <small>Monthly Rent</small>

            <h4>₦4,500,000</h4>

          </div>

        </div>

        <div className="lease-item">

          <Shield size={20} />

          <div>

            <small>Security Deposit</small>

            <h4>₦2,000,000</h4>

          </div>

        </div>

      </div>

      <div className="lease-progress">

        <div className="progress-header">

          <span>

            <Clock3 size={16} />

            {remainingDays} Days Remaining

          </span>

          <strong>
            {Math.round(progress)}%
          </strong>

        </div>

        <div className="progress-bar">

          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
}