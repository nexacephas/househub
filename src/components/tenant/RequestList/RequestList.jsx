import "./RequestList.css";

import RequestCard from "../RequestCard/RequestCard";

export default function RequestList({
  requests = [],
  loading = false,
}) {
  const data = requests.map((request) => ({
    id: request._id,
    title: request.title,
    category: request.category || request.property?.title || "General",
    priority: request.priority ? request.priority.charAt(0).toUpperCase() + request.priority.slice(1) : "Medium",
    status: request.status === "open" ? "Pending" : request.status === "in_progress" ? "In Progress" : request.status === "resolved" || request.status === "closed" ? "Completed" : request.status,
    createdAt: request.createdAt ? new Date(request.createdAt).toLocaleDateString() : "—",
  }));

  return (
    <section className="request-list">

      <div className="request-list-header">

        <div>

          <h2>My Requests</h2>

          <p>
            Track every maintenance request you've
            submitted.
          </p>

        </div>

      </div>

      {loading ? (

        <div className="request-empty">
          Loading maintenance requests...
        </div>

      ) : data.length === 0 ? (

        <div className="request-empty">
          No maintenance requests found.
        </div>

      ) : (

        <div className="request-cards">

          {data.map((request) => (

            <RequestCard
              key={request.id}
              request={request}
            />

          ))}

        </div>

      )}

    </section>
  );
}