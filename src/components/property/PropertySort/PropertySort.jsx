import "./PropertySort.css";


import {
  ArrowUpDown,
  LayoutGrid,
  List,
  Heart,
} from "lucide-react";

export default function PropertySort({
  count = 0,
  filters = {},
  view = "grid",
  onViewChange = () => {},
  onSortChange = () => {},
}) {

  return (

    <section className="property-sort">

      <div className="property-sort-container">

        <div className="sort-wrapper">

          <div className="results-info">

            <h3>

              {count} Verified Properties

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

              <select value={filters.sort || "-createdAt"} onChange={(event) => onSortChange(event.target.value)}>

                <option value="-createdAt">Newest</option>

                <option value="-views">Most Viewed</option>

                <option value="price">Price: Low → High</option>

                <option value="-price">Price: High → Low</option>

              </select>

            </div>

            <div className="view-toggle">

              <button

                className={view === "grid" ? "active" : ""}

                onClick={() => onViewChange("grid")}
                aria-label="Grid view"
                aria-pressed={view === "grid"}

              >

                <LayoutGrid size={18} />

              </button>

              <button

                className={view === "list" ? "active" : ""}

                onClick={() => onViewChange("list")}
                aria-label="List view"
                aria-pressed={view === "list"}

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