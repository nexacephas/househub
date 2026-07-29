import "./MaintenanceGallery.css";

import { useState } from "react";
import { Image as ImageIcon, X } from "lucide-react";

export default function MaintenanceGallery({
  beforeImages = [],
  afterImages = [],
}) {
  const [selectedImage, setSelectedImage] =
    useState(null);

  function GallerySection({
    title,
    images,
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
                onClick={() =>
                  setSelectedImage(image)
                }
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

  return (
    <>

      <GallerySection
        title="Before Photos"
        images={beforeImages}
      />

      <GallerySection
        title="After Photos"
        images={afterImages}
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