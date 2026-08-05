import { useEffect, useState } from "react";

import LogStats from "../../../components/admin/LogStats/LogStats";
import LogFilters from "../../../components/admin/LogFilters/LogFilters";
import LogTable from "../../../components/admin/LogTable/LogTable";
import LogDetails from "../../../components/admin/LogDetails/LogDetails";
import logService from "../../../services/log.service";

import "./Logs.css";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedLog, setSelectedLog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    search: "",
    level: "",
    date: "",
  });

  useEffect(() => {
    async function loadLogs() {
      setLoading(true);
      try {
        const [logsResponse, statsResponse] = await Promise.all([
          logService.getLogs(filters),
          logService.getStats(),
        ]);

        setLogs(logsResponse.data.logs || []);
        setStats(statsResponse.data.stats || null);
      } catch (err) {
        console.error(err);
        setLogs([]);
        setStats(null);
      } finally {
        setLoading(false);
      }
    }

    loadLogs();
  }, [filters]);

  return (
    <div className="admin-logs-page">
      <h1>System Logs</h1>

      <LogStats stats={stats} loading={loading} />

      <LogFilters filters={filters} setFilters={setFilters} />

      <div className="logs-content">
        <div>
          <LogTable
            logs={logs}
            loading={loading}
            onSelect={setSelectedLog}
          />
        </div>

        <div>
          <LogDetails log={selectedLog} />
        </div>
      </div>
    </div>
  );
}
