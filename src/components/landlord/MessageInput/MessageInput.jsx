import "./MessageInput.css";

import { useRef, useState } from "react";

import {
  Send,
  Paperclip,
  Image,
  Smile,
} from "lucide-react";

export default function MessageInput({
  onSend,
}) {
  const [text, setText] = useState("");

  const imageRef = useRef(null);

  const fileRef = useRef(null);

  function handleSend() {
    if (!text.trim()) return;

    onSend(text.trim());

    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      handleSend();
    }
  }

  function handleImageChange(e) {
    const files = Array.from(e.target.files);

    console.log("Images:", files);

    // Future:
    // upload images here
  }

  function handleFileChange(e) {
    const files = Array.from(e.target.files);

    console.log("Files:", files);

    // Future:
    // upload documents here
  }

  return (
    <div className="message-input">

      <div className="input-actions">

        <button
          type="button"
          onClick={() =>
            imageRef.current.click()
          }
        >
          <Image size={20} />
        </button>

        <button
          type="button"
          onClick={() =>
            fileRef.current.click()
          }
        >
          <Paperclip size={20} />
        </button>

        <button type="button">
          <Smile size={20} />
        </button>

      </div>

      <textarea
        placeholder="Type a message..."
        value={text}
        rows={1}
        onChange={(e) =>
          setText(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button
        className="send-btn"
        onClick={handleSend}
      >
        <Send size={20} />
      </button>

      <input
        ref={imageRef}
        type="file"
        multiple
        accept="image/*"
        hidden
        onChange={handleImageChange}
      />

      <input
        ref={fileRef}
        type="file"
        multiple
        hidden
        onChange={handleFileChange}
      />

    </div>
  );
}