import "./AgentGrid.css";

import AgentCard from "../AgentCard";

export default function AgentGrid({ agents }) {
  return (
    <div className="agents-grid">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          agent={agent}
        />
      ))}
    </div>
  );
}