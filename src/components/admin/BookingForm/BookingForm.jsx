import "./BookingForm.css";

import { useEffect, useState } from "react";

import bookingService from "../../../services/booking.service";

export default function BookingForm({
  booking,
  onClose,
  onSave,
}) {
  const [formData, setFormData] = useState({
    tenant: "",
    property: "",
    checkIn: "",
    checkOut: "",
    totalAmount: "",
    paymentStatus: "Unpaid",
    status: "Pending",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (booking) {
      setFormData({
        tenant: booking.tenant?._id || "",
        property: booking.property?._id || "",
        checkIn: booking.checkIn
          ? booking.checkIn.slice(0, 10)
          : "",
        checkOut: booking.checkOut
          ? booking.checkOut.slice(0, 10)
          : "",
        totalAmount:
          booking.totalAmount || "",
        paymentStatus:
          booking.paymentStatus ||
          "Unpaid",
        status:
          booking.status || "Pending",
        notes:
          booking.notes || "",
      });
    }
  }, [booking]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      if (booking) {
        await bookingService.updateBooking(
          booking._id,
          formData
        );
      } else {
        await bookingService.createBooking(
          formData
        );
      }

      onSave();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="booking-form-overlay">

      <div className="booking-form">

        <h2>
          {booking
            ? "Edit Booking"
            : "New Booking"}
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="tenant"
            placeholder="Tenant ID"
            value={formData.tenant}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="property"
            placeholder="Property ID"
            value={formData.property}
            onChange={handleChange}
            required
          />

          <label>Check In</label>

          <input
            type="date"
            name="checkIn"
            value={formData.checkIn}
            onChange={handleChange}
            required
          />

          <label>Check Out</label>

          <input
            type="date"
            name="checkOut"
            value={formData.checkOut}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="totalAmount"
            placeholder="Total Amount"
            value={formData.totalAmount}
            onChange={handleChange}
          />

          <select
            name="paymentStatus"
            value={formData.paymentStatus}
            onChange={handleChange}
          >
            <option value="Paid">
              Paid
            </option>

            <option value="Partial">
              Partial
            </option>

            <option value="Unpaid">
              Unpaid
            </option>

          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Pending">
              Pending
            </option>

            <option value="Confirmed">
              Confirmed
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>

          </select>

          <textarea
            name="notes"
            placeholder="Notes..."
            rows="4"
            value={formData.notes}
            onChange={handleChange}
          />

          <div className="booking-form-actions">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
              disabled={loading}
            >
              {loading
                ? "Saving..."
                : booking
                ? "Update Booking"
                : "Create Booking"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}