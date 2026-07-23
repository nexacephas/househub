import "./Agents.css";

import AgentHero from "../../../components/agent/AgentHero";
import AgentSearch from "../../../components/agent/AgentSearch";
import FeaturedAgents from "../../../components/agent/FeaturedAgents";
import CTASection from "../../../components/home/CTASection";

export default function Agents() {
  return (
    <main className="agents-page">

      <AgentHero />

      <AgentSearch />

      <FeaturedAgents />

      <CTASection />

    </main>
  );
}