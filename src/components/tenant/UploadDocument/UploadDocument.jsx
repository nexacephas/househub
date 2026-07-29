import { useRef, useState } from "react";
import "./UploadDocument.css";

import {
  UploadCloud,
  FileText,
  X,
} from "lucide-react";

export default function UploadDocument() {
  const fileInputRef = useRef(null);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Lease Agreement");
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }

  function removeFile() {
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log({
      title,
      category,
      file,
    });

    // Upload to backend here
  }

  return (
    <section className="upload-document">

      <div className="upload-header">

        <h2>Upload Document</h2>

        <p>
          Upload lease agreements, receipts,
          invoices and other important files.
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>Document Title</label>

          <input
            type="text"
            placeholder="Enter document title..."
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>Category</label>

          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          >

            <option>Lease Agreement</option>

            <option>Rent Receipt</option>

            <option>Invoice</option>

            <option>Inspection Report</option>

            <option>ID Document</option>

            <option>Other</option>

          </select>

        </div>

        <div
          className="upload-area"
          onClick={() =>
            fileInputRef.current.click()
          }
        >

          <UploadCloud size={48} />

          <h3>Choose a document</h3>

          <p>
            PDF, DOC, DOCX, JPG or PNG
          </p>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
          />

        </div>

        {file && (

          <div className="selected-file">

            <div className="file-info">

              <FileText size={22} />

              <div>

                <strong>{file.name}</strong>

                <small>
                  {(file.size / 1024 / 1024).toFixed(2)}
                  {" "}MB
                </small>

              </div>

            </div>

            <button
              type="button"
              onClick={removeFile}
            >

              <X size={18} />

            </button>

          </div>

        )}

        <button
          className="upload-btn"
          type="submit"
        >

          Upload Document

        </button>

      </form>

    </section>
  );
}