import { useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";

import AIChat from "../AIChat/AIChat";

import "./AIWidget.css";

export default function AIWidget() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && <AIChat onClose={toggleChat} />}

      <button
        className="ai-widget-button"
        onClick={toggleChat}
        aria-label="Open HouseHub AI"
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </button>
    </>
  );
}