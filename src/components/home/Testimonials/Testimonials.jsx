import { useEffect, useState } from "react";
import "./Testimonials.css";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "David Johnson",
    role: "Property Buyer",
    image: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    text: "HouseHub made buying my first home effortless. Every listing I viewed was genuine, and the agent was incredibly professional.",
  },

  {
    id: 2,
    name: "Amaka Okafor",
    role: "Landlord",
    image: "https://i.pravatar.cc/150?img=32",
    rating: 5,
    text: "Listing my apartment was surprisingly easy. Within days I had verified tenants contacting me through the platform.",
  },

  {
    id: 3,
    name: "Ibrahim Musa",
    role: "Investor",
    image: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    text: "I have invested in several properties through HouseHub. The verification system gives me confidence before making decisions.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(slider);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="testimonials">

      <div className="container">

        <span className="section-tag">
          TESTIMONIALS
        </span>

        <h2>
          What Our Clients Are Saying
        </h2>

        <p className="section-description">
          Thousands of buyers, renters, landlords and agents trust HouseHub every day.
        </p>

        <div className="testimonial-wrapper">

          <button
            className="nav-btn prev"
            onClick={prevSlide}
          >
            <ChevronLeft size={22} />
          </button>

          {testimonials.map((item, index) => (

            <div
              key={item.id}
              className={
                current === index
                  ? "testimonial-card active"
                  : "testimonial-card"
              }
            >

              <Quote className="quote-icon" size={46} />

              <div className="stars">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p className="testimonial-text">
                "{item.text}"
              </p>

              <div className="testimonial-user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>{item.name}</h4>

                  <span>
                    <BadgeCheck size={15} />
                    {item.role}
                  </span>

                </div>

              </div>

            </div>

          ))}

          <button
            className="nav-btn next"
            onClick={nextSlide}
          >
            <ChevronRight size={22} />
          </button>

        </div>

        <div className="testimonial-dots">

          {testimonials.map((_, index) => (

            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={
                current === index
                  ? "dot active"
                  : "dot"
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}