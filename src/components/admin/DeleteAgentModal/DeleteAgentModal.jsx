import "./DeleteAgentModal.css";

import { X, Trash2 } from "lucide-react";

export default function DeleteAgentModal({
  agent,
  onClose,
  onConfirm,
}) {
  if (!agent) return null;

  function handleDelete() {
    onConfirm?.(agent._id);
    onClose();
  }

  return (
    <div className="delete-agent-overlay">

      <div className="delete-agent-modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="delete-icon">
          <Trash2 size={40} />
        </div>

        <h2>Delete Agent</h2>

        <p>
          Are you sure you want to permanently delete
          <strong> {agent.fullName}</strong>?
        </p>

        <p className="warning-text">
          This action cannot be undone and all
          assigned listings may become unavailable.
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
            Delete Agent
          </button>

        </div>

      </div>

    </div>
  );
}