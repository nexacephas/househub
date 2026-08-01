import { useState } from "react";
import { X, Ban } from "lucide-react";
import "./SuspendLandlordModal.css";

export default function SuspendLandlordModal({
  landlord,
  onClose,
  onConfirm,
}) {
  const [reason, setReason] = useState("");

  if (!landlord) return null;

  function handleSubmit(e) {
    e.preventDefault();

    onConfirm?.({
      landlordId: landlord._id,
      reason,
    });

    onClose();
  }

  return (
    <div className="suspend-landlord-overlay">

      <div className="suspend-landlord-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="modal-icon">
          <Ban size={38} />
        </div>

        <h2>Suspend Landlord</h2>

        <p>
          You are about to suspend
          <strong> {landlord.fullName}</strong>.
        </p>

        <form onSubmit={handleSubmit}>

          <label>Suspension Reason</label>

          <textarea
            rows="5"
            placeholder="Enter suspension reason..."
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
              className="suspend-btn"
            >
              Suspend
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}