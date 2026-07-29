import "./MaintenanceDetails.css";

import {
  Wrench,
  Flag,
  Home,
  CalendarDays,
  DollarSign,
  MessageSquare,
  Image,
} from "lucide-react";

export default function MaintenanceDetails({
  request = {
    title: "Kitchen Sink Leak",
    category: "Plumbing",
    priority: "High",
    property: "Luxury 3 Bedroom Apartment",
    unit: "Block A • Flat 3",
    reportedDate: "27 Jul 2026",
    estimatedCost: "₦25,000",
    description:
      "The kitchen sink has been leaking continuously for the past two days. Water is dripping beneath the cabinet and causing the floor to remain wet.",
    landlordNote:
      "A plumber has been assigned and will visit within 24 hours.",
    photos: [
      "https://picsum.photos/200?1",
      "https://picsum.photos/200?2",
    ],
  },
}) {
  return (
    <section className="maintenance-details">

      <div className="details-header">

        <h2>{request.title}</h2>

        <span className="priority">
          {request.priority}
        </span>

      </div>

      <div className="details-grid">

        <div className="detail-item">

          <Wrench size={18} />

          <div>

            <small>Category</small>

            <strong>{request.category}</strong>

          </div>

        </div>

        <div className="detail-item">

          <Home size={18} />

          <div>

            <small>Property</small>

            <strong>{request.property}</strong>

          </div>

        </div>

        <div className="detail-item">

          <Home size={18} />

          <div>

            <small>Unit</small>

            <strong>{request.unit}</strong>

          </div>

        </div>

        <div className="detail-item">

          <CalendarDays size={18} />

          <div>

            <small>Reported</small>

            <strong>{request.reportedDate}</strong>

          </div>

        </div>

        <div className="detail-item">

          <DollarSign size={18} />

          <div>

            <small>Estimated Cost</small>

            <strong>{request.estimatedCost}</strong>

          </div>

        </div>

        <div className="detail-item">

          <Flag size={18} />

          <div>

            <small>Priority</small>

            <strong>{request.priority}</strong>

          </div>

        </div>

      </div>

      <div className="detail-section">

        <h3>Description</h3>

        <p>{request.description}</p>

      </div>

      <div className="detail-section">

        <h3>

          <MessageSquare size={18} />

          Landlord Notes

        </h3>

        <p>{request.landlordNote}</p>

      </div>

      <div className="detail-section">

        <h3>

          <Image size={18} />

          Uploaded Photos

        </h3>

        <div className="photo-grid">

          {request.photos.map((photo, index) => (

            <img
              key={index}
              src={photo}
              alt="Maintenance"
            />

          ))}

        </div>

      </div>

    </section>
  );
}