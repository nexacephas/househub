import { useNavigate } from "react-router-dom";

import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
  const navigate = useNavigate();
  const agent = {
    name: "Cephas",
    role: "Agent",
    email: "agent@househub.com",
    avatar: "",
  };

  return (
    <ProfileCard
      name={agent.name}
      role={agent.role}
      email={agent.email}
      avatar={agent.avatar}
      onEdit={() => navigate("/agent/settings")}
    />
  );
}