import "./DeleteMaintenanceModal.css";

import toast from "react-hot-toast";
import maintenanceService from "../../../services/maintenance.service";

export default function DeleteMaintenanceModal({
  open,
  onClose,
  request,
  reload,
}) {
  if (!open || !request) return null;

  async function handleDelete() {
    try {
      await maintenanceService.deleteRequest(
        request._id
      );

      toast.success(
        "Maintenance request deleted successfully."
      );

      reload();
      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete request."
      );
    }
  }

  return (
    <div className="delete-maintenance-overlay">

      <div className="delete-maintenance-modal">

        <h2>Delete Maintenance Request</h2>

        <p>
          Are you sure you want to permanently
          delete this maintenance request?
        </p>

        <div className="maintenance-request-preview">

          <strong>{request.title}</strong>

          <span>
            {request.property?.title}
          </span>

        </div>

        <div className="delete-maintenance-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}