import "./FeaturedAgents.css";

import { Link } from "react-router-dom";

import {
  MapPin,
  Star,
  BadgeCheck,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

const agents = [
  {
    id: 1,
    name: "Michael Johnson",
    location: "Abuja",
    company: "Prime Properties",
    experience: "8 Years",
    listings: 142,
    rating: 4.9,
    image: "https://i.pravatar.cc/400?img=11",
  },
  {
    id: 2,
    name: "Sarah Williams",
    location: "Lagos",
    company: "Urban Homes",
    experience: "6 Years",
    listings: 98,
    rating: 4.8,
    image: "https://i.pravatar.cc/400?img=5",
  },
  {
    id: 3,
    name: "David Okoro",
    location: "Port Harcourt",
    company: "Elite Realtors",
    experience: "10 Years",
    listings: 186,
    rating: 5.0,
    image: "https://i.pravatar.cc/400?img=15",
  },
  {
    id: 4,
    name: "Aisha Bello",
    location: "Kano",
    company: "Luxury Living",
    experience: "7 Years",
    listings: 115,
    rating: 4.9,
    image: "https://i.pravatar.cc/400?img=32",
  },
];

export default function FeaturedAgents() {
  return (
    <section className="featured-agents">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            PROFESSIONAL AGENTS
          </span>

          <h2>Meet Our Verified Experts</h2>

          <p>
            Every HouseHub agent is carefully verified to ensure
            safe, transparent and professional property transactions.
          </p>

        </div>

        <div className="agents-grid">

          {agents.map((agent) => (

            <div
              className="agent-card"
              key={agent.id}
            >

              <div className="agent-image">

                <img
                  src={agent.image}
                  alt={agent.name}
                />

                <span className="verified">

                  <BadgeCheck size={16} />

                  Verified

                </span>

              </div>

              <div className="agent-body">

                <h3>{agent.name}</h3>

                <span className="company">
                  {agent.company}
                </span>

                <div className="agent-meta">

                  <span>
                    <MapPin size={16} />
                    {agent.location}
                  </span>

                  <span>
                    <Star size={16} />
                    {agent.rating}
                  </span>

                </div>

                <div className="stats">

                  <div>

                    <strong>{agent.listings}</strong>

                    <small>Listings</small>

                  </div>

                  <div>

                    <strong>{agent.experience}</strong>

                    <small>Experience</small>

                  </div>

                </div>

                <div className="agent-actions">

                  <button>

                    <Phone size={18} />

                  </button>

                  <button>

                    <Mail size={18} />

                  </button>

                  <Link to={`/agents/${agent.id}`}>

                    View Profile

                    <ArrowRight size={16} />

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}