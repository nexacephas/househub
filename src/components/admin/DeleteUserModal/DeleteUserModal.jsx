import "./DeleteUserModal.css";

import { TriangleAlert } from "lucide-react";

export default function DeleteUserModal({
  user,
  onClose,
  onConfirm,
}) {
  if (!user) return null;

  function handleDelete() {
    if (onConfirm) {
      onConfirm(user);
    }
  }

  return (
    <div className="delete-user-overlay">

      <div className="delete-user-modal">

        <div className="delete-icon">
          <TriangleAlert size={55} />
        </div>

        <h2>Delete User?</h2>

        <p>
          Are you sure you want to permanently delete
          <strong> {user.fullName}</strong>?
        </p>

        <p className="warning">
          This action cannot be undone.
        </p>

        <div className="delete-actions">

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
            Delete User
          </button>

        </div>

      </div>

    </div>
  );
}