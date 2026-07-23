import "./RecentActivity.css";

export default function RecentActivity({
  title = "Recent Activity",
  activities = [],
}) {
  return (
    <div className="recent-activity">
      <div className="recent-activity-header">
        <h3>{title}</h3>
      </div>

      <div className="recent-activity-list">
        {activities.length === 0 ? (
          <p className="empty-state">No recent activity.</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="activity-item"
            >
              <div className="activity-icon">
                {activity.icon && <activity.icon />}
              </div>

              <div className="activity-content">
                <h4>{activity.title}</h4>

                <p>{activity.description}</p>

                <span>{activity.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}