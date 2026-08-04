import { useState } from "react";

import LogStats from "../../../components/admin/LogStats/LogStats";
import LogFilters from "../../../components/admin/LogFilters/LogFilters";
import LogTable from "../../../components/admin/LogTable/LogTable";
import LogDetails from "../../../components/admin/LogDetails/LogDetails";

import "./Logs.css";

export default function Logs(){

const [selectedLog,setSelectedLog]=useState(null);

const [filters,setFilters]=useState({
search:"",
level:"",
date:"",
});

return(

<div className="admin-logs-page">

<h1>System Logs</h1>

<LogStats/>

<LogFilters
filters={filters}
setFilters={setFilters}
/>

<div className="logs-content">

<div>

<LogTable
logs={[]}
loading={false}
onSelect={setSelectedLog}
/>

</div>

<div>

<LogDetails
log={selectedLog}
/>

</div>

</div>

</div>

);

}