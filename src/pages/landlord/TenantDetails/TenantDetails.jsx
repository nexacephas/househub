import "./TenantDetails.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import tenantService from "../../../services/tenant.service";

import toast from "react-hot-toast";

export default function TenantDetails() {
  const { id } = useParams();

  const [tenant, setTenant] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadTenant() {
      try {
        const { data } =
          await tenantService.getTenant(id);

        setTenant(data.tenant);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Unable to load tenant."
        );
      } finally {
        setLoading(false);
      }
    }

    loadTenant();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout role="landlord">
        <h2>Loading...</h2>
      </DashboardLayout>
    );
  }

  if (!tenant) {
    return (
      <DashboardLayout role="landlord">
        <h2>Tenant not found.</h2>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="landlord">

      <div className="tenant-details">

        <div className="tenant-profile">

          <img
            src={
              tenant.avatar ||
              `https://ui-avatars.com/api/?name=${tenant.fullName}`
            }
            alt=""
          />

          <div>

            <h1>{tenant.fullName}</h1>

            <p>{tenant.email}</p>

            <span className={tenant.status}>
              {tenant.status}
            </span>

          </div>

        </div>

        <div className="tenant-grid">

          <div className="detail-card">

            <h3>Personal Information</h3>

            <p>
              <strong>Phone:</strong>{" "}
              {tenant.phone}
            </p>

            <p>
              <strong>Gender:</strong>{" "}
              {tenant.gender}
            </p>

            <p>
              <strong>Occupation:</strong>{" "}
              {tenant.occupation}
            </p>

          </div>

          <div className="detail-card">

            <h3>Lease</h3>

            <p>
              <strong>Property:</strong>{" "}
              {tenant.property?.title}
            </p>

            <p>
              <strong>Start:</strong>{" "}
              {new Date(
                tenant.leaseStart
              ).toLocaleDateString()}
            </p>

            <p>
              <strong>End:</strong>{" "}
              {new Date(
                tenant.leaseEnd
              ).toLocaleDateString()}
            </p>

            <p>
              <strong>Monthly Rent:</strong>{" "}
              ₦
              {tenant.rentAmount.toLocaleString()}
            </p>

          </div>

          <div className="detail-card">

            <h3>Emergency Contact</h3>

            <p>
              {tenant.emergencyContact?.name}
            </p>

            <p>
              {tenant.emergencyContact?.phone}
            </p>

          </div>

          <div className="detail-card">

            <h3>Notes</h3>

            <p>
              {tenant.notes ||
                "No notes yet."}
            </p>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}