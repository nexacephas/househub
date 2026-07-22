import "./About.css";
import {
  ChevronRight,
  ShieldCheck,
  Lightbulb,
  Handshake,
  Globe,
  FileCheck,
  UserCheck,
  Search,
  BadgeCheck,
  Building2,
} from "lucide-react";
export default function About() {
  return (
    <main className="about">

      <section className="about-hero">

        <div className="container">

          <div className="breadcrumb">

            <span>Home</span>

            <ChevronRight size={16} />

            <span>About</span>

          </div>

          <span className="section-tag">
            ABOUT HOUSEHUB
          </span>

          <h1>
            Building Trust in Every
            <span> Home Search.</span>
          </h1>

          <p>
            HouseHub is redefining property discovery in Nigeria by
            connecting buyers, renters, landlords, agents, and investors
            through verified listings, transparent processes, and modern
            technology.
          </p>

        </div>

      </section>

      {/* Next Section */}
     <section className="story">

  <div className="container">

    <span className="section-tag">
      OUR STORY
    </span>

    <h2>
      Why HouseHub Exists
    </h2>

    <p className="story-intro">
      Finding a home in Nigeria should be exciting, not stressful.
      Yet thousands of people lose money to fake listings, dishonest
      agents, inflated fees, and misleading property information every
      year. The process is often slow, confusing, and built on trust
      that doesn't always exist.
    </p>

    <p>
      HouseHub was created to change that.
      We believe everyone deserves access to verified properties,
      transparent pricing, and trustworthy professionals.
      By combining technology with a rigorous verification process,
      we're building a platform where people can search, rent,
      buy, and invest with confidence.
    </p>

    <p>
      Our mission isn't just to list properties—it's to rebuild
      trust in the real estate ecosystem and create a safer,
      smarter experience for tenants, landlords, agents,
      developers, and investors across Nigeria.
    </p>

  </div>

</section>

<section className="mission-vision">

  <div className="container">

    <span className="section-tag">
      OUR PURPOSE
    </span>

    <h2>
      Our Mission & Vision
    </h2>

    <p className="section-description">
      Everything we build is guided by a single goal: making property
      discovery safer, simpler, and more transparent for everyone.
    </p>

    <div className="mission-grid">

      <div className="mission-card">

        <div className="card-icon">
          🎯
        </div>

        <h3>Our Mission</h3>

        <p>
          To simplify property discovery through technology, trust,
          and verification while empowering people to rent, buy,
          sell, and invest with complete confidence.
        </p>

      </div>

      <div className="mission-card">

        <div className="card-icon">
          🌍
        </div>

        <h3>Our Vision</h3>

        <p>
          To become Africa's most trusted PropTech platform,
          connecting millions of people with verified properties,
          reliable professionals, and secure real estate opportunities.
        </p>

      </div>

    </div>

  </div>

</section>


<section className="values">

  <div className="container">

    <span className="section-tag">
      OUR VALUES
    </span>

    <h2>
      The Principles That Guide HouseHub
    </h2>

    <p className="section-description">
      Every decision we make is driven by values that help us create a
      safer, smarter, and more transparent property experience.
    </p>

    <div className="values-grid">

      <div className="value-card">

        <div className="value-icon">
          <ShieldCheck size={34} />
        </div>

        <h3>Trust</h3>

        <p>
          We prioritize verified identities, authentic listings,
          and reliable information so users can make confident
          property decisions.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <Lightbulb size={34} />
        </div>

        <h3>Innovation</h3>

        <p>
          We use technology to simplify property discovery,
          improve verification, and create better experiences
          for everyone.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <Handshake size={34} />
        </div>

        <h3>Transparency</h3>

        <p>
          Honest communication, clear pricing, and accurate
          property information are at the heart of everything
          we do.
        </p>

      </div>

      <div className="value-card">

        <div className="value-icon">
          <Globe size={34} />
        </div>

        <h3>Community</h3>

        <p>
          We are building a platform where tenants, landlords,
          agents, developers, and investors can connect with
          confidence.
        </p>

      </div>

    </div>

  </div>

</section>

<section className="verification">

  <div className="container">

    <span className="section-tag">
      VERIFICATION PROCESS
    </span>

    <h2>
      How HouseHub Verifies Every Property
    </h2>

    <p className="section-description">
      Trust starts with verification. Before a property appears on
      HouseHub, it goes through a structured review process designed
      to reduce fraud and improve confidence for everyone.
    </p>

    <div className="verification-grid">

      <div className="verify-card">

        <div className="verify-icon">
          <Building2 size={30}/>
        </div>

        <h3>1. Property Submission</h3>

        <p>
          Landlords or registered agents submit property details,
          photographs, location, and ownership information.
        </p>

      </div>

      <div className="verify-card">

        <div className="verify-icon">
          <UserCheck size={30}/>
        </div>

        <h3>2. Identity Verification</h3>

        <p>
          Property owners and agents verify their identity using
          official documentation before listings can proceed.
        </p>

      </div>

      <div className="verify-card">

        <div className="verify-icon">
          <FileCheck size={30}/>
        </div>

        <h3>3. Document Review</h3>

        <p>
          Ownership documents and supporting records are reviewed
          to ensure the property information is accurate.
        </p>

      </div>

      <div className="verify-card">

        <div className="verify-icon">
          <Search size={30}/>
        </div>

        <h3>4. Quality Checks</h3>

        <p>
          Our team reviews listing quality, property details,
          location accuracy, and supporting evidence before approval.
        </p>

      </div>

      <div className="verify-card full-width">

        <div className="verify-icon">
          <BadgeCheck size={32}/>
        </div>

        <div>

          <h3>5. Verified & Published</h3>

          <p>
            Once approved, the property receives a Verified Badge and
            becomes visible to buyers and renters on HouseHub, giving
            users greater confidence when making decisions.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

<section className="comparison">

  <div className="container">

    <span className="section-tag">
      WHY HOUSEHUB
    </span>

    <h2>
      A Better Way to Find Property
    </h2>

    <p className="section-description">
      Traditional property searches often involve uncertainty,
      hidden costs, and unreliable information. HouseHub was
      designed to create a safer and more transparent experience.
    </p>

    <div className="comparison-grid">

      <div className="comparison-card traditional">

        <h3>Traditional Property Search</h3>

        <ul>

          <li>❌ Fake or duplicated listings</li>

          <li>❌ Unverified landlords and agents</li>

          <li>❌ Hidden agency fees</li>

          <li>❌ Inaccurate property information</li>

          <li>❌ Limited transparency</li>

          <li>❌ Higher risk of scams</li>

        </ul>

      </div>

      <div className="comparison-card househub">

        <h3>With HouseHub</h3>

        <ul>

          <li>✅ Verified property listings</li>

          <li>✅ Identity-verified landlords & agents</li>

          <li>✅ Transparent information</li>

          <li>✅ Easy property discovery</li>

          <li>✅ Community reporting & reviews</li>

          <li>✅ Built with trust at the center</li>

        </ul>

      </div>

    </div>

  </div>

</section>

<section className="roadmap">

  <div className="container">

    <span className="section-tag">
      OUR JOURNEY
    </span>

    <h2>
      Building the Future of Property Discovery
    </h2>

    <p className="section-description">
      HouseHub is starting with a clear vision and a practical roadmap.
      Every milestone brings us closer to creating Africa's most trusted
      property platform.
    </p>

    <div className="roadmap-grid">

      <div className="roadmap-item">
        <div className="roadmap-number">01</div>

        <h3>Launch MVP</h3>

        <p>
          Launch the first version of HouseHub with verified property
          listings and user accounts.
        </p>
      </div>

      <div className="roadmap-item">
        <div className="roadmap-number">02</div>

        <h3>University Communities</h3>

        <p>
          Begin by solving accommodation challenges around universities
          across Nigeria.
        </p>
      </div>

      <div className="roadmap-item">
        <div className="roadmap-number">03</div>

        <h3>Expand to Abuja</h3>

        <p>
          Introduce verified residential and commercial listings across
          the Federal Capital Territory.
        </p>
      </div>

      <div className="roadmap-item">
        <div className="roadmap-number">04</div>

        <h3>Nationwide Growth</h3>

        <p>
          Scale HouseHub to every state while continuously improving
          verification and user experience.
        </p>
      </div>

    </div>

  </div>

</section>
    </main>
  );
}