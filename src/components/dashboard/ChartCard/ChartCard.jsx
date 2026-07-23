import "./ChartCard.css";

export default function ChartCard({
  title,
  subtitle,
  action,
  children,
}) {
  return (
    <div className="chart-card">
      <div className="chart-card-header">
        <div>
          <h3>{title}</h3>

          {subtitle && (
            <p>{subtitle}</p>
          )}
        </div>

        {action && (
          <div className="chart-card-action">
            {action}
          </div>
        )}
      </div>

      <div className="chart-card-body">
        {children}
      </div>
    </div>
  );
}