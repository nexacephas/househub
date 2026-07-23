import "./Agents.css";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";

import AgentHero from "../../../components/agent/AgentHero";
import AgentSearch from "../../../components/agent/AgentSearch";
import AgentFilters from "../../../components/agent/AgentFilters";
import AgentStats from "../../../components/agent/AgentStats";
import FeaturedAgent from "../../../components/agent/FeaturedAgent";
import AgentVerification from "../../../components/agent/AgentVerification";
import WhyChooseAgent from "../../../components/agent/WhyChooseAgent";
import AgentCTA from "../../../components/agent/AgentCTA";

export default function Agents() {
  return (
    <>
      <Navbar />

      <main className="agents-page">
        <AgentHero />

        <AgentSearch />

        <AgentFilters />

        <AgentStats />

        <FeaturedAgent />

        <AgentVerification />

        <WhyChooseAgent />

        <AgentCTA />
      </main>

      <Footer />
    </>
  );
}