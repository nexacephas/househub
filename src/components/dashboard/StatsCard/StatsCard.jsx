import "./StatsCard.css";

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  color = "primary",
}) {
  const isPositive = change?.startsWith("+");

  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <div className={`stats-card-icon ${color}`}>
          {Icon && <Icon />}
        </div>

        {change && (
          <span
            className={`stats-card-change ${
              isPositive ? "positive" : "negative"
            }`}
          >
            {change}
          </span>
        )}
      </div>

      <div className="stats-card-body">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}