import "./DeleteLandlordModal.css";

import { X, Trash2 } from "lucide-react";

export default function DeleteLandlordModal({
  landlord,
  onClose,
  onConfirm,
}) {
  if (!landlord) return null;

  function handleDelete() {
    onConfirm?.(landlord._id);
    onClose();
  }

  return (
    <div className="delete-landlord-overlay">

      <div className="delete-landlord-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="delete-icon">
          <Trash2 size={40} />
        </div>

        <h2>Delete Landlord</h2>

        <p>
          Are you sure you want to permanently delete
          <strong> {landlord.fullName}</strong>?
        </p>

        <p className="warning-text">
          This action cannot be undone. All associated
          properties, bookings and records may also be
          affected.
        </p>

        <div className="modal-actions">

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
            Delete Landlord
          </button>

        </div>

      </div>

    </div>
  );
}