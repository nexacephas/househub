import "./RequestCard.css";

import {
  CalendarDays,
  Wrench,
  Eye,
  Clock3,
  CheckCircle2,
  Hammer,
} from "lucide-react";

export default function RequestCard({
  request,
}) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle2 size={16} />;

      case "In Progress":
        return <Hammer size={16} />;

      default:
        return <Clock3 size={16} />;
    }
  };

  return (
    <div className="request-card">

      <div className="request-card-top">

        <div>

          <h3>{request.title}</h3>

          <span className="category">

            <Wrench size={15} />

            {request.category}

          </span>

        </div>

        <span
          className={`priority ${request.priority
            .toLowerCase()
            .replace(" ", "-")}`}
        >
          {request.priority}
        </span>

      </div>

      <div className="request-meta">

        <div>

          <CalendarDays size={16} />

          {request.createdAt}

        </div>

        <div
          className={`status ${request.status
            .toLowerCase()
            .replace(" ", "-")}`}
        >

          {getStatusIcon(request.status)}

          {request.status}

        </div>

      </div>

      <div className="request-footer">

        <button className="details-btn">

          <Eye size={18} />

          View Details

        </button>

      </div>

    </div>
  );
}