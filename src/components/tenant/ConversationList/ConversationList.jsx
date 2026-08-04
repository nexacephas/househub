import "./ConversationList.css";

import {
  Search,
  Circle,
} from "lucide-react";

export default function ConversationList({ conversations = [], selectedConversation, loading = false, onSelect }) {
  const formatPreview = (conversation) => conversation.latestMessage?.text || conversation.message || "Start a conversation";
  const formatTime = (conversation) => {
    if (!conversation.updatedAt) return "Now";
    return new Date(conversation.updatedAt).toLocaleDateString();
  };

  return (
    <div className="conversation-list">

      <div className="conversation-header">

        <h2>Chats</h2>

        <div className="conversation-search">

          <Search size={18} />

          <input
            type="text"
            placeholder="Search conversations..."
          />

        </div>

      </div>

      <div className="conversation-items">

        {loading ? (
          <p className="conversation-empty">Loading conversations...</p>
        ) : conversations.length === 0 ? (
          <p className="conversation-empty">No conversations yet.</p>
        ) : conversations.map((chat) => (

          <button
            type="button"
            className={`conversation-item ${selectedConversation?._id === chat._id ? "active" : ""}`}
            key={chat._id}
            onClick={() => onSelect?.(chat)}
          >

            <div className="avatar-wrapper">

              <img
                src={chat.avatar || "https://i.pravatar.cc/150?img=15"}
                alt={chat.title || "Conversation"}
              />

              {chat.online && (
                <span className="online-indicator">
                  <Circle
                    size={10}
                    fill="currentColor"
                  />
                </span>
              )}

            </div>

            <div className="conversation-info">

              <div className="conversation-top">

                <h4>{chat.title || "Conversation"}</h4>

                <span>{formatTime(chat)}</span>

              </div>

              <small>{chat.property || "HouseHub"}</small>

              <p>{formatPreview(chat)}</p>

            </div>

            {chat.unread > 0 && (

              <div className="unread-badge">

                {chat.unread}

              </div>

            )}

          </button>

        ))}

      </div>

    </div>
  );
}