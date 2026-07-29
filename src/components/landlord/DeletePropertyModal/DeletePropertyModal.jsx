import "./DeletePropertyModal.css";

export default function DeletePropertyModal({
  open,
  property,
  onClose,
  onConfirm,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="modal-overlay">

      <div className="delete-modal">

        <h2>Delete Property</h2>

        <p>
          Are you sure you want to delete
          <strong> {property?.title}</strong>?
        </p>

        <p className="warning">
          This action cannot be undone.
        </p>

        <div className="modal-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
            disabled={loading}
          >
            Cancel
          </button>

          <button
            className="delete-btn"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
}