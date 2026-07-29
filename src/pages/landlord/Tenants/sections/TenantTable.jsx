import "./TenantTable.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Eye,
  Pencil,
  Trash2,
  MessageCircle,
  User,
} from "lucide-react";

import DeleteTenantModal from "../DeleteTenantModal/DeleteTenantModal";

export default function TenantTable({
  tenants,
  loading,
  reload,
}) {
  const [selectedTenant, setSelectedTenant] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  if (loading) {
    return (
      <div className="tenant-loading">
        <h3>Loading tenants...</h3>
      </div>
    );
  }

  if (!tenants || tenants.length === 0) {
    return (
      <div className="tenant-empty">
        <User size={60} />

        <h2>No Tenants Found</h2>

        <p>
          No tenants match your current filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="tenant-table-wrapper">

        <table className="tenant-table">

          <thead>

            <tr>
              <th>Tenant</th>
              <th>Property</th>
              <th>Phone</th>
              <th>Monthly Rent</th>
              <th>Status</th>
              <th>Lease Ends</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {tenants.map((tenant) => (

              <tr key={tenant._id}>

                <td>

                  <div className="tenant-user">

                    <img
                      src={
                        tenant.avatar ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          tenant.fullName || "Tenant"
                        )}`
                      }
                      alt={tenant.fullName}
                    />

                    <div>

                      <strong>
                        {tenant.fullName}
                      </strong>

                      <span>
                        {tenant.email}
                      </span>

                    </div>

                  </div>

                </td>

                <td>
                  {tenant.property?.title || "-"}
                </td>

                <td>
                  {tenant.phone || "-"}
                </td>

                <td>
                  ₦
                  {(tenant.rentAmount || 0).toLocaleString()}
                </td>

                <td>

                  <span
                    className={`tenant-status ${tenant.status || "pending"}`}
                  >
                    {tenant.status || "Pending"}
                  </span>

                </td>

                <td>
                  {tenant.leaseEnd
                    ? new Date(
                        tenant.leaseEnd
                      ).toLocaleDateString()
                    : "-"}
                </td>

                <td>

                  <div className="tenant-actions">

                    <Link
                      to={`/landlord/tenants/${tenant._id}`}
                      title="View Tenant"
                    >
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/landlord/tenants/edit/${tenant._id}`}
                      title="Edit Tenant"
                    >
                      <Pencil size={18} />
                    </Link>

                    <button
                      type="button"
                      title="Message Tenant"
                    >
                      <MessageCircle size={18} />
                    </button>

                    <button
                      type="button"
                      title="Delete Tenant"
                      onClick={() => {
                        setSelectedTenant(tenant);
                        setShowDelete(true);
                      }}
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

      <DeleteTenantModal
        open={showDelete}
        tenant={selectedTenant}
        reload={reload}
        onClose={() => {
          setShowDelete(false);
          setSelectedTenant(null);
        }}
      />
    </>
  );
}