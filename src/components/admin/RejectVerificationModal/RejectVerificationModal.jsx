import { useState } from "react";
import { X, XCircle } from "lucide-react";
import "./RejectVerificationModal.css";

export default function RejectVerificationModal({
  verification,
  onClose,
  onConfirm,
}) {
  const [reason, setReason] = useState("");

  if (!verification) return null;

  function handleReject(e) {
    e.preventDefault();

    onConfirm?.({
      id: verification._id,
      reason,
    });

    onClose();
  }

  return (
    <div className="reject-overlay">

      <div className="reject-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="reject-icon">
          <XCircle size={45} />
        </div>

        <h2>Reject Verification</h2>

        <p>
          Reject verification for
          <strong>
            {" "}
            {verification.user?.fullName}
          </strong>
        </p>

        <form onSubmit={handleReject}>

          <label>Reason</label>

          <textarea
            rows="5"
            placeholder="Reason for rejection..."
            value={reason}
            onChange={(e) =>
              setReason(e.target.value)
            }
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

            <button
              type="submit"
              className="reject-btn"
            >
              Reject
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}