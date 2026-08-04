import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

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

          <div className="hero-buttons">
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
        <div className="hero-search-card">
          <div className="search-field">
            <MapPin size={20} />
            <input
              type="text"
              placeholder="Enter Location"
            />
          </div>

          <div className="search-field">
            <Building2 size={20} />

            <select>
              <option>Property Type</option>
              <option>Apartment</option>
              <option>Duplex</option>
              <option>Land</option>
              <option>Commercial</option>
            </select>
          </div>

          <div className="search-field">
           <select>
    <option>Budget</option>
    <option>Under ₦5M</option>
    <option>₦5M - ₦20M</option>
    <option>₦20M - ₦50M</option>
    <option>₦50M+</option>
</select>
          </div>

          <button className="search-btn">
            <Search size={20} />
            Search
          </button>
        </div>

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