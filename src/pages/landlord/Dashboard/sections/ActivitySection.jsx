import {
  FiHome,
  FiDollarSign,
  FiTool,
} from "react-icons/fi";

import RecentActivity from "../../../../components/dashboard/RecentActivity/RecentActivity";

import { activities } from "../data/activities";

const iconMap = {
  home: FiHome,
  money: FiDollarSign,
  tool: FiTool,
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