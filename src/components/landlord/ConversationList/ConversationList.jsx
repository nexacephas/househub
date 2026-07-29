import "./ConversationList.css";

import { useMemo, useState } from "react";

import { Search, MessageCircle } from "lucide-react";

export default function ConversationList({
  conversations = [],
  selectedConversation,
  onSelect,
  loading,
}) {
  const [search, setSearch] = useState("");

  const filteredConversations = useMemo(() => {
    return conversations.filter((conversation) => {
      const participant =
        conversation.participant?.fullName || "";

      const property =
        conversation.property?.title || "";

      return (
        participant
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        property
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
  }, [search, conversations]);

  if (loading) {
    return (
      <aside className="conversation-list">

        <div className="conversation-loading">
          Loading conversations...
        </div>

      </aside>
    );
  }

  return (
    <aside className="conversation-list">

      <div className="conversation-search">

        <Search size={18} />

        <input
          type="text"
          placeholder="Search conversations..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

      </div>

      {filteredConversations.length === 0 ? (

        <div className="conversation-empty">

          <MessageCircle size={55} />

          <h3>No Conversations</h3>

          <p>
            Conversations with tenants,
            technicians and agents will
            appear here.
          </p>

        </div>

      ) : (

        filteredConversations.map(
          (conversation) => {
            const participant =
              conversation.participant || {};

            const isActive =
              selectedConversation?._id ===
              conversation._id;

            return (

              <div
                key={conversation._id}
                className={`conversation-item ${
                  isActive ? "active" : ""
                }`}
                onClick={() =>
                  onSelect(conversation)
                }
              >

                <div className="avatar-wrapper">

                  <img
                    src={
                      participant.avatar ||
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        participant.fullName ||
                          "User"
                      )}`
                    }
                    alt={participant.fullName}
                  />

                  {participant.online && (
                    <span className="online-dot" />
                  )}

                </div>

                <div className="conversation-content">

                  <div className="conversation-top">

                    <h4>
                      {participant.fullName}
                    </h4>

                    <span>
                      {conversation.updatedAt
                        ? new Date(
                            conversation.updatedAt
                          ).toLocaleDateString()
                        : ""}
                    </span>

                  </div>

                  <p className="property-name">
                    {conversation.property?.title}
                  </p>

                  <p className="last-message">
                    {conversation.lastMessage ||
                      "Start chatting..."}
                  </p>

                </div>

                {conversation.unreadCount >
                  0 && (
                  <div className="unread-badge">
                    {conversation.unreadCount}
                  </div>
                )}

              </div>

            );
          }
        )

      )}

    </aside>
  );
}