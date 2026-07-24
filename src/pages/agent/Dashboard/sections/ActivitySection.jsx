import {
  FiHome,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

import RecentActivity from "../../../../components/dashboard/RecentActivity/RecentActivity";
import { activities } from "../data/activities";

const iconMap = {
  home: FiHome,
  users: FiUsers,
  calendar: FiCalendar,
};

export default function ActivitySection() {
  const formattedActivities = activities.map((activity) => ({
    ...activity,
    icon: iconMap[activity.icon],
  }));

  return (
    <RecentActivity
      title="Recent Activity"
      activities={formattedActivities}
    />
  );
}