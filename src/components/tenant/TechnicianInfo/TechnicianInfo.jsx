import "./TechnicianInfo.css";

import {
  User,
  Phone,
  Mail,
  CalendarDays,
  Clock3,
  BadgeCheck,
} from "lucide-react";

export default function TechnicianInfo({
  technician = {
    name: "John Doe",
    profession: "Licensed Plumber",
    phone: "+234 801 234 5678",
    email: "john.doe@househub.com",
    visitDate: "30 Jul 2026",
    visitTime: "10:00 AM",
    status: "Assigned",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
}) {
  return (
    <section className="technician-info">

      <div className="technician-header">

        <h2>Assigned Technician</h2>

        <span className="tech-status">
          <BadgeCheck size={16} />
          {technician.status}
        </span>

      </div>

      <div className="technician-profile">

        <img
          src={technician.avatar}
          alt={technician.name}
        />

        <div>

          <h3>{technician.name}</h3>

          <p>{technician.profession}</p>

        </div>

      </div>

      <div className="technician-details">

        <div className="tech-item">

          <Phone size={18} />

          <div>

            <small>Phone</small>

            <strong>{technician.phone}</strong>

          </div>

        </div>

        <div className="tech-item">

          <Mail size={18} />

          <div>

            <small>Email</small>

            <strong>{technician.email}</strong>

          </div>

        </div>

        <div className="tech-item">

          <CalendarDays size={18} />

          <div>

            <small>Visit Date</small>

            <strong>{technician.visitDate}</strong>

          </div>

        </div>

        <div className="tech-item">

          <Clock3 size={18} />

          <div>

            <small>Arrival Time</small>

            <strong>{technician.visitTime}</strong>

          </div>

        </div>

      </div>

      <div className="technician-footer">

        <button className="contact-btn">

          <Phone size={18} />

          Contact Technician

        </button>

      </div>

    </section>
  );
}