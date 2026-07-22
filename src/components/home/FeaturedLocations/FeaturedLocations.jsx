import "./FeaturedLocations.css";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import hero1 from "../../../assets/images/hero/hero1.jpg";
import hero2 from "../../../assets/images/hero/hero2.jpg";
import hero3 from "../../../assets/images/hero/hero3.jpg";
import hero4 from "../../../assets/images/hero/hero4.jpg";
import hero5 from "../../../assets/images/hero/hero5.jpg";

const locations = [
  {
    city: "Lagos",
    listings: "4,352",
    image: hero1,
  },
  {
    city: "Abuja",
    listings: "2,168",
    image: hero2,
  },
  {
    city: "Port Harcourt",
    listings: "1,264",
    image: hero3,
  },
  {
    city: "Ibadan",
    listings: "963",
    image: hero4,
  },
  {
    city: "Enugu",
    listings: "812",
    image: hero5,
  },
  {
    city: "Kano",
    listings: "731",
    image: hero1,
  },
];

export default function FeaturedLocations() {
  return (
    <section className="featured-locations">

      <div className="container">

        <div className="section-header">

          <div>

            <span className="section-tag">
              EXPLORE BY LOCATION
            </span>

            <h2>
              Find Your Perfect Property Across Nigeria
            </h2>

            <p>
              Browse verified homes in Nigeria's fastest-growing cities and discover opportunities near you.
            </p>

          </div>

          <Link
            to="/properties"
            className="view-all-btn"
          >
            View All Locations
            <ArrowRight size={18} />
          </Link>

        </div>

        <div className="locations-grid">

          {locations.map((location) => (

            <Link
              key={location.city}
              to={`/properties?city=${location.city}`}
              className="location-card"
            >

              <img
                src={location.image}
                alt={location.city}
              />

              <div className="location-overlay"></div>

              <div className="location-content">

                <div>

                  <span className="city">

                    <MapPin size={18} />

                    {location.city}

                  </span>

                  <h3>
                    {location.listings}
                  </h3>

                  <p>Verified Properties</p>

                </div>

                <ArrowRight size={24} />

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}

