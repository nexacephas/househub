import "./PropertyGallery.css";

import { useState, useEffect } from "react";

import {
  Heart,
  Share2,
  Camera,
  Expand,
} from "lucide-react";

const FALLBACK =
  "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200";

export default function PropertyGallery({ property }) {
  const images =
    property.images?.length > 0
      ? property.images.map((img) => img.url)
      : [FALLBACK];

  const [activeImage, setActiveImage] = useState(images[0]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [property]);

  const shareProperty = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: property.title,
          text: property.description,
          url: window.location.href,
        });
      } catch (err) {}
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Property link copied.");
    }
  };

  return (
    <section className="property-gallery">
      <div className="container">

        <div className="gallery-top">

          <div className="gallery-title">

            {property.isVerified && (
              <span className="verified">
                ✓ Verified Property
              </span>
            )}

            <h1>{property.title}</h1>

            <p>
              {property.address}, {property.city},{" "}
              {property.state}
            </p>

          </div>

          <div className="gallery-actions">

            <button onClick={shareProperty}>
              <Share2 size={18} />
              Share
            </button>

            <button>
              <Heart size={18} />
              Save
            </button>

          </div>

        </div>

        <div className="gallery-grid">

          <div className="main-image">

            <img
              src={activeImage}
              alt={property.title}
            />

            <button className="expand-btn">
              <Expand size={18} />
            </button>

          </div>

          <div className="thumb-grid">

            {images.slice(1).map((img, index) => (
              <div
                key={index}
                className={`thumb ${
                  activeImage === img ? "active" : ""
                }`}
                onClick={() => setActiveImage(img)}
              >
                <img
                  src={img}
                  alt={property.title}
                />
              </div>
            ))}

            <button className="show-all">
              <Camera size={20} />
              Show All Photos ({images.length})
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}