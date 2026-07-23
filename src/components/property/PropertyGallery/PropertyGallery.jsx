import "./PropertyGallery.css";

import { useState } from "react";

import {
  Heart,
  Share2,
  Camera,
  Expand,
} from "lucide-react";

export default function PropertyGallery() {

  const images = [

    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200",

    "https://images.unsplash.com/photo-1600585154340-be6161a56a0?w=1200",

    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",

    "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200",

    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"

  ];

  const [activeImage, setActiveImage] = useState(images[0]);

  return (

    <section className="property-gallery">

      <div className="container">

        <div className="gallery-top">

          <div className="gallery-title">

            <span className="verified">

              ✓ Verified Property

            </span>

            <h1>

              Luxury 3 Bedroom Apartment

            </h1>

            <p>

              Wuse 2, Abuja, Nigeria

            </p>

          </div>

          <div className="gallery-actions">

            <button>

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
              alt="Property"
            />

            <button className="expand-btn">

              <Expand size={18} />

            </button>

          </div>

          <div className="thumb-grid">

            {images.slice(1).map((img, index) => (

              <div
                key={index}
                className="thumb"
                onClick={() => setActiveImage(img)}
              >

                <img
                  src={img}
                  alt="Property"
                />

              </div>

            ))}

            <button className="show-all">

              <Camera size={20} />

              Show All Photos

            </button>

          </div>

        </div>

      </div>

    </section>

  );

}