import "./BookingTable.css";

import {
  Eye,
  Pencil,
  Trash2,
  Calendar,
  User,
  Home,
} from "lucide-react";

export default function BookingTable({
  bookings = [],
  loading,
  onSelect,
  onEdit,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="booking-table-loading">
        Loading bookings...
      </div>
    );
  }

  if (!bookings.length) {
    return (
      <div className="booking-table-loading">
        No bookings found.
      </div>
    );
  }

  return (
    <div className="booking-table-wrapper">

      <table className="booking-table">

        <thead>

          <tr>

            <th>Tenant</th>

            <th>Property</th>

            <th>Dates</th>

            <th>Total</th>

            <th>Payment</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking._id}>

              <td>

                <div className="tenant-cell">

                  <User size={18} />

                  <div>

                    <h4>
                      {booking.tenant?.fullName ||
                        booking.tenant?.name ||
                        "-"}
                    </h4>

                    <span>
                      {booking.tenant?.email}
                    </span>

                  </div>

                </div>

              </td>

              <td>

                <div className="property-cell">

                  <Home size={18} />

                  <div>

                    <h4>
                      {booking.property?.title ||
                        "-"}
                    </h4>

                    <span>
                      {booking.property?.city ||
                        booking.property?.address}
                    </span>

                  </div>

                </div>

              </td>

              <td>

                <div className="date-cell">

                  <Calendar size={16} />

                  <div>

                    <span>

                      {booking.checkIn
                        ? new Date(
                            booking.checkIn
                          ).toLocaleDateString()
                        : "-"}

                    </span>

                    <small>

                      →

                    </small>

                    <span>

                      {booking.checkOut
                        ? new Date(
                            booking.checkOut
                          ).toLocaleDateString()
                        : "-"}

                    </span>

                  </div>

                </div>

              </td>

              <td>

                ₦
                {(booking.totalAmount || 0)
                  .toLocaleString()}

              </td>

              <td>

                <span
                  className={`payment-badge ${(
                    booking.paymentStatus ||
                    ""
                  )
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  {booking.paymentStatus ||
                    "Unknown"}
                </span>

              </td>

              <td>

                <span
                  className={`status-badge ${(
                    booking.status ||
                    ""
                  )
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  {booking.status}
                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button
                    className="view-btn"
                    onClick={() =>
                      onSelect(booking)
                    }
                  >
                    <Eye size={18} />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      onEdit(booking)
                    }
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(booking)
                    }
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}