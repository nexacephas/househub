import "./BookingStats.css";

import {
  CalendarCheck,
  Clock3,
  BadgeCheck,
  XCircle,
  Home,
} from "lucide-react";

export default function BookingStats({
  stats = {},
}) {
  return (
    <div className="booking-stats">

      <div className="booking-stat-card">

        <div className="stat-icon blue">
          <CalendarCheck size={24} />
        </div>

        <div>

          <h3>
            {stats.totalBookings || 0}
          </h3>

          <p>Total Bookings</p>

        </div>

      </div>

      <div className="booking-stat-card">

        <div className="stat-icon orange">
          <Clock3 size={24} />
        </div>

        <div>

          <h3>
            {stats.pendingBookings || 0}
          </h3>

          <p>Pending</p>

        </div>

      </div>

      <div className="booking-stat-card">

        <div className="stat-icon green">
          <BadgeCheck size={24} />
        </div>

        <div>

          <h3>
            {stats.confirmedBookings || 0}
          </h3>

          <p>Confirmed</p>

        </div>

      </div>

      <div className="booking-stat-card">

        <div className="stat-icon red">
          <XCircle size={24} />
        </div>

        <div>

          <h3>
            {stats.cancelledBookings || 0}
          </h3>

          <p>Cancelled</p>

        </div>

      </div>

      <div className="booking-stat-card">

        <div className="stat-icon purple">
          <Home size={24} />
        </div>

        <div>

          <h3>
            {stats.completedBookings || 0}
          </h3>

          <p>Completed</p>

        </div>

      </div>

    </div>
  );
}