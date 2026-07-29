import "./MaintenanceTable.css";

import { Link } from "react-router-dom";
import {
  Eye,
  Pencil,
  Trash2,
  Wrench,
} from "lucide-react";

export default function MaintenanceTable({
  requests,
  loading,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="maintenance-loading">
        Loading maintenance requests...
      </div>
    );
  }

  if (!requests.length) {
    return (
      <div className="maintenance-empty">

        <Wrench size={60} />

        <h2>No Maintenance Requests</h2>

        <p>
          There are currently no maintenance
          requests.
        </p>

      </div>
    );
  }

  return (
    <div className="maintenance-table-wrapper">

      <table className="maintenance-table">

        <thead>

          <tr>

            <th>Issue</th>

            <th>Property</th>

            <th>Tenant</th>

            <th>Priority</th>

            <th>Status</th>

            <th>Technician</th>

            <th>Estimated Cost</th>

            <th>Created</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {requests.map((request) => (

            <tr key={request._id}>

              <td>

                <strong>{request.title}</strong>

                <span>
                  {request.category}
                </span>

              </td>

              <td>
                {request.property?.title || "-"}
              </td>

              <td>
                {request.tenant?.fullName || "-"}
              </td>

              <td>

                <span
                  className={`priority ${request.priority?.toLowerCase()}`}
                >
                  {request.priority}
                </span>

              </td>

              <td>

                <span
                  className={`status ${request.status
                    ?.toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {request.status}
                </span>

              </td>

              <td>
                {request.technician?.name ||
                  "Unassigned"}
              </td>

              <td>
                ₦
                {(request.estimatedCost || 0).toLocaleString()}
              </td>

              <td>
                {new Date(
                  request.createdAt
                ).toLocaleDateString()}
              </td>

              <td>

                <div className="maintenance-actions">

                  <Link
                    to={`/landlord/maintenance/${request._id}`}
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    to={`/landlord/maintenance/edit/${request._id}`}
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() =>
                      onDelete(request)
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