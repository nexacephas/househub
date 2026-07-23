import "./PropertyHero.css";

import { Link } from "react-router-dom";

import {
  ArrowRight,
} from "lucide-react";

export default function PropertyHero() {
  return (
    <section className="property-hero">

      <div className="hero-overlay"></div>

      <div className="container">

        <div className="hero-content">

          <span className="hero-tag">
            VERIFIED PROPERTIES
          </span>

          <h1>
            Discover Your
            <span> Perfect Property</span>
          </h1>

          <p>
            Browse verified apartments, houses, offices and
            commercial spaces across Nigeria. Safe, trusted,
            and transparent.
          </p>

          <div className="hero-actions">

            <Link
              to="/properties"
              className="hero-btn primary"
            >
              Browse Properties
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/register"
              className="hero-btn secondary"
            >
              List Your Property
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}