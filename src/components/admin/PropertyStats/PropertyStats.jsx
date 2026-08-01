import "./PropertyStats.css";

import {
  Building2,
  Home,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

export default function PropertyStats({
  stats = {},
}) {
  return (
    <div className="property-stats">

      <div className="property-stat-card">

        <div className="property-stat-icon blue">
          <Building2 size={28} />
        </div>

        <div>
          <h3>Total Properties</h3>
          <h2>{stats.total || 0}</h2>
        </div>

      </div>

      <div className="property-stat-card">

        <div className="property-stat-icon green">
          <CircleCheckBig size={28} />
        </div>

        <div>
          <h3>Approved</h3>
          <h2>{stats.approved || 0}</h2>
        </div>

      </div>

      <div className="property-stat-card">

        <div className="property-stat-icon orange">
          <Clock3 size={28} />
        </div>

        <div>
          <h3>Pending Review</h3>
          <h2>{stats.pending || 0}</h2>
        </div>

      </div>

      <div className="property-stat-card">

        <div className="property-stat-icon purple">
          <Home size={28} />
        </div>

        <div>
          <h3>Occupied</h3>
          <h2>{stats.occupied || 0}</h2>
        </div>

      </div>

    </div>
  );
}