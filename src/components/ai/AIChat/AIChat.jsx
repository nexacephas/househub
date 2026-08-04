import { useEffect, useRef, useState } from "react";
import { FiCpu, FiX } from "react-icons/fi";

import API from "../../../services/api";
import AIInput from "../AIInput/AIInput";
import AIMessage from "../AIMessage/AIMessage";
import AISuggestions from "../AISuggestions/AISuggestions";
import AITyping from "../AITyping/AITyping";
import "./AIChat.css";

export default function AIChat({ onClose }) {
  const bottomRef = useRef(null);
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      sender: "assistant",
      text: "👋 Welcome to HouseHub AI! I'm here to help you find properties, answer questions, and guide you through HouseHub.",
    },
  ]);
  const [error, setError] = useState("");
  const [conversationId, setConversationId] = useState(null);

  const handleSend = async (text) => {
    if (!text?.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setTyping(true);
    setError("");

    try {
      const payload = {
        messages: [...messages, userMessage],
        context: { origin: "widget" },
      };

      const { data } = conversationId
        ? await API.put(`/ai/${conversationId}`, payload)
        : await API.post("/ai", payload);

      const assistantMessages = data.conversation?.messages || [];
      const assistantText = assistantMessages.at(-1)?.text || "I couldn't produce a reply right now.";

      setMessages(
        assistantMessages.map((message, index) => ({
          id: message._id || `${message.sender}-${index}`,
          sender: message.sender,
          text: message.text,
        }))
      );
      setConversationId(data.conversation?._id || conversationId);
    } catch (err) {
      const message = err?.response?.data?.message || "Unable to reach the assistant right now.";
      setError(message);
      setMessages((prev) => [
        ...prev,
        {
          id: `error-${Date.now()}`,
          sender: "assistant",
          text: `I hit a snag while answering. ${message}`,
        },
      ]);
    } finally {
      setTyping(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="ai-chat-window">
      <div className="ai-chat-header">
        <div className="ai-header-left">
          <div className="ai-avatar">
            <FiCpu />
          </div>

          <div>
            <h3>HouseHub AI</h3>
            <p>Your Smart Real Estate Assistant</p>
            <span>
              <span className="status-dot"></span>
              Online
            </span>
          </div>
        </div>

        <button onClick={onClose}>
          <FiX />
        </button>
      </div>

      <AISuggestions />

      <div className="ai-chat-body">
        {messages.map((message) => (
          <AIMessage key={message.id} message={{ ...message, role: message.sender === "user" ? "user" : "assistant" }} />
        ))}

        {typing && <AITyping />}
        {error && <div className="ai-chat-error">{error}</div>}
        <div ref={bottomRef} />
      </div>

      <AIInput onSend={handleSend} />
    </div>
  );
}