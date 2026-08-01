import { useEffect, useState } from "react";

import AgentStats from "../../../components/admin/AgentStats/AgentStats";
import AgentFilters from "../../../components/admin/AgentFilters/AgentFilters";
import AgentTable from "../../../components/admin/AgentTable/AgentTable";
import AgentDetails from "../../../components/admin/AgentDetails/AgentDetails";
import AgentForm from "../../../components/admin/AgentForm/AgentForm";
import SuspendAgentModal from "../../../components/admin/SuspendAgentModal/SuspendAgentModal";
import DeleteAgentModal from "../../../components/admin/DeleteAgentModal/DeleteAgentModal";

import agentService from "../../../services/agent.service";

import "./Agents.css";

function Agents() {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedAgent, setSelectedAgent] = useState(null);

  const [showForm, setShowForm] = useState(false);
  const [showSuspend, setShowSuspend] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    status: "",
    verification: "",
    specialization: "",
  });

  useEffect(() => {
    loadAgents();
  }, []);

  async function loadAgents() {
    try {
      setLoading(true);

      const { data } =
        await agentService.getAgents();

      setAgents(data.agents || []);
    } catch (error) {
      console.error(error);
      setAgents([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-agents-page">

      <div className="page-header">

        <div>
          <h1>Agents</h1>

          <p>
            Manage all registered real estate agents.
          </p>
        </div>

        <button
          className="add-agent-btn"
          onClick={() => {
            setSelectedAgent(null);
            setShowForm(true);
          }}
        >
          + Add Agent
        </button>

      </div>

      <AgentStats />

      <AgentFilters
        filters={filters}
        setFilters={setFilters}
      />

      <div className="agents-content">

        <div className="agents-table">

          <AgentTable
            agents={agents}
            loading={loading}
            onSelect={setSelectedAgent}
            onEdit={(agent) => {
              setSelectedAgent(agent);
              setShowForm(true);
            }}
            onSuspend={(agent) => {
              setSelectedAgent(agent);
              setShowSuspend(true);
            }}
            onDelete={(agent) => {
              setSelectedAgent(agent);
              setShowDelete(true);
            }}
          />

        </div>

        {selectedAgent && (

          <div className="agent-side-panel">

            <AgentDetails
              agent={selectedAgent}
            />

          </div>

        )}

      </div>

      {showForm && (
        <AgentForm
          agent={selectedAgent}
          onClose={() => setShowForm(false)}
          onSubmit={(data) =>
            console.log(data)
          }
        />
      )}

      {showSuspend && (
        <SuspendAgentModal
          agent={selectedAgent}
          onClose={() => setShowSuspend(false)}
          onConfirm={(data) =>
            console.log(data)
          }
        />
      )}

      {showDelete && (
        <DeleteAgentModal
          agent={selectedAgent}
          onClose={() => setShowDelete(false)}
          onConfirm={(id) =>
            console.log(id)
          }
        />
      )}

    </div>
  );
}

export default Agents;