import { useState } from "react";
import "./FAQ.css";

import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Home,
  Building2,
  BadgeCheck,
} from "lucide-react";

const faqs = [
  {
    question: "How does HouseHub verify properties?",
    answer:
      "Every property goes through our verification process before being published. We review ownership documents, property information, and landlord or agent identity to reduce scams and fake listings.",
  },
  {
    question: "Do I have to pay an agent before viewing a property?",
    answer:
      "No. HouseHub encourages transparent transactions. Any inspection fees or agency fees will always be clearly stated on the listing before you proceed.",
  },
  {
    question: "Can landlords list properties for free?",
    answer:
      "Yes. Landlords can create an account and publish listings. Premium visibility and promotional features are available as optional upgrades.",
  },
  {
    question: "How do I report a fake listing?",
    answer:
      "Every property page includes a Report Listing button. Our moderation team investigates reported listings immediately.",
  },
  {
    question: "Can I contact a property owner directly?",
    answer:
      "Yes. Verified landlords and agents provide secure contact options directly on the property page.",
  },
  {
    question: "Does HouseHub operate across Nigeria?",
    answer:
      "Yes. We are expanding nationwide with verified listings across major cities including Abuja, Lagos, Port Harcourt, Kano, Ibadan and more.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <main className="faq-page">
      {/* HERO */}

      <section className="faq-hero">

        <span className="faq-tag">
          <HelpCircle size={16} />
          Frequently Asked Questions
        </span>

        <h1>
          Everything You Need to Know
        </h1>

        <p>
          Find answers about buying, renting, listing properties,
          verification, payments, and using HouseHub safely.
        </p>

      </section>

      {/* FAQ */}

      <section className="faq-section">

        <div className="faq-list">

          {faqs.map((item, index) => (
            <div
              className={
                active === index
                  ? "faq-item active"
                  : "faq-item"
              }
              key={index}
            >

              <button
                className="faq-question"
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
              >

                <span>{item.question}</span>

                {active === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}

              </button>

              {active === index && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}

            </div>
          ))}

        </div>

      </section>

      {/* HELP CARDS */}

      <section className="faq-help">

        <div className="help-card">

          <ShieldCheck size={40} />

          <h3>Verified Listings</h3>

          <p>
            Every listing is reviewed before publication
            to improve trust and transparency.
          </p>

        </div>

        <div className="help-card">

          <Home size={40} />

          <h3>Buy or Rent</h3>

          <p>
            Discover thousands of homes, apartments,
            offices and commercial properties.
          </p>

        </div>

        <div className="help-card">

          <Building2 size={40} />

          <h3>For Landlords</h3>

          <p>
            Reach verified tenants and manage listings
            from one secure dashboard.
          </p>

        </div>

        <div className="help-card">

          <BadgeCheck size={40} />

          <h3>Trusted Platform</h3>

          <p>
            HouseHub is built to make property
            transactions safer across Nigeria.
          </p>

        </div>

      </section>

    </main>
  );
}