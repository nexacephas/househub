import { useNavigate } from "react-router-dom";

import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
  const navigate = useNavigate();
  const user = {
    name: "Cephas",
    role: "Landlord",
    email: "cephas@househub.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const handleEditProfile = () => {
    navigate("/landlord/settings");
  };

  return (
    <ProfileCard
      name={user.name}
      role={user.role}
      email={user.email}
      avatar={user.avatar}
      onEdit={handleEditProfile}
    />
    
  );
}