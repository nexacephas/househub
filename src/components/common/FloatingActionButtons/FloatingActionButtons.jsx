import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, Home, MessageCircle, X } from "lucide-react";

import AIChat from "../../ai/AIChat/AIChat";
import "./FloatingActionButtons.css";

export default function FloatingActionButtons() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (location.pathname === "/") return null;

  return (
    <>
      {isChatOpen && <AIChat onClose={() => setIsChatOpen(false)} />}

      <div className="floating-action-buttons" aria-label="Quick actions">
        <button
          type="button"
          className="floating-action-btn"
          onClick={() => navigate(-1)}
          title="Back to Previous Page"
          aria-label="Back to Previous Page"
        >
          <ArrowLeft size={22} />
        </button>

        <button
          type="button"
          className="floating-action-btn"
          onClick={() => navigate("/")}
          title="Back to Home"
          aria-label="Back to Home"
        >
          <Home size={22} />
        </button>

        <button
          type="button"
          className="floating-action-btn floating-action-btn-ai"
          onClick={() => setIsChatOpen(true)}
          title="Open AI Chat"
          aria-label="Open AI Chat"
        >
          {isChatOpen ? <X size={22} /> : <MessageCircle size={22} />}
        </button>
      </div>
    </>
  );
}
