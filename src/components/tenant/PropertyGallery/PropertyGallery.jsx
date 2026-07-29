import "./PropertyGallery.css";

import { Image as ImageIcon } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?w=1200",
];

export default function PropertyGallery() {
  return (
    <section className="property-gallery">

      <div className="gallery-header">

        <h2>Property Gallery</h2>

        <span>

          <ImageIcon size={18} />

          {images.length} Photos

        </span>

      </div>

      <div className="gallery-grid">

        {images.map((image, index) => (

          <div
            key={index}
            className={`gallery-item ${
              index === 0 ? "large" : ""
            }`}
          >

            <img
              src={image}
              alt={`Property ${index + 1}`}
            />

          </div>

        ))}

      </div>

    </section>
  );
}