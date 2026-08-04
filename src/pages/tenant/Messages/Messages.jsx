import { useEffect, useState } from "react";
import "./Messages.css";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";
import StatePanel from "../../../components/common/StatePanel";
import ConversationList from "../../../components/tenant/ConversationList/ConversationList";
import ChatWindow from "../../../components/tenant/ChatWindow/ChatWindow";
import messageService from "../../../services/message.service";

export default function Messages() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messagesLoading, setMessagesLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadConversations() {
      try {
        setLoading(true);
        setError("");
        const { data } = await messageService.getConversations();

        if (!isMounted) return;
        const nextConversations = data.conversations || [];
        setConversations(nextConversations);

        if (nextConversations.length) {
          setSelectedConversation(nextConversations[0]);
        }
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load conversations.");
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadConversations();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!selectedConversation) {
      setMessages([]);
      return;
    }

    let isMounted = true;

    async function loadMessages() {
      try {
        setMessagesLoading(true);
        const { data } = await messageService.getMessages(selectedConversation._id);

        if (!isMounted) return;
        setMessages(data.messages || []);
      } catch (err) {
        if (!isMounted) return;
        setError(err.message || "Unable to load messages.");
      } finally {
        if (isMounted) setMessagesLoading(false);
      }
    }

    loadMessages();

    return () => {
      isMounted = false;
    };
  }, [selectedConversation]);

  async function openConversation(conversation) {
    setSelectedConversation(conversation);
  }

  async function sendMessage(text) {
    if (!selectedConversation) return;

    try {
      const { data } = await messageService.sendMessage({
        conversationId: selectedConversation._id,
        text,
      });

      setMessages((prev) => [...prev, data.message]);
    } catch (err) {
      setError(err.message || "Unable to send message.");
    }
  }

  return (
    <DashboardLayout role="tenant">
      <div className="tenant-messages-page">

        <div className="messages-header">

          <div>

            <h1>Messages</h1>

            <p>
              Communicate directly with your landlord,
              property manager and support team.
            </p>

          </div>

        </div>

        <div className="messages-layout">

          <aside className="messages-sidebar">
            {loading ? (
              <StatePanel status="loading" title="Loading conversations" message="Fetching your recent messages." />
            ) : error ? (
              <StatePanel status="error" title="Unable to load messages" message={error} onRetry={() => window.location.reload()} />
            ) : (
              <ConversationList conversations={conversations} selectedConversation={selectedConversation} loading={loading} onSelect={openConversation} />
            )}
          </aside>

          <main className="messages-content">
            {selectedConversation ? (
              <ChatWindow conversation={selectedConversation} messages={messages} loading={messagesLoading} onSend={sendMessage} />
            ) : (
              <StatePanel status="empty" title="No conversation selected" message="Choose a message thread to begin chatting." />
            )}
          </main>

        </div>

      </div>
    </DashboardLayout>
  );
}