import {
  FiUsers,
  FiHome,
  FiShield,
} from "react-icons/fi";

import RecentActivity from "../../../../components/dashboard/RecentActivity/RecentActivity";
import { activities } from "../data/activities";

const iconMap = {
  users: FiUsers,
  home: FiHome,
  shield: FiShield,
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