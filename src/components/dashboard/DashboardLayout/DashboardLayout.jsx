import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

import "./DashboardLayout.css";


export default function DashboardLayout({ children, role }) {

  return (

    <div className="dashboard-layout">

      <Sidebar role={role} />


      <div className="dashboard-main">


        <Topbar />


        <main className="dashboard-content">

          {children}

        </main>


      </div>


    </div>

  );

}