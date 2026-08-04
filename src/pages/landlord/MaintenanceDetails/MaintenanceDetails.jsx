import "./MaintenanceDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import maintenanceService from "../../../services/maintenance.service";

import MaintenanceGallery from "../../../components/landlord/MaintenanceGallery/MaintenanceGallery";
import MaintenanceTimeline from "../../../components/landlord/MaintenanceTimeline/MaintenanceTimeline";

import {
  ArrowLeft,
  Pencil,
  Building2,
  User,
  Wrench,
  BadgeDollarSign,
  Calendar,
} from "lucide-react";

export default function MaintenanceDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [request, setRequest] = useState(null);

  useEffect(() => {
    async function loadRequest() {
      try {
        setLoading(true);

        const { data } =
          await maintenanceService.getRequest(id);

        setRequest(data.request);
      } catch (error) {
        toast.error(
          error.response?.data?.message ||
            "Failed to load maintenance request."
        );
      } finally {
        setLoading(false);
      }
    }

    loadRequest();
  }, [id]);

  if (loading) {
    return (
      <DashboardLayout role="landlord">
        <div className="maintenance-loading">
          Loading maintenance request...
        </div>
      </DashboardLayout>
    );
  }

  if (!request) {
    return (
      <DashboardLayout role="landlord">
        <div className="maintenance-loading">
          Maintenance request not found.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout role="landlord">

      <div className="maintenance-details-page">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="details-header">

          <div>

            <h1>{request.title}</h1>

            <p>{request.description}</p>

          </div>

          <button
            className="edit-btn"
            onClick={() =>
              navigate(
                `/landlord/maintenance/edit/${request._id}`
              )
            }
          >
            <Pencil size={18} />

            Edit Request

          </button>

        </div>

        <div className="badge-row">

          <span
            className={`priority ${request.priority}`}
          >
            {request.priority}
          </span>

          <span
            className={`status ${request.status}`}
          >
            {request.status}
          </span>

        </div>

        <MaintenanceGallery
          beforeImages={
            request.beforeImages || []
          }
          afterImages={
            request.afterImages || []
          }
        />

        <div className="details-grid">

          <div className="info-card">

            <h3>

              <Building2 size={18} />

              Property

            </h3>

            <p>
              <strong>Title:</strong>{" "}
              {request.property?.title || "-"}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {request.property?.address || "-"}
            </p>

          </div>

          <div className="info-card">

            <h3>

              <User size={18} />

              Tenant

            </h3>

            <p>
              <strong>Name:</strong>{" "}
              {request.tenant?.fullName || "-"}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {request.tenant?.email || "-"}
            </p>

          </div>

          <div className="info-card">

            <h3>

              <Wrench size={18} />

              Technician

            </h3>

            <p>
              {request.technician || "Not Assigned"}
            </p>

          </div>

          <div className="info-card">

            <h3>

              <BadgeDollarSign size={18} />

              Cost

            </h3>

            <p>
              Estimated:
              <strong>
                {" "}
                ₦
                {(
                  request.estimatedCost || 0
                ).toLocaleString()}
              </strong>
            </p>

            <p>
              Actual:
              <strong>
                {" "}
                ₦
                {(
                  request.actualCost || 0
                ).toLocaleString()}
              </strong>
            </p>

          </div>

          <div className="info-card">

            <h3>

              <Calendar size={18} />

              Dates

            </h3>

            <p>
              Created:
              {" "}
              {request.createdAt
                ? new Date(
                    request.createdAt
                  ).toLocaleDateString()
                : "-"}
            </p>

            <p>
              Updated:
              {" "}
              {request.updatedAt
                ? new Date(
                    request.updatedAt
                  ).toLocaleDateString()
                : "-"}
            </p>

          </div>

          <div className="info-card">

            <h3>Notes</h3>

            <p>
              {request.notes ||
                "No notes available."}
            </p>

          </div>

        </div>

        <MaintenanceTimeline
          timeline={request.timeline || []}
        />

      </div>

    </DashboardLayout>
  );
}