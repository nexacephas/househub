import "./AgentTable.css";

import {
  Eye,
  Pencil,
  Ban,
  Trash2,
  Phone,
} from "lucide-react";

export default function AgentTable({
  agents = [],
  loading,
  onSelect,
  onEdit,
  onSuspend,
  onDelete,
}) {
  if (loading) {
    return (
      <div className="agent-table-loading">
        Loading agents...
      </div>
    );
  }

  if (!agents.length) {
    return (
      <div className="agent-table-loading">
        No agents found.
      </div>
    );
  }

  return (
    <div className="agent-table-wrapper">

      <table className="agent-table">

        <thead>

          <tr>
            <th>Agent</th>
            <th>Phone</th>
            <th>Properties</th>
            <th>Sales</th>
            <th>Verification</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {agents.map((agent) => (

            <tr key={agent._id}>

              <td>

                <div className="agent-info">

                  <img
                    src={
                      agent.avatar ||
                      "https://placehold.co/60x60"
                    }
                    alt={agent.fullName}
                  />

                  <div>

                    <h4>{agent.fullName}</h4>

                    <p>{agent.email}</p>

                  </div>

                </div>

              </td>

              <td>

                <div className="phone-cell">

                  <Phone size={14} />

                  {agent.phone || "-"}

                </div>

              </td>

              <td>

                {agent.propertyCount || 0}

              </td>

              <td>

                ₦
                {(agent.totalSales || 0).toLocaleString()}

              </td>

              <td>

                <span
                  className={`verification-badge ${
                    agent.verificationStatus
                  }`}
                >
                  {agent.verificationStatus}
                </span>

              </td>

              <td>

                <span
                  className={`status-badge ${
                    agent.status
                  }`}
                >
                  {agent.status}
                </span>

              </td>

              <td>

                <div className="table-actions">

                  <button
                    className="view-btn"
                    onClick={() =>
                      onSelect(agent)
                    }
                  >
                    <Eye size={17} />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() =>
                      onEdit(agent)
                    }
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    className="suspend-btn"
                    onClick={() =>
                      onSuspend(agent)
                    }
                  >
                    <Ban size={17} />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      onDelete(agent)
                    }
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}