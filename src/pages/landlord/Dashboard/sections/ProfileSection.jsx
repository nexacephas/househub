import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
  const user = {
    name: "Cephas",
    role: "Landlord",
    email: "cephas@househub.com",
    avatar: "https://i.pravatar.cc/150?img=12",
  };

  const handleEditProfile = () => {
    console.log("Navigate to profile settings");
    // Later:
    // navigate("/landlord/settings");
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