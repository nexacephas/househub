import "./PropertySort.css";

import { useState } from "react";

import {
  ArrowUpDown,
  LayoutGrid,
  List,
  Heart,
} from "lucide-react";

export default function PropertySort() {

  const [view, setView] = useState("grid");

  return (

    <section className="property-sort">

      <div className="container">

        <div className="sort-wrapper">

          <div className="results-info">

            <h3>

              245 Verified Properties

            </h3>

            <p>

              Showing the latest verified properties across Nigeria.

            </p>

          </div>

          <div className="sort-actions">

            <button className="saved-btn">

              <Heart size={18} />

              Saved

            </button>

            <div className="sort-select">

              <ArrowUpDown size={18} />

              <select>

                <option>Newest</option>

                <option>Featured</option>

                <option>Most Viewed</option>

                <option>Price: Low → High</option>

                <option>Price: High → Low</option>

              </select>

            </div>

            <div className="view-toggle">

              <button

                className={view === "grid" ? "active" : ""}

                onClick={() => setView("grid")}

              >

                <LayoutGrid size={18} />

              </button>

              <button

                className={view === "list" ? "active" : ""}

                onClick={() => setView("list")}

              >

                <List size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}