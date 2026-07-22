import "./PropertyCategories.css";

import {
  Home,
  Building2,
  Landmark,
  Warehouse,
  Hotel,
  Trees,
  KeyRound,
  Building,
} from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Houses",
    listings: "2,340+ Listings",
  },
  {
    icon: Building2,
    title: "Apartments",
    listings: "1,280+ Listings",
  },
  {
    icon: Landmark,
    title: "Duplexes",
    listings: "860+ Listings",
  },
  {
    icon: Warehouse,
    title: "Commercial",
    listings: "520+ Listings",
  },
  {
    icon: Hotel,
    title: "Luxury Homes",
    listings: "310+ Listings",
  },
  {
    icon: Trees,
    title: "Land",
    listings: "940+ Listings",
  },
  {
    icon: KeyRound,
    title: "Short Lets",
    listings: "670+ Listings",
  },
  {
    icon: Building,
    title: "New Developments",
    listings: "410+ Listings",
  },
];

export default function PropertyCategories() {
  return (
    <section className="categories">

      <div className="container">

        <span className="section-tag">
          PROPERTY TYPES
        </span>

        <h2>
          Browse by Category
        </h2>

        <p className="section-description">
          Discover thousands of verified properties
          across Nigeria, carefully organized to help
          you find exactly what you're looking for.
        </p>

        <div className="categories-grid">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <div
                className="category-card"
                key={index}
              >
                <div className="category-icon">
                  <Icon size={34} />
                </div>

                <h3>{category.title}</h3>

                <span>{category.listings}</span>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}