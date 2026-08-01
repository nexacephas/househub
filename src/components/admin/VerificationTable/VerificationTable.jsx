import "./VerificationTable.css";

import {
  Eye,
  Check,
  X,
  Calendar,
} from "lucide-react";

export default function VerificationTable({
  verifications = [],
  loading,
  onSelect,
  onApprove,
  onReject,
}) {
  if (loading) {
    return (
      <div className="verification-table-loading">
        Loading verification requests...
      </div>
    );
  }

  if (!verifications.length) {
    return (
      <div className="verification-table-loading">
        No verification requests found.
      </div>
    );
  }

  return (
    <div className="verification-table-wrapper">

      <table className="verification-table">

        <thead>

          <tr>

            <th>User</th>

            <th>Type</th>

            <th>Submitted</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {verifications.map((item) => (

            <tr key={item._id}>

              <td>

                <div className="verification-user">

                  <img
                    src={
                      item.user?.avatar ||
                      "https://placehold.co/60x60"
                    }
                    alt={item.user?.fullName}
                  />

                  <div>

                    <h4>{item.user?.fullName}</h4>

                    <p>{item.user?.email}</p>

                  </div>

                </div>

              </td>

              <td>

                <span className="verification-type">
                  {item.type}
                </span>

              </td>

              <td>

                <div className="date-cell">

                  <Calendar size={15} />

                  {item.createdAt
                    ? new Date(
                        item.createdAt
                      ).toLocaleDateString()
                    : "-"}

                </div>

              </td>

              <td>

                <span
                  className={`status-badge ${
                    item.status
                  }`}
                >
                  {item.status}
                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button
                    className="view-btn"
                    onClick={() =>
                      onSelect(item)
                    }
                  >
                    <Eye size={17} />
                  </button>

                  <button
                    className="approve-btn"
                    onClick={() =>
                      onApprove(item)
                    }
                  >
                    <Check size={17} />
                  </button>

                  <button
                    className="reject-btn"
                    onClick={() =>
                      onReject(item)
                    }
                  >
                    <X size={17} />
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