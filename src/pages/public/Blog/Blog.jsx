import "./Blog.css";

import { Link } from "react-router-dom";

import {
  Newspaper,
  ArrowRight,
  BookOpen,
  Home,
  ShieldCheck,
} from "lucide-react";

const resources = [
  {
    title: "Buying guides",
    description: "How to evaluate neighborhoods, compare listings, and close with confidence.",
  },
  {
    title: "Renting tips",
    description: "Everything tenants need to know about deposits, inspections, and lease terms.",
  },
  {
    title: "Property management",
    description: "Practical advice for landlords managing requests, renewals, and maintenance.",
  },
];

export default function Blog() {
  return (
    <main className="blog-placeholder">
      <div className="blog-page-container">
        <div className="placeholder-card">
          <div className="placeholder-icon">
            <Newspaper size={60} />
          </div>

          <span className="coming-soon">RESOURCE CENTER</span>

          <h1>HouseHub insights for buyers, renters, and landlords</h1>

          <p>
            Discover practical guidance for navigating the property market, staying organized, and
            making safer real-estate decisions with confidence.
          </p>

          <div className="placeholder-features">
            {resources.map((item) => (
              <div className="feature" key={item.title}>
                <strong>{item.title}</strong>
                <span>{item.description}</span>
              </div>
            ))}
          </div>

          <div className="placeholder-actions">
            <Link to="/" className="btn-primary">
              Back Home
            </Link>
            <Link to="/properties" className="btn-secondary">
              Browse Properties
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="launch-note">
            <BookOpen size={18} />
            <span>New articles and guides will be shared here as the platform grows.</span>
          </div>

          <div className="placeholder-features" style={{ marginTop: "1rem" }}>
            <div className="feature">
              <Home size={18} />
              <span>Property discovery tools</span>
            </div>
            <div className="feature">
              <ShieldCheck size={18} />
              <span>Secure account workflows</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}