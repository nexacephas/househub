import {
  Search,
  Bell,
  Menu,
  ChevronDown,
  ShieldCheck
} from "lucide-react";

import "./Topbar.css";


export default function Topbar(){

return (

<header className="topbar">


{/* Mobile Menu */}

<button className="menu-btn">

<Menu size={24}/>

</button>



{/* Search */}

<div className="search-box">

<Search size={20}/>

<input

type="text"

placeholder="Search properties, users..."

/>

</div>




{/* Right Section */}

<div className="topbar-actions">


{/* Notification */}

<button className="notification-btn">

<Bell size={22}/>

<span></span>

</button>




{/* Profile */}

<div className="profile-menu">


<div className="profile-avatar">

CP

</div>


<div className="profile-info">

<h4>
Cephas
</h4>


<div className="verified">

<ShieldCheck size={14}/>

Verified

</div>


</div>



<ChevronDown size={18}/>


</div>



</div>



</header>

);

}