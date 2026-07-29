import "./AttachmentPreview.css";

import {
  File,
  Image,
  X,
} from "lucide-react";

export default function AttachmentPreview({
  attachments = [],
  onRemove = () => {},
}) {
  return (
    <div className="attachment-preview">

      {attachments.length === 0 ? (

        <div className="attachment-empty">

          No attachments selected.

        </div>

      ) : (

        attachments.map((attachment, index) => {

          const isImage =
            attachment.type?.startsWith("image/");

          return (

            <div
              className="attachment-card"
              key={index}
            >

              <div className="attachment-icon">

                {isImage ? (
                  <Image size={24} />
                ) : (
                  <File size={24} />
                )}

              </div>

              <div className="attachment-info">

                <h4>{attachment.name}</h4>

                <small>
                  {(
                    attachment.size /
                    1024 /
                    1024
                  ).toFixed(2)}
                  {" "}MB
                </small>

              </div>

              <button
                className="remove-attachment"
                onClick={() => onRemove(index)}
              >

                <X size={18} />

              </button>

            </div>

          );

        })

      )}

    </div>
  );
}