import "./DeletePropertyModal.css";

import {
  TriangleAlert,
} from "lucide-react";

export default function DeletePropertyModal({
  property,
  onClose,
  onDelete,
}) {
  if (!property) return null;

  function handleDelete() {
    if (onDelete) {
      onDelete(property);
    }

    onClose();
  }

  return (
    <div className="delete-property-overlay">

      <div className="delete-property-modal">

        <div className="delete-icon">
          <TriangleAlert size={42} />
        </div>

        <h2>Delete Property?</h2>

        <p>
          You are about to permanently delete
          <strong>
            {" "}
            {property.title}
          </strong>
          .
        </p>

        <p className="warning">
          This action cannot be undone.
        </p>

        <div className="delete-actions">

          <button
            className="cancel-delete"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-delete"
            onClick={handleDelete}
          >
            Delete Property
          </button>

        </div>

      </div>

    </div>
  );
}