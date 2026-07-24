import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
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
      onEdit={() => console.log("Edit Profile")}
    />
  );
}