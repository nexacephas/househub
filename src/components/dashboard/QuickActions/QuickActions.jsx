import "./QuickActions.css";

export default function QuickActions({
  title = "Quick Actions",
  actions = [],
}) {
  return (
    <div className="quick-actions">
      <div className="quick-actions-header">
        <h3>{title}</h3>
      </div>

      <div className="quick-actions-grid">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className="quick-action-btn"
              onClick={action.onClick}
            >
              <div className="quick-action-icon">
                {Icon && <Icon />}
              </div>

              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}