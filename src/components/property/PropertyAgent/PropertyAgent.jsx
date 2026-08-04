import "./PropertyAgent.css";

import { useState } from "react";

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

import toast from "react-hot-toast";

import { createInquiry } from "../../../services/inquiry.service";

export default function PropertyAgent({ property }) {

  const landlord = property.owner || {};

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      await createInquiry(property._id, {
        subject: "Property Inquiry",
        message: form.message,
      });

      toast.success("Message sent successfully.");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      toast.error(
        error.response?.data?.message ||
          "Unable to send inquiry."
      );

    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="property-agent">

      <div className="property-agent-container">

        <div className="agent-layout">

          {/* LEFT */}

          <div className="agent-card">

            <img
              src={
                landlord.avatar ||
                "https://i.pravatar.cc/300"
              }
              alt={landlord.firstName}
            />

            <div className="agent-info">

              <span className="verified">

                <BadgeCheck size={18} />

                Verified Landlord

              </span>

              <h2>
                {landlord.firstName} {landlord.lastName}
              </h2>

              <p>Property Owner</p>

              <div className="agent-stats">

                <div>

                  <Star size={18} />

                  <strong>5.0</strong>

                  <small>Rating</small>

                </div>

                <div>

                  <Building2 size={18} />

                  <strong>--</strong>

                  <small>Listings</small>

                </div>

                <div>

                  <Clock3 size={18} />

                  <strong>Fast</strong>

                  <small>Response</small>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="contact-card">

            <h3>Contact Landlord</h3>

            {landlord.phone && (
              <a
                href={`tel:${landlord.phone}`}
                className="call-btn"
              >
                <Phone size={18} />
                Call
              </a>
            )}

            {landlord.phone && (
              <a
                href={`https://wa.me/${landlord.phone}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-btn"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            )}

            {landlord.email && (
              <a
                href={`mailto:${landlord.email}`}
                className="email-btn"
              >
                <Mail size={18} />
                Email
              </a>
            )}

            <button
              className="inspection-btn"
            >
              <Calendar size={18} />

              Book Inspection

            </button>

            <form
              className="agent-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />

              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
              />

              <textarea
                rows="5"
                placeholder="I'm interested in this property..."
                value={form.message}
                onChange={(e) =>
                  setForm({
                    ...form,
                    message: e.target.value,
                  })
                }
              />

              <button
                type="submit"
                disabled={loading}
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}