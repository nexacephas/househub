import "./PropertyAgent.css";

import {
  BadgeCheck,
  Phone,
  Mail,
  Calendar,
  Star,
  Building2,
  Clock3,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

export default function PropertyAgent() {
  return (
    <section className="property-agent">

      <div className="container">

        <div className="agent-layout">

          {/* Left */}

          <div className="agent-card">

            <img
              src="https://i.pravatar.cc/300?img=32"
              alt="Agent"
            />

            <div className="agent-info">

              <span className="verified">

                <BadgeCheck size={18} />

                Verified Agent

              </span>

              <h2>Daniel Musa</h2>

              <p>
                Premium Real Estate Consultant
              </p>

              <div className="agent-stats">

                <div>
                  <Star size={18} />
                  <strong>4.9</strong>
                  <small>Rating</small>
                </div>

                <div>
                  <Building2 size={18} />
                  <strong>132</strong>
                  <small>Listings</small>
                </div>

                <div>
                  <Clock3 size={18} />
                  <strong>15 mins</strong>
                  <small>Response</small>
                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="contact-card">

            <h3>Contact Agent</h3>

            <button className="call-btn">

              <Phone size={18} />

              Call Agent

            </button>

            <button className="whatsapp-btn">

              <FaWhatsapp />

              WhatsApp

            </button>

            <button className="email-btn">

              <Mail size={18} />

              Send Email

            </button>

            <button className="inspection-btn">

              <Calendar size={18} />

              Book Inspection

            </button>

            <form className="agent-form">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <textarea
                rows="5"
                placeholder="I'm interested in this property..."
              />

              <button type="submit">

                Send Message

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}