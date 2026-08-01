import "./ApproveVerificationModal.css";

import { X, CheckCircle } from "lucide-react";

export default function ApproveVerificationModal({
  verification,
  onClose,
  onConfirm,
}) {
  if (!verification) return null;

  function handleApprove() {
    onConfirm?.(verification._id);
    onClose();
  }

  return (
    <div className="approve-overlay">

      <div className="approve-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="approve-icon">
          <CheckCircle size={45} />
        </div>

        <h2>Approve Verification</h2>

        <p>
          Approve verification for
          <strong>
            {" "}
            {verification.user?.fullName}
          </strong>
          ?
        </p>

        <div className="modal-actions">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="approve-btn"
            onClick={handleApprove}
          >
            Approve
          </button>

        </div>

      </div>

    </div>
  );
}