import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Building2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import "./Hero.css";

const heroImages = [
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=3840&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=3840&q=80",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const [search, setSearch] = useState({
    location: "",
    propertyType: "",
    budget: "",
  });

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    if (search.location.trim()) params.set("city", search.location.trim());
    if (search.propertyType) params.set("propertyType", search.propertyType);
    if (search.budget) params.set("maxPrice", search.budget);

    const query = params.toString();
    navigate(query ? `/properties?${query}` : "/properties");
  };

  return (
    <section className="hero">
      {/* Background Slider */}
      <div className="hero-slider">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero ${index + 1}`}
            className={current === index ? "slide active" : "slide"}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="container hero-content-wrapper">
        <div className="hero-content">
          <span className="hero-badge">
            <ShieldCheck size={18} />
            Nigeria's Trusted Property Platform
          </span>

          <h1>
            Find Verified Homes
            <br />
            <span>With Confidence.</span>
          </h1>

          <p>
            Discover verified homes, trusted agents, and secure property
            transactions across Nigeria. Whether you're buying, renting,
            or investing, HouseHub makes the journey simple, transparent,
            and safe.
          </p>

          <div className="hero-actions">
            <Link to="/properties" className="btn btn-primary">
              Explore Properties
              <ArrowRight size={18} />
            </Link>

            <Link to="/list-property" className="btn btn-secondary">
              List Property
            </Link>
          </div>
        </div>

        {/* Search Card */}
        <form className="hero-search-card" onSubmit={handleSearch}>
          <label className="search-field">
            <MapPin size={20} aria-hidden="true" />
            <span>
              <small>Location</small>
              <input
                type="text"
                name="location"
                value={search.location}
                onChange={(event) =>
                  setSearch((prev) => ({ ...prev, location: event.target.value }))
                }
                placeholder="City or area"
              />
            </span>
          </label>

          <label className="search-field">
            <Building2 size={20} aria-hidden="true" />
            <span>
              <small>Property type</small>
              <select
                name="propertyType"
                value={search.propertyType}
                onChange={(event) =>
                  setSearch((prev) => ({ ...prev, propertyType: event.target.value }))
                }
              >
                <option value="">Any property</option>
                <option value="apartment">Apartment</option>
                <option value="duplex">Duplex</option>
                <option value="house">House</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
            </span>
          </label>

          <label className="search-field">
            <span className="search-field-currency" aria-hidden="true">₦</span>
            <span>
              <small>Maximum budget</small>
              <select
                name="budget"
                value={search.budget}
                onChange={(event) =>
                  setSearch((prev) => ({ ...prev, budget: event.target.value }))
                }
              >
                <option value="">No limit</option>
                <option value="5000000">Under ₦5M</option>
                <option value="20000000">Up to ₦20M</option>
                <option value="50000000">Up to ₦50M</option>
                <option value="100000000">Up to ₦100M</option>
              </select>
            </span>
          </label>

          <button className="search-btn" type="submit">
            <Search size={20} />
            Search properties
          </button>
        </form>

        {/* Statistics */}
        <div className="hero-stats">
          <div className="stat">
            <h2>12K+</h2>
            <p>Verified Listings</p>
          </div>

          <div className="stat">
            <h2>500+</h2>
            <p>Trusted Agents</p>
          </div>

          <div className="stat">
            <h2>98%</h2>
            <p>Verified Properties</p>
          </div>

          <div className="stat">
            <h2>36</h2>
            <p>States Covered</p>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="hero-dots">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}