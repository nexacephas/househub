import "./BuyingGuide.css";

import { Link } from "react-router-dom";

import CTASection from "../../../components/home/CTASection";

import {
  Home,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Building2,
  Wallet,
  Search,
  MapPinned,
  FileCheck,
  Handshake,
  Scale,
  CreditCard,
  CircleCheck,
  TriangleAlert,
  FileWarning,
  BadgeDollarSign,
  UserX,
  Clock3,
  Lightbulb,
  Briefcase,
  FolderCheck,
} from "lucide-react";
export default function BuyingGuide() {
  return (
    <main className="buying-guide">

      {/* HERO */}

      <section className="buying-hero">

        <div className="hero-overlay"></div>

        <div className="container">

          <div className="buying-content">

            <span className="guide-tag">

              <ShieldCheck size={18} />

              HouseHub Buying Guide

            </span>

            <h1>

              Buy Your Dream Home

              <span> With Confidence</span>

            </h1>

            <p>

              Whether you're a first-time buyer or an experienced
              investor, this guide walks you through every step of
              purchasing a verified property in Nigeria safely,
              confidently, and transparently.

            </p>

            <div className="hero-buttons">

              <Link
                to="/properties"
                className="primary-btn"
              >
                Browse Properties

                <ArrowRight size={18} />

              </Link>

              <Link
                to="/contact"
                className="secondary-btn"
              >
                Contact an Expert
              </Link>

            </div>

          </div>

          {/* Right Side */}

          <div className="hero-cards">

            <div className="info-card">

              <BadgeCheck />

              <div>

                <h3>Verified Properties</h3>

                <p>Only trusted listings</p>

              </div>

            </div>

            <div className="info-card">

              <Building2 />

              <div>

                <h3>Expert Guidance</h3>

                <p>Step-by-step buying process</p>

              </div>

            </div>

            <div className="info-card">

              <Home />

              <div>

                <h3>Secure Ownership</h3>

                <p>Buy with complete confidence</p>

              </div>

            </div>

          </div>

        </div>

      </section>
{/* BUYING PROCESS */}

<section className="buying-process">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        STEP BY STEP
      </span>

      <h2>
        Your Home Buying Journey
      </h2>

      <p>
        Follow these eight simple steps to purchase a property safely
        and confidently with HouseHub.
      </p>

    </div>

    <div className="process-grid">

      <div className="process-card">

        <div className="process-number">01</div>

        <Wallet size={34} />

        <h3>Set Your Budget</h3>

        <p>
          Determine what you can comfortably afford,
          including legal fees and other expenses.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">02</div>

        <Search size={34} />

        <h3>Search Properties</h3>

        <p>
          Explore verified listings using filters for
          location, price and property type.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">03</div>

        <MapPinned size={34} />

        <h3>Schedule Inspection</h3>

        <p>
          Visit the property and inspect the surroundings
          before making any commitment.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">04</div>

        <FileCheck size={34} />

        <h3>Verify Documents</h3>

        <p>
          Ensure all ownership documents are genuine and
          legally valid.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">05</div>

        <Handshake size={34} />

        <h3>Negotiate</h3>

        <p>
          Discuss pricing and payment terms with the
          seller or verified agent.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">06</div>

        <Scale size={34} />

        <h3>Legal Review</h3>

        <p>
          Have a qualified lawyer review every agreement
          before signing.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">07</div>

        <CreditCard size={34} />

        <h3>Make Payment</h3>

        <p>
          Complete payments securely using documented
          and traceable methods.
        </p>

      </div>

      <div className="process-card">

        <div className="process-number">08</div>

        <Home size={34} />

        <h3>Receive Ownership</h3>

        <p>
          Collect all legal documents and take possession
          of your new property.
        </p>

      </div>

    </div>

  </div>

</section>
{/* FINANCING OPTIONS */}

<section className="financing-section">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        FINANCING OPTIONS
      </span>

      <h2>
        Choose the Best Payment Option
      </h2>

      <p>
        Buying a property doesn't always mean paying everything at once.
        Explore the financing options available to help you own your dream home.
      </p>

    </div>

    <div className="finance-grid">

      <div className="finance-card">

        <div className="finance-icon">
          <Building2 size={36} />
        </div>

        <h3>Mortgage</h3>

        <p>
          Purchase your home through monthly repayments offered by
          mortgage institutions and partner banks.
        </p>

        <ul>
          <li>✔ Lower upfront cost</li>
          <li>✔ Flexible repayment</li>
          <li>✔ Suitable for salaried workers</li>
        </ul>

      </div>

      <div className="finance-card">

        <div className="finance-icon">
          <Wallet size={36} />
        </div>

        <h3>Cash Purchase</h3>

        <p>
          Pay the full amount immediately and receive ownership after
          completing all legal documentation.
        </p>

        <ul>
          <li>✔ Faster transactions</li>
          <li>✔ No loan interest</li>
          <li>✔ Better negotiation power</li>
        </ul>

      </div>

      <div className="finance-card">

        <div className="finance-icon">
          <CreditCard size={36} />
        </div>

        <h3>Installment Plan</h3>

        <p>
          Spread payments over an agreed period while construction
          or documentation is completed.
        </p>

        <ul>
          <li>✔ Easier budgeting</li>
          <li>✔ Flexible payment schedule</li>
          <li>✔ Popular for new developments</li>
        </ul>

      </div>

      <div className="finance-card">

        <div className="finance-icon">
          <Handshake size={36} />
        </div>

        <h3>Developer Financing</h3>

        <p>
          Some developers offer direct financing with minimal
          documentation and convenient payment plans.
        </p>

        <ul>
          <li>✔ Less paperwork</li>
          <li>✔ Faster approval</li>
          <li>✔ Buyer-friendly plans</li>
        </ul>

      </div>

    </div>

  </div>

</section>
{/* DOCUMENT CHECKLIST */}

<section className="documents-section">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        LEGAL CHECKLIST
      </span>

      <h2>
        Documents Every Buyer Should Verify
      </h2>

      <p>
        Never make payment until these documents have been verified.
        HouseHub encourages every buyer to work with qualified legal
        professionals before completing a transaction.
      </p>

    </div>

    <div className="documents-grid">

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Certificate of Occupancy (C of O)</h3>
          <p>Confirms the government's legal recognition of the property.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Survey Plan</h3>
          <p>Shows the property's exact location and boundaries.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Deed of Assignment</h3>
          <p>Transfers ownership rights from seller to buyer.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Approved Building Plan</h3>
          <p>Ensures the property was developed legally.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Tax Clearance</h3>
          <p>Confirms outstanding taxes have been settled.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Seller Identification</h3>
          <p>Verify the identity of the property owner.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Purchase Receipt</h3>
          <p>Keep every payment receipt as legal evidence.</p>
        </div>
      </div>

      <div className="document-card">
        <CircleCheck size={26}/>
        <div>
          <h3>Government Approval</h3>
          <p>Ensure the property isn't under acquisition or dispute.</p>
        </div>
      </div>

    </div>

    <div className="warning-box">

    <TriangleAlert size={28}/>

    <div>

        <h3>Never Pay Before Verification</h3>

        <p>
            HouseHub strongly advises buyers to inspect the property,
            verify ownership documents, and consult a qualified lawyer
            before making any payment. This helps reduce fraud and
            ensures a secure transaction.
        </p>

    </div>

</div>

  </div>

</section>

{/* COMMON MISTAKES */}

<section className="mistakes-section">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        AVOID THESE MISTAKES
      </span>

      <h2>
        Common Property Buying Mistakes
      </h2>

      <p>
        Avoid costly mistakes that many first-time property buyers make.
        These simple precautions can save you money, stress, and legal issues.
      </p>

    </div>

    <div className="mistakes-grid">

      <div className="mistake-card">

        <TriangleAlert size={32}/>

        <h3>Paying Before Inspection</h3>

        <p>
          Never transfer money without physically inspecting the property
          and confirming its condition.
        </p>

      </div>

      <div className="mistake-card">

        <FileWarning size={32}/>

        <h3>Ignoring Legal Documents</h3>

        <p>
          Always verify ownership documents before signing any agreement.
        </p>

      </div>

      <div className="mistake-card">

        <MapPinned size={32}/>

        <h3>Ignoring the Neighborhood</h3>

        <p>
          Visit the area during the day and at night before making a decision.
        </p>

      </div>

      <div className="mistake-card">

        <BadgeDollarSign size={32}/>

        <h3>Buying Above Budget</h3>

        <p>
          Remember to account for legal fees, taxes, and maintenance costs.
        </p>

      </div>

      <div className="mistake-card">

        <UserX size={32}/>

        <h3>Trusting Unverified Sellers</h3>

        <p>
          Deal only with verified landlords, agents, or developers.
        </p>

      </div>

      <div className="mistake-card">

        <Clock3 size={32}/>

        <h3>Rushing the Process</h3>

        <p>
          Take your time to compare properties before making a final decision.
        </p>

      </div>

    </div>

  </div>

</section>

{/* SMART BUYER TIPS */}

<section className="tips-section">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        SMART BUYER TIPS
      </span>

      <h2>
        Tips for a Successful Property Purchase
      </h2>

      <p>
        Follow these expert recommendations to make informed decisions
        and enjoy a smooth property buying experience.
      </p>

    </div>

    <div className="tips-grid">

      <div className="tip-card">

        <Lightbulb size={34} />

        <h3>Inspect More Than Once</h3>

        <p>
          Visit the property at different times of the day to check
          traffic, security, noise levels, and neighborhood activity.
        </p>

      </div>

      <div className="tip-card">

        <Scale size={34} />

        <h3>Compare Multiple Listings</h3>

        <p>
          Never rush into buying the first property you see.
          Compare features, prices, and locations carefully.
        </p>

      </div>

      <div className="tip-card">

        <BadgeCheck size={34} />

        <h3>Choose Verified Listings</h3>

        <p>
          Prioritize verified properties to reduce the risk of scams
          and fraudulent transactions.
        </p>

      </div>

      <div className="tip-card">

        <Briefcase size={34} />

        <h3>Hire a Property Lawyer</h3>

        <p>
          A qualified lawyer can verify documents, protect your
          interests, and guide you through the legal process.
        </p>

      </div>

      <div className="tip-card">

        <Handshake size={34} />

        <h3>Negotiate Before Paying</h3>

        <p>
          Many sellers are willing to negotiate. Discuss the price
          before making any commitment.
        </p>

      </div>

      <div className="tip-card">

        <FolderCheck size={34} />

        <h3>Keep Every Document</h3>

        <p>
          Save receipts, agreements, inspection reports, and all
          transaction records for future reference.
        </p>

      </div>

    </div>

  </div>

</section>

{/* BUYING FAQ */}

<section className="buying-faq">

  <div className="container">

    <div className="section-heading">

      <span className="section-tag">
        BUYER QUESTIONS
      </span>

      <h2>
        Frequently Asked Questions
      </h2>

      <p>
        Here are answers to the most common questions buyers ask before
        purchasing a property through HouseHub.
      </p>

    </div>

    <div className="faq-list">

      <details>

        <summary>
          How much should I budget apart from the property price?
        </summary>

        <p>
          Apart from the purchase price, budget for legal fees,
          documentation, survey fees, registration costs,
          and possible agency or inspection charges.
        </p>

      </details>

      <details>

        <summary>
          Should I hire a lawyer?
        </summary>

        <p>
          Yes. A qualified property lawyer helps verify ownership,
          review contracts, and protect your interests throughout
          the buying process.
        </p>

      </details>

      <details>

        <summary>
          What documents should I verify before payment?
        </summary>

        <p>
          Verify the Certificate of Occupancy (C of O),
          Survey Plan, Deed of Assignment,
          Approved Building Plan, and every ownership document.
        </p>

      </details>

      <details>

        <summary>
          How do I know if a listing is genuine?
        </summary>

        <p>
          Look for HouseHub verification badges,
          inspect the property physically,
          and confirm ownership before making any payment.
        </p>

      </details>

      <details>

        <summary>
          Can I negotiate the asking price?
        </summary>

        <p>
          Yes. Many sellers are open to negotiation.
          Compare similar properties and negotiate respectfully.
        </p>

      </details>

      <details>

        <summary>
          How long does the buying process usually take?
        </summary>

        <p>
          Depending on documentation and payment method,
          the process may take anywhere from a few days
          to several weeks.
        </p>

      </details>

    </div>

  </div>

</section>
<CTASection />
    </main>
  );
}