import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
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
      onEdit={() => console.log("Edit Admin Profile")}
    />
  );
}