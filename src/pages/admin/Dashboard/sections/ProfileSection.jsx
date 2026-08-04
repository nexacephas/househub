import { useNavigate } from "react-router-dom";

import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
  const navigate = useNavigate();
  const admin = {
    name: "Administrator",
    role: "Platform Admin",
    email: "admin@househub.com",
    avatar: "",
  };

  return (
    <ProfileCard
      name={admin.name}
      role={admin.role}
      email={admin.email}
      avatar={admin.avatar}
      onEdit={() => navigate("/admin/settings")}
    />
  );
}