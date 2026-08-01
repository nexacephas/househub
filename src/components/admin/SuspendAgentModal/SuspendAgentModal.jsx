import { useState } from "react";
import { X, Ban } from "lucide-react";
import "./SuspendAgentModal.css";

export default function SuspendAgentModal({
  agent,
  onClose,
  onConfirm,
}) {
  const [reason, setReason] = useState("");

  if (!agent) return null;

  function handleSubmit(e) {
    e.preventDefault();

    onConfirm?.({
      agentId: agent._id,
      reason,
    });

    onClose();
  }

  return (
    <div className="suspend-agent-overlay">

      <div className="suspend-agent-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="modal-icon">
          <Ban size={38} />
        </div>

        <h2>Suspend Agent</h2>

        <p>
          You are about to suspend
          <strong> {agent.fullName}</strong>.
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
              Suspend Agent
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}