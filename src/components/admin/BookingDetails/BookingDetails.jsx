import "./BookingDetails.css";

import {
  Home,
  User,
  Calendar,
  CreditCard,
  BadgeCheck,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function BookingDetails({
  booking,
}) {
  if (!booking) return null;

  return (
    <div className="booking-details">

      <div className="details-header">

        <h2>Booking Details</h2>

      </div>

      <div className="details-section">

        <h3>

          <User size={18} />

          Tenant

        </h3>

        <p>

          <strong>Name:</strong>{" "}
          {booking.tenant?.fullName ||
            booking.tenant?.name ||
            "-"}

        </p>

        <p>

          <Mail size={15} />

          {booking.tenant?.email || "-"}

        </p>

        <p>

          <Phone size={15} />

          {booking.tenant?.phone || "-"}

        </p>

      </div>

      <div className="details-section">

        <h3>

          <Home size={18} />

          Property

        </h3>

        <p>

          <strong>Title:</strong>{" "}
          {booking.property?.title || "-"}

        </p>

        <p>

          <MapPin size={15} />

          {booking.property?.address ||
            booking.property?.city ||
            "-"}

        </p>

      </div>

      <div className="details-section">

        <h3>

          <Calendar size={18} />

          Booking Period

        </h3>

        <p>

          <strong>Check In:</strong>{" "}

          {booking.checkIn
            ? new Date(
                booking.checkIn
              ).toLocaleDateString()
            : "-"}

        </p>

        <p>

          <strong>Check Out:</strong>{" "}

          {booking.checkOut
            ? new Date(
                booking.checkOut
              ).toLocaleDateString()
            : "-"}

        </p>

      </div>

      <div className="details-section">

        <h3>

          <CreditCard size={18} />

          Payment

        </h3>

        <p>

          <strong>Total:</strong>{" "}

          ₦
          {(
            booking.totalAmount || 0
          ).toLocaleString()}

        </p>

        <p>

          <strong>Payment Status:</strong>{" "}

          {booking.paymentStatus}

        </p>

      </div>

      <div className="details-section">

        <h3>

          <BadgeCheck size={18} />

          Booking Status

        </h3>

        <span
          className={`booking-status ${(
            booking.status || ""
          )
            .replace(/\s+/g, "-")
            .toLowerCase()}`}
        >
          {booking.status}
        </span>

      </div>

      <div className="details-section">

        <h3>Notes</h3>

        <p>

          {booking.notes ||
            "No notes available."}

        </p>

      </div>

    </div>
  );
}