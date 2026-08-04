import { useCallback, useEffect, useState } from "react";

import BookingStats from "../../../components/admin/BookingStats/BookingStats";
import BookingFilters from "../../../components/admin/BookingFilters/BookingFilters";
import BookingTable from "../../../components/admin/BookingTable/BookingTable";
import BookingDetails from "../../../components/admin/BookingDetails/BookingDetails";
import BookingForm from "../../../components/admin/BookingForm/BookingForm";
import DeleteBookingModal from "../../../components/admin/DeleteBookingModal/DeleteBookingModal";

import bookingService from "../../../services/booking.service";

import "./Bookings.css";

function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedBooking, setSelectedBooking] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    property: "",
    tenant: "",
    paymentStatus: "",
  });

  const loadBookings = useCallback(
    async (filterValues) => {
      try {
        setLoading(true);

        const { data } =
          await bookingService.getBookings(filterValues);

        setBookings(data.bookings || []);
      } catch (error) {
        console.error(error);
        setBookings([]);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    loadBookings(filters);
  }, [filters, loadBookings]);

  async function handleDelete(booking) {
    try {
      await bookingService.deleteBooking(
        booking._id
      );

      setShowDelete(false);
      setSelectedBooking(null);

      loadBookings(filters);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="admin-bookings-page">

      <div className="page-header">

        <div>

          <h1>Bookings</h1>

          <p>
            Manage all property bookings.
          </p>

        </div>

        <button
          className="add-booking-btn"
          onClick={() => {
            setSelectedBooking(null);
            setShowForm(true);
          }}
        >
          + New Booking
        </button>

      </div>

<BookingStats
  stats={{
    totalBookings: bookings.length,
    pendingBookings: bookings.filter(
      (b) => b.status === "Pending"
    ).length,
    confirmedBookings: bookings.filter(
      (b) => b.status === "Confirmed"
    ).length,
    cancelledBookings: bookings.filter(
      (b) => b.status === "Cancelled"
    ).length,
    completedBookings: bookings.filter(
      (b) => b.status === "Completed"
    ).length,
  }}
/>

      <BookingFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="bookings-content">

        <div className="bookings-table">

          <BookingTable
            bookings={bookings}
            loading={loading}
            onSelect={setSelectedBooking}
            onEdit={(booking) => {
              setSelectedBooking(booking);
              setShowForm(true);
            }}
            onDelete={(booking) => {
              setSelectedBooking(booking);
              setShowDelete(true);
            }}
          />

        </div>

        {selectedBooking && (

          <div className="booking-details-panel">

            <BookingDetails
              booking={selectedBooking}
            />

          </div>

        )}

      </div>

      {showForm && (

        <BookingForm
          booking={selectedBooking}
          onClose={() => {
            setShowForm(false);
            setSelectedBooking(null);
          }}
          onSave={() => {
            loadBookings();
            setShowForm(false);
            setSelectedBooking(null);
          }}
        />

      )}

      {showDelete && (

        <DeleteBookingModal
          booking={selectedBooking}
          onClose={() => setShowDelete(false)}
          onDelete={handleDelete}
        />

      )}

    </div>
  );
}

export default Bookings;