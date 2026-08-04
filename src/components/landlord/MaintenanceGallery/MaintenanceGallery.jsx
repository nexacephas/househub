import "./MaintenanceGallery.css";

import { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";

function GallerySection({
  title,
  images,
  onSelect,
}) {
  return (
    <div className="gallery-section">

      <h2>{title}</h2>

      {images.length === 0 ? (
        <div className="gallery-empty">

          <ImageIcon size={50} />

          <p>No images uploaded.</p>

        </div>
      ) : (
        <div className="gallery-grid">

          {images.map((image, index) => (

            <div
              key={index}
              className="gallery-card"
              onClick={() => onSelect(image)}
            >

              <img
                src={image}
                alt={`${title}-${index}`}
              />

            </div>

          ))}

        </div>
      )}

    </div>
  );
}

export default function MaintenanceGallery({
  beforeImages = [],
  afterImages = [],
}) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <GallerySection
        title="Before Photos"
        images={beforeImages}
        onSelect={setSelectedImage}
      />

      <GallerySection
        title="After Photos"
        images={afterImages}
        onSelect={setSelectedImage}
      />

      {selectedImage && (

        <div
          className="gallery-modal"
          onClick={() =>
            setSelectedImage(null)
          }
        >

          <button
            className="gallery-close"
            onClick={() =>
              setSelectedImage(null)
            }
          >

            <X size={26} />

          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="gallery-preview"
            onClick={(e) =>
              e.stopPropagation()
            }
          />

        </div>

      )}

    </>
  );
}