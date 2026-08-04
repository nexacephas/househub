import "./ChatWindow.css";

import PropertyChatHeader from "../PropertyChatHeader/PropertyChatHeader";
import MessageBubble from "../MessageBubble/MessageBubble";
import MessageInput from "../MessageInput/MessageInput";

export default function ChatWindow({ conversation, messages = [], loading = false, onSend }) {
  return (
    <div className="chat-window">
      <PropertyChatHeader conversation={conversation} />

      <div className="chat-messages">
        {loading ? (
          <p className="conversation-empty">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="conversation-empty">No messages yet. Start the conversation.</p>
        ) : messages.map((message) => (
          <MessageBubble
            key={message._id || message.id}
            message={{
              ...message,
              sender: message.sender?._id ? "tenant" : "landlord",
              text: message.text || message.body || "",
              time: new Date(message.createdAt).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }),
            }}
          />
        ))}
      </div>

      <MessageInput onSend={onSend} disabled={loading} />
    </div>
  );
}