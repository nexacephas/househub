import { useState } from "react";
import { Ban, X } from "lucide-react";
import "./SuspendUserModal.css";

export default function SuspendUserModal({
  user,
  onClose,
  onConfirm,
}) {
  const [reason, setReason] = useState("");

  if (!user) return null;

  const displayName =
    user.fullName ||
    [user.firstName, user.lastName].filter(Boolean).join(" ") ||
    user.email ||
    "this user";

  function handleSubmit(event) {
    event.preventDefault();

    onConfirm?.({
      userId: user._id || user.id,
      reason: reason.trim(),
    });

    onClose?.();
  }

  return (
    <div className="suspend-user-overlay" role="presentation">
      <div
        className="suspend-user-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="suspend-user-title"
      >
        <button
          className="close-btn"
          type="button"
          onClick={onClose}
          aria-label="Close suspend user dialog"
        >
          <X size={20} />
        </button>

        <div className="modal-icon">
          <Ban size={38} />
        </div>

        <h2 id="suspend-user-title">Suspend User</h2>

        <p>
          You are about to suspend
          <strong> {displayName}</strong>.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="suspend-user-reason">
            Suspension Reason
          </label>

          <textarea
            id="suspend-user-reason"
            rows="5"
            placeholder="Enter suspension reason..."
            value={reason}
            onChange={(event) => setReason(event.target.value)}
            required
          />

          <div className="modal-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="suspend-btn">
              Suspend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
