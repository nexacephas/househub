import NotificationCard from "../../../../components/dashboard/NotificationCard/NotificationCard";

import { notifications } from "../data/notifications";

export default function NotificationSection() {
  return (
    <NotificationCard
      title="Notifications"
      notifications={notifications}
    />
  );
}