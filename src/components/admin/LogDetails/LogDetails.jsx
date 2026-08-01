import "./LogDetails.css";

export default function LogDetails({ log }) {

  if (!log) {
    return (
      <div className="log-details-empty">
        Select a log.
      </div>
    );
  }

  return (

    <div className="log-details">

      <h2>Log Details</h2>

      <div className="detail">
        <label>User</label>
        <span>{log.user?.fullName}</span>
      </div>

      <div className="detail">
        <label>Action</label>
        <span>{log.action}</span>
      </div>

      <div className="detail">
        <label>Module</label>
        <span>{log.module}</span>
      </div>

      <div className="detail">
        <label>Level</label>
        <span>{log.level}</span>
      </div>

      <div className="detail">
        <label>IP Address</label>
        <span>{log.ipAddress || "-"}</span>
      </div>

      <div className="detail">
        <label>Browser</label>
        <span>{log.browser || "-"}</span>
      </div>

      <div className="detail">
        <label>Route</label>
        <span>{log.route || "-"}</span>
      </div>

      <div className="detail">
        <label>Payload</label>
        <pre>
{JSON.stringify(log.payload,null,2)}
        </pre>
      </div>

    </div>

  );

}