import "./LogFilters.css";
import { Search } from "lucide-react";

export default function LogFilters({
filters,
setFilters,
}) {

function handleChange(e){
setFilters({
...filters,
[e.target.name]:e.target.value,
});
}

return(

<div className="log-filters">

<div className="search-box">

<Search size={18}/>

<input
name="search"
placeholder="Search logs..."
value={filters.search}
onChange={handleChange}
/>

</div>

<select
name="level"
value={filters.level}
onChange={handleChange}
>
<option value="">All Levels</option>
<option value="info">Info</option>
<option value="warning">Warning</option>
<option value="error">Error</option>
</select>

<input
type="date"
name="date"
value={filters.date}
onChange={handleChange}
/>

</div>

);
}