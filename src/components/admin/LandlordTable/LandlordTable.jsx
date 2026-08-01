import "./LandlordTable.css";

import {
  Eye,
  ShieldCheck,
  Ban,
  Trash2,
  Mail,
} from "lucide-react";

export default function LandlordTable({
  landlords = [],
  loading,
  onSelect,
  onVerify,
  onSuspend,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="landlord-table-loading">
        Loading landlords...
      </div>
    );
  }

  if (!landlords.length) {
    return (
      <div className="landlord-table-loading">
        No landlords found.
      </div>
    );
  }

  return (
    <div className="landlord-table-wrapper">

      <table className="landlord-table">

        <thead>

          <tr>
            <th>Landlord</th>
            <th>Properties</th>
            <th>Bookings</th>
            <th>Joined</th>
            <th>Verification</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {landlords.map((landlord) => (

            <tr key={landlord._id}>

              <td>

                <div className="landlord-info">

                  <img
                    src={
                      landlord.avatar ||
                      "https://placehold.co/60x60"
                    }
                    alt={landlord.fullName}
                  />

                  <div>

                    <h4>{landlord.fullName}</h4>

                    <p>
                      <Mail size={13} />
                      {landlord.email}
                    </p>

                  </div>

                </div>

              </td>

              <td>

                {landlord.propertyCount || 0}

              </td>

              <td>

                {landlord.bookingCount || 0}

              </td>

              <td>

                {landlord.createdAt
                  ? new Date(
                      landlord.createdAt
                    ).toLocaleDateString()
                  : "-"}

              </td>

              <td>

                <span
                  className={`verification-badge ${
                    landlord.verificationStatus
                  }`}
                >
                  {landlord.verificationStatus}
                </span>

              </td>

              <td>

                <span
                  className={`status-badge ${
                    landlord.status
                  }`}
                >
                  {landlord.status}
                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button
                    className="view-btn"
                    onClick={() =>
                      onSelect(landlord)
                    }
                  >
                    <Eye size={17} />
                  </button>

                  <button
                    className="verify-btn"
                    onClick={() =>
                      onVerify(landlord)
                    }
                  >
                    <ShieldCheck size={17} />
                  </button>

                  <button
                    className="suspend-btn"
                    onClick={() =>
                      onSuspend(landlord)
                    }
                  >
                    <Ban size={17} />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(landlord)
                    }
                  >
                    <Trash2 size={17} />
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