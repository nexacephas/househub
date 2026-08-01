import "./RecentActivity.css";

import {
  UserPlus,
  Building2,
  CalendarCheck,
  CreditCard,
  Wrench,
} from "lucide-react";


export default function RecentActivity({
  activities = [],
}) {


  const icons = {

    user:
      UserPlus,

    property:
      Building2,

    booking:
      CalendarCheck,

    payment:
      CreditCard,

    maintenance:
      Wrench,

  };


  if (!activities.length) {
    return (
      <div className="recent-activity-card">

        <h2>
          Recent Activity
        </h2>

        <p className="empty-activity">
          No recent activity.
        </p>

      </div>
    );
  }


  return (

    <div className="recent-activity-card">


      <div className="activity-header">

        <h2>
          Recent Activity
        </h2>

      </div>



      <div className="activity-list">


        {
          activities.map((item,index)=>{


            const Icon =
              icons[item.type] || UserPlus;


            return (

              <div
                className="activity-item"
                key={index}
              >


                <div className="activity-icon">

                  <Icon size={20}/>

                </div>



                <div className="activity-content">

                  <h4>
                    {item.title}
                  </h4>

                  <p>
                    {item.description}
                  </p>

                  <span>
                    {item.time}
                  </span>

                </div>


              </div>

            );

          })
        }


      </div>


    </div>

  );

}