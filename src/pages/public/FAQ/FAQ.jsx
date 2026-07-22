import { useState } from "react";
import "./FAQ.css";
import faqData from "./faqData";

import {
  Plus,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="faq">

      <div className="container">

        <span className="section-tag">
          FAQs
        </span>

        <h2>
          Frequently Asked Questions
        </h2>

        <p className="section-description">
          Everything you need to know about
          using HouseHub.
        </p>

        <div className="faq-wrapper">

          <div className="faq-left">

            <div className="faq-icon">

              <ShieldCheck />

            </div>

            <h3>
              Built Around Trust
            </h3>

            <p>
              HouseHub is committed to making
              property discovery safer through
              verification, transparency,
              and community trust.
            </p>

          </div>

          <div className="faq-right">

            {faqData.map((item) => (

              <div
                className={
                  active === item.id
                    ? "faq-item active"
                    : "faq-item"
                }
                key={item.id}
              >

                <button
                  className="faq-question"
                  onClick={() => toggle(item.id)}
                >

                  <span>
                    {item.question}
                  </span>

                  <Plus
                    className={
                      active === item.id
                        ? "rotate"
                        : ""
                    }
                  />

                </button>

                <div
                  className={
                    active === item.id
                      ? "faq-answer open"
                      : "faq-answer"
                  }
                >

                  <p>{item.answer}</p>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div className="faq-contact">

          <MessageCircle />

          <span>
            Still have questions?
          </span>

          <a href="#">
            Contact Us
          </a>

        </div>

      </div>

    </section>
  );
}