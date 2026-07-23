import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";

export default function ProfileSection() {
  const tenant = {
    name: "Cephas",
    role: "Tenant",
    email: "cephas@househub.com",
    avatar: "",
  };

  return (
    <ProfileCard
      name={tenant.name}
      role={tenant.role}
      email={tenant.email}
      avatar={tenant.avatar}
      onEdit={() => console.log("Edit Profile")}
    />
  );
}