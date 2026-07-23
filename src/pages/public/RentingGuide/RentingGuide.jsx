import "./RentingGuide.css";

import { Link } from "react-router-dom";

import CTASection from "../../../components/home/CTASection";

import {
  Home,
  KeyRound,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  MessageCircle,
  MapPinned,
  FileText,
  CircleDollarSign,
  Search,
  CalendarCheck,
  CreditCard,
  BadgeCheck,
  Receipt,
  ClipboardList,
  ClipboardCheck,
  PhoneCall,
  Lock,
  Wrench,
  Users,
  Wallet,
  TriangleAlert,
  ImageOff,
  UserX,
  Clock3,
  FileWarning,
  BadgeDollarSign,
  CircleCheck,
   Scale, 
} from "lucide-react";
export default function RentingGuide() {
  return (
    <>
      <section className="renting-hero">

        <div className="hero-overlay"></div>

        <div className="container">

          <div className="renting-content">

            <span className="section-tag">
              RENT WITH CONFIDENCE
            </span>

            <h1>
              Your Complete
              <span> Renting Guide</span>
            </h1>

            <p>
              Learn how to find verified rental properties,
              avoid scams, understand tenancy agreements,
              and move into your next home with confidence.
            </p>

            <div className="hero-buttons">

              <Link
                to="/properties"
                className="btn-primary"
              >
                Browse Rentals
                <ArrowRight size={18}/>
              </Link>

              <Link
                to="/contact"
                className="btn-secondary"
              >
                Get Advice
              </Link>

            </div>

          </div>

          <div className="hero-card">

            <KeyRound size={50}/>

            <h3>
              Renting Made Simple
            </h3>

            <p>
              Verified landlords,
              transparent pricing,
              secure communication,
              and trusted listings.
            </p>

            <div className="hero-features">

              <div>
                <ShieldCheck size={18}/>
                Verified Listings
              </div>

              <div>
                <Home size={18}/>
                Safe Homes
              </div>

              <div>
                <KeyRound size={18}/>
                Secure Renting
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* WHY RENT WITH HOUSEHUB */}

<section className="why-rent">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        WHY HOUSEHUB
      </span>

      <h2>
        Why Rent Through HouseHub?
      </h2>

      <p>
        Renting should be simple, transparent, and secure. HouseHub
        helps you avoid scams while connecting you with verified
        landlords and quality homes across Nigeria.
      </p>

    </div>

    <div className="why-grid">

      <div className="why-card">

        <ShieldCheck size={34} />

        <h3>Verified Listings</h3>

        <p>
          Every property goes through our verification process,
          helping reduce fake listings and rental scams.
        </p>

      </div>

      <div className="why-card">

        <UserCheck size={34} />

        <h3>Verified Landlords</h3>

        <p>
          Rent directly from trusted landlords and verified agents
          with complete transparency.
        </p>

      </div>

      <div className="why-card">

        <MessageCircle size={34} />

        <h3>Direct Communication</h3>

        <p>
          Contact landlords securely without relying on multiple
          middlemen or hidden charges.
        </p>

      </div>

      <div className="why-card">

        <MapPinned size={34} />

        <h3>Accurate Locations</h3>

        <p>
          Every listing includes verified addresses, nearby landmarks,
          and neighborhood information.
        </p>

      </div>

      <div className="why-card">

        <FileText size={34} />

        <h3>Transparent Agreements</h3>

        <p>
          Understand tenancy terms before making payments or signing
          any rental agreement.
        </p>

      </div>

      <div className="why-card">

        <CircleDollarSign size={34} />

        <h3>No Hidden Charges</h3>

        <p>
          View clear pricing with upfront rent, caution fees,
          and additional costs before committing.
        </p>

      </div>

    </div>

  </div>

</section>

{/* RENTING PROCESS */}

<section className="renting-process">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        STEP BY STEP
      </span>

      <h2>
        How Renting Works
      </h2>

      <p>
        Follow these simple steps to rent your next home safely and
        confidently through HouseHub.
      </p>

    </div>

    <div className="timeline">

      <div className="timeline-item">

        <div className="timeline-icon">
          <Search size={24}/>
        </div>

        <div className="timeline-content">

          <h3>1. Search Verified Properties</h3>

          <p>
            Browse thousands of verified rental listings using location,
            budget, property type, and bedroom filters.
          </p>

        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <CalendarCheck size={24}/>
        </div>

        <div className="timeline-content">

          <h3>2. Book an Inspection</h3>

          <p>
            Arrange a physical inspection before making any payment.
            Visit the property and evaluate its condition.
          </p>

        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <FileText size={24}/>
        </div>

        <div className="timeline-content">

          <h3>3. Review the Agreement</h3>

          <p>
            Carefully read the tenancy agreement and understand your
            rights, responsibilities, and payment terms.
          </p>

        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <CreditCard size={24}/>
        </div>

        <div className="timeline-content">

          <h3>4. Pay Securely</h3>

          <p>
            Make payments only after confirming ownership and receiving
            the appropriate documentation.
          </p>

        </div>

      </div>

      <div className="timeline-item">

        <div className="timeline-icon">
          <KeyRound size={24}/>
        </div>

        <div className="timeline-content">

          <h3>5. Move Into Your New Home</h3>

          <p>
            Collect your keys, document the property's condition, and
            enjoy your new home with peace of mind.
          </p>

        </div>

      </div>

    </div>

  </div>

</section>

{/* DOCUMENTS REQUIRED */}

<section className="rent-documents">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        ESSENTIAL DOCUMENTS
      </span>

      <h2>
        Documents Every Tenant Should Have
      </h2>

      <p>
        Before signing a tenancy agreement or making any payment,
        ensure these important documents are available and verified.
      </p>

    </div>

    <div className="documents-grid">

      <div className="document-card">

        <BadgeCheck size={34}/>

        <h3>Valid Identification</h3>

        <p>
          National ID, International Passport,
          Driver's License, or Voter's Card
          for identity verification.
        </p>

      </div>

      <div className="document-card">

        <FileText size={34}/>

        <h3>Tenancy Agreement</h3>

        <p>
          Carefully review and sign a written tenancy agreement
          outlining your rights and responsibilities.
        </p>

      </div>

      <div className="document-card">

        <Receipt size={34}/>

        <h3>Payment Receipt</h3>

        <p>
          Always collect an official receipt
          for rent, caution fees,
          agency fees, and every payment made.
        </p>

      </div>

      <div className="document-card">

        <ClipboardList size={34}/>

        <h3>Inventory List</h3>

        <p>
          Request a list of all fittings,
          appliances, and items included
          with the property.
        </p>

      </div>

      <div className="document-card">

        <ClipboardCheck size={34}/>

        <h3>Inspection Report</h3>

        <p>
          Record the property's condition
          before moving in to avoid
          future disputes.
        </p>

      </div>

      <div className="document-card">

        <PhoneCall size={34}/>

        <h3>Emergency Contacts</h3>

        <p>
          Keep your landlord,
          property manager,
          and maintenance contacts
          readily available.
        </p>

      </div>

    </div>

  </div>

</section>

{/* TENANT RIGHTS & RESPONSIBILITIES */}

<section className="tenant-rights">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        KNOW YOUR RIGHTS
      </span>

      <h2>
        Tenant Rights & Responsibilities
      </h2>

      <p>
        Renting is a partnership between tenants and landlords.
        Understanding your rights and responsibilities helps create
        a smooth and stress-free rental experience.
      </p>

    </div>

    <div className="rights-grid">

      {/* RIGHTS */}

      <div className="rights-card">

        <h3>
          Your Rights
        </h3>

        <ul>

          <li>
            <ShieldCheck size={20}/>
            Live in a safe and habitable home.
          </li>

          <li>
            <Lock size={20}/>
            Enjoy privacy without unlawful entry.
          </li>

          <li>
            <FileText size={20}/>
            Receive a written tenancy agreement.
          </li>

          <li>
            <Scale size={20}/>
            Be treated fairly and without discrimination.
          </li>

          <li>
            <Wrench size={20}/>
            Request essential repairs when necessary.
          </li>

        </ul>

      </div>

      {/* RESPONSIBILITIES */}

      <div className="rights-card responsibilities">

        <h3>
          Your Responsibilities
        </h3>

        <ul>

          <li>
            <Wallet size={20}/>
            Pay rent and agreed fees on time.
          </li>

          <li>
            <Home size={20}/>
            Keep the property clean and maintained.
          </li>

          <li>
            <Users size={20}/>
            Respect neighbours and community rules.
          </li>

          <li>
            <TriangleAlert size={20}/>
            Report damages promptly.
          </li>

          <li>
            <KeyRound size={20}/>
            Return the property in good condition when leaving.
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>


{/* RENTAL SCAMS */}

<section className="rental-scams">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        STAY SAFE
      </span>

      <h2>
        Common Rental Scams & How to Avoid Them
      </h2>

      <p>
        Rental fraud is unfortunately common. Learn to identify warning
        signs and protect yourself before making any payment.
      </p>

    </div>

    <div className="scams-grid">

      <div className="scam-card">

        <TriangleAlert size={34}/>

        <h3>
          Never Pay Before Inspection
        </h3>

        <p>
          Always inspect the property physically before transferring
          money. Avoid excuses that prevent inspections.
        </p>

      </div>

      <div className="scam-card">

        <ImageOff size={34}/>

        <h3>
          Beware of Fake Photos
        </h3>

        <p>
          Some scammers reuse pictures from other listings.
          Verify the property in person.
        </p>

      </div>

      <div className="scam-card">

        <UserX size={34}/>

        <h3>
          Verify the Landlord
        </h3>

        <p>
          Request identification and verify ownership or agency
          credentials before making commitments.
        </p>

      </div>

      <div className="scam-card">

        <Clock3 size={34}/>

        <h3>
          Avoid Pressure Tactics
        </h3>

        <p>
          Be cautious if you're told to pay immediately because
          "another tenant is waiting."
        </p>

      </div>

      <div className="scam-card">

        <FileWarning size={34}/>

        <h3>
          Don't Rent Without an Agreement
        </h3>

        <p>
          Every rental should include a written tenancy agreement
          that clearly states the terms.
        </p>

      </div>

      <div className="scam-card">

        <BadgeDollarSign size={34}/>

        <h3>
          Watch for Hidden Charges
        </h3>

        <p>
          Confirm all fees—including agency, legal, caution, and
          service charges—before making payment.
        </p>

      </div>

    </div>

    <div className="safety-note">

      <ShieldCheck size={26}/>

      <div>

        <h3>HouseHub Safety Tip</h3>

        <p>
          HouseHub verifies listings, landlords, and property
          information to reduce fraud and help you rent with
          confidence.
        </p>

      </div>

    </div>

  </div>

</section>

{/* MOVE-IN CHECKLIST */}

<section className="move-checklist">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        BEFORE YOU MOVE IN
      </span>

      <h2>
        Tenant Move-In Checklist
      </h2>

      <p>
        Before collecting your keys, make sure you've completed these
        important steps to avoid future problems.
      </p>

    </div>

    <div className="checklist-grid">

      <div className="checklist-card">

        <CircleCheck size={26}/>

        <h3>Inspect Every Room</h3>

        <p>
          Check the walls, ceilings, doors, windows,
          plumbing, electrical fittings and appliances.
        </p>

      </div>

      <div className="checklist-card">

        <CircleCheck size={26}/>

        <h3>Test Utilities</h3>

        <p>
          Confirm that water, electricity,
          internet availability and drainage
          are working properly.
        </p>

      </div>

      <div className="checklist-card">

        <CircleCheck size={26}/>

        <h3>Document Existing Damage</h3>

        <p>
          Take photos and videos of any damages
          before moving in.
        </p>

      </div>

      <div className="checklist-card">

        <CircleCheck size={26}/>

        <h3>Collect Every Key</h3>

        <p>
          Ensure you receive keys for doors,
          gates, mailboxes and any security access.
        </p>

      </div>

      <div className="checklist-card">

        <CircleCheck size={26}/>

        <h3>Keep All Documents Safe</h3>

        <p>
          Store your tenancy agreement,
          receipts and landlord contacts securely.
        </p>

      </div>

      <div className="checklist-card">

        <CircleCheck size={26}/>

        <h3>Know Emergency Contacts</h3>

        <p>
          Save maintenance numbers,
          landlord details and emergency services.
        </p>

      </div>

    </div>

  </div>

</section>

{/* RENTING FAQ */}

<section className="renting-faq">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        RENTING FAQ
      </span>

      <h2>
        Frequently Asked Questions
      </h2>

      <p>
        Everything you need to know before renting your next home.
      </p>

    </div>

    <div className="faq-list">

      <details open>

        <summary>
          Can I rent without using an agent?
        </summary>

        <p>
          Yes. HouseHub allows you to connect directly with verified
          landlords and property owners, helping reduce unnecessary
          agent fees.
        </p>

      </details>

      <details>

        <summary>
          Should I inspect the property before paying?
        </summary>

        <p>
          Absolutely. Never make payment before physically inspecting
          the property and confirming that everything matches the listing.
        </p>

      </details>

      <details>

        <summary>
          What documents should I receive?
        </summary>

        <p>
          You should receive a tenancy agreement, payment receipt,
          and any supporting documents related to the property.
        </p>

      </details>

      <details>

        <summary>
          Who is responsible for repairs?
        </summary>

        <p>
          Minor maintenance may be the tenant's responsibility,
          while major structural repairs are generally handled by
          the landlord, depending on the tenancy agreement.
        </p>

      </details>

      <details>

        <summary>
          How does HouseHub verify listings?
        </summary>

        <p>
          Listings undergo identity verification, document checks,
          property verification, and community reporting before
          receiving a verified badge.
        </p>

      </details>

      <details>

        <summary>
          What should I do if I suspect a fake listing?
        </summary>

        <p>
          Do not make any payment. Report the listing immediately
          through HouseHub so our team can investigate.
        </p>

      </details>

      <details>

        <summary>
          Can a landlord increase my rent anytime?
        </summary>

        <p>
          Rent increases should follow the tenancy agreement and
          applicable tenancy laws. Review your contract carefully
          before signing.
        </p>

      </details>

      <details>

        <summary>
          Does HouseHub charge tenants?
        </summary>

        <p>
          Browsing listings is free. Some premium services may be
          introduced in the future, but standard property search
          remains accessible.
        </p>

      </details>

    </div>

  </div>

</section>


      {/* CALL TO ACTION */}

      <CTASection />

    </>
  );
}