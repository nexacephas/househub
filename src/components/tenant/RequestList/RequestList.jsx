import "./RequestList.css";

import RequestCard from "../RequestCard/RequestCard";

export default function RequestList({
  requests = [],
  loading = false,
}) {
  const demoRequests = [
    {
      id: 1,
      title: "Kitchen Sink Leak",
      category: "Plumbing",
      priority: "High",
      status: "Pending",
      createdAt: "27 Jul 2026",
    },
    {
      id: 2,
      title: "Bedroom Light Not Working",
      category: "Electrical",
      priority: "Medium",
      status: "In Progress",
      createdAt: "24 Jul 2026",
    },
    {
      id: 3,
      title: "Broken Window Lock",
      category: "Security",
      priority: "Low",
      status: "Completed",
      createdAt: "19 Jul 2026",
    },
  ];

  const data =
    requests.length > 0
      ? requests
      : demoRequests;

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