import "./LandlordCard.css";

import {
  Phone,
  Mail,
  MessageCircle,
  ShieldCheck,
  User,
} from "lucide-react";

export default function LandlordCard() {
  return (
    <section className="landlord-card">

      <h2>Landlord</h2>

      <div className="landlord-profile">

        <img
          src="https://ui-avatars.com/api/?name=Cephas+Johnson&background=2563eb&color=fff&size=200"
          alt="Landlord"
        />

        <h3>Cephas Johnson</h3>

        <span className="verified">

          <ShieldCheck size={16} />

          Verified Landlord

        </span>

      </div>

      <div className="landlord-info">

        <div className="info-item">

          <User size={18} />

          <div>

            <small>Name</small>

            <p>Cephas Johnson</p>

          </div>

        </div>

        <div className="info-item">

          <Mail size={18} />

          <div>

            <small>Email</small>

            <p>cephas@househub.ng</p>

          </div>

        </div>

        <div className="info-item">

          <Phone size={18} />

          <div>

            <small>Phone</small>

            <p>+234 812 345 6789</p>

          </div>

        </div>

      </div>

      <div className="landlord-actions">

        <button className="message-btn">

          <MessageCircle size={18} />

          Message

        </button>

        <button className="call-btn">

          <Phone size={18} />

          Call

        </button>

      </div>

    </section>
  );
}