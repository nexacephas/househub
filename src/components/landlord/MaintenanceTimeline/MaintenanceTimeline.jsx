import "./MaintenanceTimeline.css";

import {
  Clock,
  CheckCircle2,
  Wrench,
  UserCheck,
  XCircle,
} from "lucide-react";

export default function MaintenanceTimeline({
  timeline = [],
}) {
  if (!timeline.length) {
    return (
      <div className="maintenance-timeline">

        <h2>Maintenance Timeline</h2>

        <div className="timeline-empty">

          <Clock size={55} />

          <p>No activity recorded yet.</p>

        </div>

      </div>
    );
  }

  function getIcon(status) {
    switch (status?.toLowerCase()) {
      case "created":
        return <Clock size={18} />;

      case "assigned":
        return <UserCheck size={18} />;

      case "in progress":
        return <Wrench size={18} />;

      case "completed":
        return <CheckCircle2 size={18} />;

      case "cancelled":
        return <XCircle size={18} />;

      default:
        return <Clock size={18} />;
    }
  }

  return (
    <div className="maintenance-timeline">

      <h2>Maintenance Timeline</h2>

      <div className="timeline">

        {timeline.map((item, index) => (

          <div
            key={index}
            className="timeline-item"
          >

            <div className="timeline-icon">

              {getIcon(item.status)}

            </div>

            <div className="timeline-content">

              <h4>{item.status}</h4>

              <p>{item.description}</p>

              <span>
                {item.createdAt
                  ? new Date(
                      item.createdAt
                    ).toLocaleString()
                  : ""}
              </span>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}