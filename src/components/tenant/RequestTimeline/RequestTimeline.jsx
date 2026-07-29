import "./RequestTimeline.css";

import {
  Circle,
  CheckCircle2,
} from "lucide-react";

export default function RequestTimeline({
  timeline = [],
}) {
  const demoTimeline = [
    {
      id: 1,
      title: "Request Submitted",
      date: "27 Jul 2026 • 09:15 AM",
      completed: true,
    },
    {
      id: 2,
      title: "Landlord Reviewed Request",
      date: "27 Jul 2026 • 11:30 AM",
      completed: true,
    },
    {
      id: 3,
      title: "Technician Assigned",
      date: "28 Jul 2026 • 10:00 AM",
      completed: true,
    },
    {
      id: 4,
      title: "Repair In Progress",
      date: "29 Jul 2026 • 08:45 AM",
      completed: false,
    },
    {
      id: 5,
      title: "Request Completed",
      date: "Pending",
      completed: false,
    },
  ];

  const items =
    timeline.length > 0
      ? timeline
      : demoTimeline;

  return (
    <section className="request-timeline">

      <div className="timeline-header">

        <h2>Maintenance Timeline</h2>

        <p>
          Track every stage of your request.
        </p>

      </div>

      <div className="timeline">

        {items.map((item, index) => (

          <div
            className="timeline-item"
            key={item.id}
          >

            <div className="timeline-icon">

              {item.completed ? (
                <CheckCircle2 size={22} />
              ) : (
                <Circle size={20} />
              )}

              {index !== items.length - 1 && (
                <div className="timeline-line"></div>
              )}

            </div>

            <div className="timeline-content">

              <h4>{item.title}</h4>

              <span>{item.date}</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}