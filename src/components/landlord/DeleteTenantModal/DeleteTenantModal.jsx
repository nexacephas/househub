import "./DeleteTenantModal.css";

import { Trash2, X } from "lucide-react";
import toast from "react-hot-toast";

import tenantService from "../../../services/tenant.service";

export default function DeleteTenantModal({
  open,
  onClose,
  tenant,
  reload,
}) {
  if (!open || !tenant) return null;

  const handleDelete = async () => {
    try {
      await tenantService.deleteTenant(
        tenant._id
      );

      toast.success(
        "Tenant deleted successfully."
      );

      reload();

      onClose();
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to delete tenant."
      );
    }
  };

  return (
    <div className="delete-modal-overlay">

      <div className="delete-modal">

        <div className="delete-icon">

          <Trash2 size={34} />

        </div>

        <h2>Delete Tenant</h2>

        <p>
          Are you sure you want to delete
          <strong> {tenant.fullName}</strong>?
        </p>

        <small>
          This action cannot be undone.
        </small>

        <div className="delete-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            <X size={18} />
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={handleDelete}
          >
            <Trash2 size={18} />
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}