import { AlertCircle, Loader2, Inbox, RotateCcw } from "lucide-react";

import "./StatePanel.css";

export default function StatePanel({
  status = "loading",
  title,
  message,
  onRetry,
  children,
}) {
  if (status === "loading") {
    return (
      <div className="state-panel state-panel-loading">
        <Loader2 className="state-panel-icon spinning" size={24} />
        <h3>{title || "Loading"}</h3>
        <p>{message || "Please wait while we load your data."}</p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="state-panel state-panel-error">
        <AlertCircle className="state-panel-icon" size={24} />
        <h3>{title || "We hit a snag"}</h3>
        <p>{message || "Something went wrong while loading this section."}</p>
        {onRetry && (
          <button className="state-panel-action" onClick={onRetry}>
            <RotateCcw size={16} />
            Retry
          </button>
        )}
      </div>
    );
  }

  if (status === "empty") {
    return (
      <div className="state-panel state-panel-empty">
        <Inbox className="state-panel-icon" size={24} />
        <h3>{title || "Nothing to show yet"}</h3>
        <p>{message || "There is no data available right now."}</p>
      </div>
    );
  }

  return <>{children}</>;
}
