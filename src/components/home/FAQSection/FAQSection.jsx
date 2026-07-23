import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

import "./FAQSection.css";

const faqs = [
  {
    question: "How does HouseHub verify properties?",
    answer:
      "Every listing is reviewed before it becomes visible on HouseHub. We verify ownership documents, property information, and landlord or agent identity to improve trust and reduce scams.",
  },
  {
    question: "Is HouseHub free to use?",
    answer:
      "Yes. Searching properties, creating an account, and browsing listings are completely free for users.",
  },
  {
    question: "Can landlords list their properties?",
    answer:
      "Absolutely. Landlords can create an account, upload properties, manage inquiries, and reach verified tenants directly.",
  },
  {
    question: "How do I report a fake listing?",
    answer:
      "Every property includes a Report Listing button. Our moderation team investigates reports promptly to maintain platform quality.",
  },
  {
    question: "Can I contact the property owner directly?",
    answer:
      "Yes. Verified landlords and agents have secure contact options available directly on each property page.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="home-faq">

      <div className="container">

        <div className="faq-header">

          <span className="section-tag">
            <HelpCircle size={16} />
            FAQs
          </span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before buying,
            renting or listing a property on HouseHub.
          </p>

        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={
                active === index
                  ? "faq-card active"
                  : "faq-card"
              }
            >
              <button
                className="faq-question"
                onClick={() =>
                  setActive(
                    active === index ? null : index
                  )
                }
              >
                <span>{faq.question}</span>

                {active === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {active === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>

        <div className="faq-footer">

          <Link
            to="/faq"
            className="faq-btn"
          >
            View All FAQs

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
}