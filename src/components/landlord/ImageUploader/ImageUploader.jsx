import "./ImageUploader.css";

import { useRef } from "react";
import { Upload, X } from "lucide-react";
import toast from "react-hot-toast";

const MAX_IMAGES = 10;
const MAX_SIZE = 5 * 1024 * 1024;

const ACCEPTED_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
];

export default function ImageUploader({
  images,
  setImages,
}) {
  const inputRef = useRef(null);

  const validateFiles = (files) => {
    const valid = [];

    files.forEach((file) => {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        toast.error(`${file.name} is not a supported image.`);
        return;
      }

      if (file.size > MAX_SIZE) {
        toast.error(`${file.name} exceeds 5MB.`);
        return;
      }

      valid.push(file);
    });

    return valid;
  };

  const addFiles = (files) => {
    const validated = validateFiles(files);

    const merged = [...images, ...validated];

    if (merged.length > MAX_IMAGES) {
      toast.error(`Maximum ${MAX_IMAGES} images allowed.`);
      return;
    }

    setImages(merged);
  };

  const handleInput = (e) => {
    addFiles(Array.from(e.target.files));

    e.target.value = "";
  };

  const handleDrop = (e) => {
    e.preventDefault();

    addFiles(Array.from(e.dataTransfer.files));
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  return (
    <div className="image-uploader">

      <div
        className="upload-box"
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <Upload size={45} />

        <h3>Upload Property Images</h3>

        <p>Drag & Drop or Click to Browse</p>

        <small>
          JPG • PNG • WEBP • Max 5MB each • 10 Images
        </small>

        <input
          ref={inputRef}
          hidden
          multiple
          type="file"
          accept="image/*"
          onChange={handleInput}
        />

      </div>

      {images.length > 0 && (

        <div className="preview-grid">

          {images.map((image, index) => (

            <div
              key={index}
              className="preview-card"
            >

              <img
                src={URL.createObjectURL(image)}
                alt=""
              />

              <button
                type="button"
                className="remove-image"
                onClick={() => removeImage(index)}
              >
                <X size={18} />
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}