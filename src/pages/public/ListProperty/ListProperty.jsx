import "./ListProperty.css";

import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer/Footer";

import {
  Eye,
  ShieldCheck,
  Users,
  TrendingUp,
  Clock,
  BadgeCheck,
    UserPlus,
  FileCheck,
  SearchCheck,
  House,
  FileText,
  Camera,
  MapPinned,
ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function ListProperty() {
  return (
    <>
      <Navbar />
<section className="list-hero">

  <div className="container">

    <div className="hero-content">

      {/* LEFT */}

      <div className="hero-left">

        <span className="section-tag">
          LIST YOUR PROPERTY
        </span>

        <h1>
          Reach Thousands of Verified Property Seekers
        </h1>

        <p>
          Join HouseHub and connect with trusted tenants,
          buyers, and investors across Nigeria through our
          secure property marketplace.
        </p>

        <div className="hero-buttons">

          <Link
            to="/login"
            className="primary-btn"
          >
            List Your Property
          </Link>

          <Link
            to="/register"
            className="secondary-btn"
          >
            Create Account
          </Link>

        </div>

        <div className="hero-features">

          <div>
            ✓ Verified Listings
          </div>

          <div>
            ✓ Fast Verification
          </div>

          <div>
            ✓ Genuine Leads
          </div>

          <div>
            ✓ Secure Platform
          </div>

        </div>

      </div>

      {/* RIGHT */}

      <div className="hero-right">

     <div className="hero-right">



</div>

      </div>

    </div>

  </div>

</section>
<section className="why-list">

  <div className="container">

    <span className="section-tag">
      WHY HOUSEHUB
    </span>

    <h2>
      Why List Your Property With HouseHub?
    </h2>

    <p className="section-description">
      We help landlords and property agents reach genuine tenants and buyers
      through verified listings, trusted identities, and a transparent rental process.
    </p>

    <div className="why-grid">

      <div className="why-card">

        <div className="icon">
          🛡️
        </div>

        <h3>Verified Marketplace</h3>

        <p>
          Every property goes through a verification process, helping you
          build trust and attract serious clients.
        </p>

      </div>

      <div className="why-card">

        <div className="icon">
          🚀
        </div>

        <h3>Reach More People</h3>

        <p>
          Showcase your property to thousands of active renters,
          buyers, and investors across Nigeria.
        </p>

      </div>

      <div className="why-card">

        <div className="icon">
          💬
        </div>

        <h3>Quality Leads</h3>

        <p>
          Connect directly with interested users instead of
          wasting time on fake enquiries.
        </p>

      </div>

      <div className="why-card">

        <div className="icon">
          📈
        </div>

        <h3>Grow Your Business</h3>

        <p>
          Whether you're a landlord or an estate agent,
          HouseHub helps you increase visibility and close deals faster.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="listing-benefits">

  <div className="container">

    <span className="section-tag">
      BENEFITS
    </span>

    <h2>
      Everything You Need to Market Your Property
    </h2>

    <p className="section-description">
      HouseHub gives landlords and agents powerful tools to
      reach serious clients while building trust through
      verified listings.
    </p>

    <div className="benefits-grid">

      <div className="benefit-card">

        <Eye size={40} />

        <h3>Maximum Visibility</h3>

        <p>
          Get your property in front of thousands of people actively searching
          for homes, apartments and commercial spaces.
        </p>

      </div>

      <div className="benefit-card">

        <ShieldCheck size={40} />

        <h3>Verified Listings</h3>

        <p>
          Increase buyer confidence with HouseHub's verification process and
          trusted property badges.
        </p>

      </div>

      <div className="benefit-card">

        <Users size={40} />

        <h3>Quality Leads</h3>

        <p>
          Receive enquiries from genuine tenants and buyers instead of dealing
          with fake requests.
        </p>

      </div>

      <div className="benefit-card">

        <TrendingUp size={40} />

        <h3>Grow Faster</h3>

        <p>
          Build your reputation, increase enquiries and close more deals using
          one trusted platform.
        </p>

      </div>

      <div className="benefit-card">

        <Clock size={40} />

        <h3>Fast Approval</h3>

        <p>
          Our verification team reviews your submission quickly so your property
          can go live as soon as possible.
        </p>

      </div>

      <div className="benefit-card">

        <BadgeCheck size={40} />

        <h3>Trusted Brand</h3>

        <p>
          Stand out with verified badges that help users identify legitimate
          landlords and professional agents.
        </p>

      </div>

    </div>

  </div>

</section>
<section className="listing-process">

  <div className="container">

    <span className="section-tag">
      HOW IT WORKS
    </span>

    <h2>
      List Your Property in 4 Simple Steps
    </h2>

    <p className="section-description">
      We've simplified the listing process to make it quick,
      secure, and transparent for landlords and agents.
    </p>

    <div className="process-grid">

      <div className="process-card">

        <div className="step-number">
          01
        </div>

        <UserPlus size={42} />

        <h3>Create Your Account</h3>

        <p>
          Register as a landlord or property agent and
          complete your profile with your contact details.
        </p>

      </div>

      <div className="process-card">

        <div className="step-number">
          02
        </div>

        <House size={42} />

        <h3>Submit Your Property</h3>

        <p>
          Upload property details, high-quality photos,
          pricing, location, and property features.
        </p>

      </div>

      <div className="process-card">

        <div className="step-number">
          03
        </div>

        <FileCheck size={42} />

        <h3>Verification</h3>

        <p>
          Our team reviews your documents and verifies
          your property before approving the listing.
        </p>

      </div>

      <div className="process-card">

        <div className="step-number">
          04
        </div>

        <SearchCheck size={42} />

        <h3>Go Live</h3>

        <p>
          Your verified property becomes visible to
          thousands of genuine tenants and buyers.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="verification-section">

  <div className="container">

    <span className="section-tag">
      VERIFICATION
    </span>

    <h2>
      What You'll Need Before Your Property Goes Live
    </h2>

    <p className="section-description">
      To maintain a trusted marketplace, every property submitted to
      HouseHub undergoes a verification process. This helps protect
      landlords, agents, buyers, and tenants from fraud.
    </p>

    <div className="verification-grid">

      <div className="verification-card">

        <BadgeCheck size={42} />

        <h3>Identity Verification</h3>

        <p>
          Verify your identity using a valid government-issued ID
          to confirm ownership or authorization to list properties.
        </p>

      </div>

      <div className="verification-card">

        <FileText size={42} />

        <h3>Property Documents</h3>

        <p>
          Submit ownership documents or proof of authorization to
          ensure every listing is genuine and trustworthy.
        </p>

      </div>

      <div className="verification-card">

        <Camera size={42} />

        <h3>Property Photos</h3>

        <p>
          Upload clear, high-quality photos that accurately represent
          your property and help attract serious enquiries.
        </p>

      </div>

      <div className="verification-card">

        <MapPinned size={42} />

        <h3>Property Information</h3>

        <p>
          Provide accurate details including the property's location,
          price, amenities, and description to complete verification.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="verification-banner">

  <div className="container">

    <h2>
      Every Verified Listing Builds Trust
    </h2>

    <p>
      At HouseHub, we verify properties, landlords, and agents before
      listings become public. Our goal is to create a safer property
      marketplace where users can search, rent, buy, and sell with
      confidence.
    </p>

  </div>

</section>

<section className="listing-cta">

  <div className="container">

    <div className="listing-cta-content">

      <span className="section-tag">
        GET STARTED
      </span>

      <h2>
        Ready to List Your Property?
      </h2>

      <p>
        Join HouseHub today and connect with verified tenants,
        buyers, and investors. Start growing your property
        business with confidence.
      </p>

      <div className="listing-cta-buttons">

        <Link
          to="/register"
          className="primary-btn"
        >
          Create an Account

          <ArrowRight size={18} />

        </Link>

        <Link
          to="/login"
          className="secondary-btn"
        >
          Already Have an Account?
        </Link>

      </div>

    </div>

  </div>

</section>

<section className="listing-stats">

  <div className="container">

    <div className="stats-grid">

      <div className="stat-card">

        <h2>100%</h2>

        <p>
          Verified Listings
        </p>

      </div>

      <div className="stat-card">

        <h2>48 hrs</h2>

        <p>
          Average Verification
        </p>

      </div>

      <div className="stat-card">

        <h2>24/7</h2>

        <p>
          Customer Support
        </p>

      </div>

      <div className="stat-card">

        <h2>Secure</h2>

        <p>
          Trusted Platform
        </p>

      </div>

    </div>

  </div>

</section>
      <Footer />
    </>
  );
}