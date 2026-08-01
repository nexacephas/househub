import "./DeleteBookingModal.css";

import { TriangleAlert } from "lucide-react";

export default function DeleteBookingModal({
  booking,
  onClose,
  onDelete,
}) {
  if (!booking) return null;

  return (
    <div className="delete-booking-overlay">

      <div className="delete-booking-modal">

        <div className="warning-icon">

          <TriangleAlert size={52} />

        </div>

        <h2>Delete Booking</h2>

        <p>

          Are you sure you want to permanently delete this booking?

        </p>

        <div className="booking-summary">

          <h4>

            {booking.property?.title ||
              "Unknown Property"}

          </h4>

          <span>

            Tenant:
            {" "}
            {booking.tenant?.fullName ||
              booking.tenant?.name ||
              "-"}

          </span>

          <span>

            Status:
            {" "}
            {booking.status}

          </span>

        </div>

        <div className="delete-booking-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(booking)}
          >
            Delete Booking
          </button>

        </div>

      </div>

    </div>
  );
}