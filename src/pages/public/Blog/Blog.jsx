import "./Blog.css";

import { Link } from "react-router-dom";

import {
  Newspaper,
  Clock3,
  ArrowRight,
} from "lucide-react";

export default function Blog() {
  return (
    <main className="blog-placeholder">

      <div className="container">

        <div className="placeholder-card">

          <div className="placeholder-icon">
            <Newspaper size={60} />
          </div>

          <span className="coming-soon">
            COMING SOON
          </span>

          <h1>
            HouseHub Blog
          </h1>

          <p>
            We're creating a comprehensive resource centre packed with
            expert advice on buying, renting, investing, legal matters,
            market trends, home ownership, and property management across
            Nigeria.
          </p>

          <div className="placeholder-features">

            <div className="feature">
              ✓ Property Tips
            </div>

            <div className="feature">
              ✓ Buying Guides
            </div>

            <div className="feature">
              ✓ Renting Advice
            </div>

            <div className="feature">
              ✓ Market Insights
            </div>

            <div className="feature">
              ✓ Investment Articles
            </div>

            <div className="feature">
              ✓ Legal Resources
            </div>

          </div>

          <div className="placeholder-actions">

            <Link
              to="/"
              className="btn-primary"
            >
              Back Home
            </Link>

            <Link
              to="/properties"
              className="btn-secondary"
            >
              Browse Properties
              <ArrowRight size={18}/>
            </Link>

          </div>

          <div className="launch-note">

            <Clock3 size={18}/>

            <span>
              Full blog experience launching soon.
            </span>

          </div>

        </div>

      </div>

    </main>
  );
}