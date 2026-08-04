import { useNavigate, useLocation } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import "./FloatingNavButtons.css";

export default function FloatingNavButtons() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <div className="floating-nav-buttons" aria-label="Quick navigation">
      <button type="button" onClick={() => navigate("/" )} className="floating-nav-btn" title="Back to Home">
        <Home size={18} />
      </button>
      <button type="button" onClick={() => navigate(-1)} className="floating-nav-btn" title="Go back">
        <ArrowLeft size={18} />
      </button>
    </div>
  );
}
