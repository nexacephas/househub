import "./VerifiedAgents.css";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import AgentHero from "../../../components/agent/AgentHero";
import AgentSearch from "../../../components/agent/AgentSearch";
import AgentFilters from "../../../components/agent/AgentFilters";
import AgentStats from "../../../components/agent/AgentStats";
import AgentGrid from "../../../components/agent/AgentGrid";
import Pagination from "../../../components/ui/Pagination";
import AgentCTA from "../../../components/agent/AgentCTA";
import { allAgents } from "../../../data/agents";
export default function VerifiedAgents() {
  return (
    <>
      <Navbar />

      <main className="verified-agents-page">

        <AgentHero />

        <AgentSearch />

        <AgentFilters />

        <AgentStats />

   <AgentGrid agents={allAgents} />

        <Pagination
          currentPage={1}
          totalPages={10}
        />

        <AgentCTA />

      </main>

      <Footer />
    </>
  );
}