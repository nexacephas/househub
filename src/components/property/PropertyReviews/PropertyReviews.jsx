import "./PropertyReviews.css";

import {
  Star,
  ThumbsUp,
  UserCircle2,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    date: "12 July 2026",
    review:
      "The apartment exceeded my expectations. The environment is quiet, security is excellent, and the landlord was very responsive.",
    helpful: 18,
  },
  {
    id: 2,
    name: "Michael Adams",
    rating: 4,
    date: "5 July 2026",
    review:
      "Very clean apartment with stable electricity and water. Parking space was adequate and the neighborhood is peaceful.",
    helpful: 11,
  },
  {
    id: 3,
    name: "Amina Yusuf",
    rating: 5,
    date: "28 June 2026",
    review:
      "One of the best rental experiences I've had. Everything matched the listing and inspection was straightforward.",
    helpful: 24,
  },
];

export default function PropertyReviews() {
  return (
    <section className="property-reviews">

      <div className="container">

        <div className="reviews-header">

          <div>

            <span>Reviews</span>

            <h2>What People Are Saying</h2>

          </div>

          <div className="overall-rating">

            <h3>4.9</h3>

            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  fill="currentColor"
                />
              ))}
            </div>

            <small>Based on 128 reviews</small>

          </div>

        </div>

        <div className="review-list">

          {reviews.map((review) => (

            <article
              key={review.id}
              className="review-card"
            >

              <div className="review-top">

                <div className="review-user">

                  <UserCircle2 size={48} />

                  <div>

                    <strong>{review.name}</strong>

                    <small>{review.date}</small>

                  </div>

                </div>

                <div className="review-stars">

                  {[...Array(review.rating)].map((_, i) => (

                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                    />

                  ))}

                </div>

              </div>

              <p>{review.review}</p>

              <button className="helpful-btn">

                <ThumbsUp size={16} />

                Helpful ({review.helpful})

              </button>

            </article>

          ))}

        </div>

        <div className="write-review">

          <h3>Leave a Review</h3>

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <select>

              <option>5 Stars</option>
              <option>4 Stars</option>
              <option>3 Stars</option>
              <option>2 Stars</option>
              <option>1 Star</option>

            </select>

            <textarea
              rows="6"
              placeholder="Share your experience..."
            />

            <button type="submit">

              Submit Review

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}