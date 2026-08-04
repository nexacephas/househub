import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../../../../components/dashboard/ProfileCard/ProfileCard";
import StatePanel from "../../../../components/common/StatePanel";
import api from "../../../../services/api";

export default function ProfileSection() {
  const navigate = useNavigate();
  const [tenant, setTenant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        setLoading(true);
        setError("");
        const { data } = await api.get("/users/me");

        if (!isMounted) return;
        setTenant(data.user);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load your profile.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <StatePanel status="loading" title="Loading profile" message="Fetching your account details." />;
  }

  if (error || !tenant) {
    return <StatePanel status="error" title="Unable to load profile" message={error || "Your profile could not be loaded."} onRetry={() => window.location.reload()} />;
  }

  return (
    <ProfileCard
      name={`${tenant.firstName || ""} ${tenant.lastName || ""}`.trim() || "Tenant"}
      role={tenant.role || "Tenant"}
      email={tenant.email || ""}
      avatar={tenant.avatar || ""}
      isVerified={tenant.isVerified}
      onEdit={() => navigate("/tenant/settings")}
    />
  );
}