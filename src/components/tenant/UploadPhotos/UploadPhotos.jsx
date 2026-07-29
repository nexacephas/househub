import { useRef, useState } from "react";
import "./UploadPhotos.css";

import {
  Upload,
  X,
  ImageIcon,
} from "lucide-react";

export default function UploadPhotos() {
  const [photos, setPhotos] = useState([]);

  const inputRef = useRef(null);

  function handleFiles(e) {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setPhotos((prev) => [...prev, ...previews]);
  }

  function removePhoto(index) {
    setPhotos((prev) =>
      prev.filter((_, i) => i !== index)
    );
  }

  return (
    <section className="upload-photos">

      <div className="upload-header">

        <h2>Upload Additional Photos</h2>

        <p>
          Add more images to help explain the
          maintenance issue.
        </p>

      </div>

      <div
        className="upload-box"
        onClick={() => inputRef.current.click()}
      >

        <Upload size={42} />

        <h3>Click to Upload Images</h3>

        <p>
          PNG, JPG or JPEG • Multiple images
          supported
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          hidden
          onChange={handleFiles}
        />

      </div>

      {photos.length > 0 && (

        <div className="photo-preview-grid">

          {photos.map((photo, index) => (

            <div
              className="photo-preview"
              key={index}
            >

              <img
                src={photo.preview}
                alt="Preview"
              />

              <button
                onClick={() =>
                  removePhoto(index)
                }
              >

                <X size={16} />

              </button>

            </div>

          ))}

        </div>

      )}

      {photos.length === 0 && (

        <div className="empty-state">

          <ImageIcon size={40} />

          <span>No photos uploaded yet.</span>

        </div>

      )}

    </section>
  );
}