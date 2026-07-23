import "./NotificationCard.css";

export default function NotificationCard({
  title = "Notifications",
  notifications = [],
}) {
  return (
    <div className="notification-card">
      <div className="notification-card-header">
        <h3>{title}</h3>

        {notifications.length > 0 && (
          <span className="notification-badge">
            {notifications.length}
          </span>
        )}
      </div>

      <div className="notification-list">
        {notifications.length === 0 ? (
          <p className="notification-empty">
            You're all caught up!
          </p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="notification-item"
            >
              <div
                className={`notification-dot ${notification.type}`}
              ></div>

              <div className="notification-content">
                <h4>{notification.title}</h4>

                <p>{notification.message}</p>

                <span>{notification.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}