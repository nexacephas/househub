import "./LandlordDetails.css";

import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Home,
  BadgeCheck,
} from "lucide-react";

export default function LandlordDetails({ landlord }) {
  if (!landlord) {
    return (
      <div className="landlord-details-empty">
        Select a landlord to view details.
      </div>
    );
  }

  return (
    <div className="landlord-details">

      <div className="landlord-header">

        <img
          src={
            landlord.avatar ||
            "https://placehold.co/120x120"
          }
          alt={landlord.fullName}
        />

        <div>

          <h2>{landlord.fullName}</h2>

          <span
            className={`status ${landlord.status}`}
          >
            {landlord.status}
          </span>

        </div>

      </div>

      <div className="details-grid">

        <div className="detail-item">
          <Mail size={18} />
          <div>
            <label>Email</label>
            <span>{landlord.email}</span>
          </div>
        </div>

        <div className="detail-item">
          <Phone size={18} />
          <div>
            <label>Phone</label>
            <span>{landlord.phone || "-"}</span>
          </div>
        </div>

        <div className="detail-item">
          <MapPin size={18} />
          <div>
            <label>Address</label>
            <span>{landlord.address || "-"}</span>
          </div>
        </div>

        <div className="detail-item">
          <Calendar size={18} />
          <div>
            <label>Joined</label>
            <span>
              {landlord.createdAt
                ? new Date(
                    landlord.createdAt
                  ).toLocaleDateString()
                : "-"}
            </span>
          </div>
        </div>

        <div className="detail-item">
          <Home size={18} />
          <div>
            <label>Total Properties</label>
            <span>
              {landlord.propertyCount || 0}
            </span>
          </div>
        </div>

        <div className="detail-item">
          <BadgeCheck size={18} />
          <div>
            <label>Verification</label>
            <span>
              {landlord.verificationStatus}
            </span>
          </div>
        </div>

      </div>

      <div className="landlord-summary">

        <h3>Account Summary</h3>

        <div className="summary-card">

          <div>
            <strong>
              {landlord.bookingCount || 0}
            </strong>

            <span>Total Bookings</span>
          </div>

          <div>
            <strong>
              ₦
              {(landlord.totalRevenue || 0).toLocaleString()}
            </strong>

            <span>Total Revenue</span>
          </div>

          <div>
            <strong>
              {landlord.activeListings || 0}
            </strong>

            <span>Active Listings</span>
          </div>

        </div>

      </div>

      {landlord.notes && (

        <div className="landlord-notes">

          <h3>Admin Notes</h3>

          <p>{landlord.notes}</p>

        </div>

      )}

    </div>
  );
}