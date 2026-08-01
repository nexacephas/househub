import "./LogTable.css";
import { Eye } from "lucide-react";

export default function LogTable({
  logs = [],
  loading,
  onSelect,
}) {
  if (loading) {
    return (
      <div className="log-table-loading">
        Loading logs...
      </div>
    );
  }

  if (!logs.length) {
    return (
      <div className="log-table-loading">
        No logs found.
      </div>
    );
  }

  return (
    <div className="log-table-wrapper">

      <table className="log-table">

        <thead>

          <tr>
            <th>Time</th>
            <th>User</th>
            <th>Action</th>
            <th>Module</th>
            <th>Level</th>
            <th></th>
          </tr>

        </thead>

        <tbody>

          {logs.map((log) => (

            <tr key={log._id}>

              <td>
                {new Date(log.createdAt).toLocaleString()}
              </td>

              <td>
                {log.user?.fullName || "-"}
              </td>

              <td>{log.action}</td>

              <td>{log.module}</td>

              <td>

                <span
                  className={`level ${log.level}`}
                >
                  {log.level}
                </span>

              </td>

              <td>

                <button
                  className="view-btn"
                  onClick={() => onSelect(log)}
                >
                  <Eye size={17}/>
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}