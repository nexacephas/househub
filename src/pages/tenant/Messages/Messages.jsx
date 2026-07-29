import "./Messages.css";

import DashboardLayout from "../../../components/dashboard/DashboardLayout/DashboardLayout";

import ConversationList from "../../../components/tenant/ConversationList/ConversationList";
import ChatWindow from "../../../components/tenant/ChatWindow/ChatWindow";

export default function Messages() {
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

            <ConversationList />

          </aside>

          <main className="messages-content">

            <ChatWindow />

          </main>

        </div>

      </div>
    </DashboardLayout>
  );
}