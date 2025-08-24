import React, { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const defaultReviews = [
  {
    id: 1,
    name: "Faraz Ahmed",
    role: "Frontend Developer",
    rating: 5,
    text: "Course content was practical and on point. I built two real projects and got interview-ready!",
    date: "Aug 2025",
  },
  {
    id: 2,
    name: "Usman Ali",
    role: "CS Undergrad",
    rating: 4,
    text: "Loved the mentoring and quick feedback. The assignments really helped me understand React hooks.",
    date: "Jul 2025",
  },
  {
    id: 3,
    name: "Sara Fatima",
    role: "Interns",
    rating: 5,
    text: "Super clean explanations + responsive support on WhatsApp. Highly recommended!",
    date: "Jun 2025",
  },
  {
    id: 4,
    name: "Ali Raza",
    role: "Backend Developer",
    rating: 5,
    text: "The course helped me transition to full-stack development. Projects were challenging and relevant.",
    date: "May 2025",
  },
  {
    id: 5,
    name: "Anzar",
    role: "UI/UX Designer",
    rating: 4,
    text: "Great focus on practical implementation. The design patterns I learned are directly applicable to my work.",
    date: "Apr 2025",
  },
  {
    id: 6,
    name: "Bilal Siddiqui",
    role: "Interns",
    rating: 5,
    text: "The advanced concepts were explained clearly. The code reviews were particularly helpful for growth.",
    date: "Mar 2025",
  },
];

// ⭐ Rating stars
function StarRow({ rating = 5, setRating }) {
  return (
    <div className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < rating ? "star filled" : "star"}
          onClick={() => setRating && setRating(i + 1)}
          style={{ cursor: setRating ? "pointer" : "default" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}

const Testimonials = ({
  title = "Reviews & Testimonials",
  subtitle = "What our learners say",
}) => {
  const [reviews, setReviews] = useState(defaultReviews);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    rating: 5,
    text: "",
  });

  const sectionRef = useRef(null);

  // Animate section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      ...formData,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    };
    setReviews([newReview, ...reviews]);
    setShowModal(false);
    setFormData({ name: "", role: "", rating: 5, text: "" });
    
    // Show success message
    setShowSuccess(true);
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const avg = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length;

  return (
    <>
      <Navbar />
      <section
        ref={sectionRef}
        className={`testimonials-section ${isVisible ? "animated" : ""}`}
      >
        {/* Success Notification */}
        {showSuccess && (
          <div className="success-notification">
            <div className="success-content">
              <span className="success-icon">✓</span>
              <span>Feedback Added Successfully!</span>
            </div>
          </div>
        )}

        {/* Header */}
        <div className="header">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="average">
            <h3>{avg.toFixed(1)}/5</h3>
            <StarRow rating={Math.round(avg)} />
            <small>Based on {reviews.length} reviews</small>
          </div>
        </div>

        {/* Reviews */}
        <div className="reviews-grid">
          {reviews.map((r, index) => (
            <div
              key={r.id}
              className={`review-card ${isVisible ? "animated" : ""}`}
              style={{ transitionDelay: isVisible ? `${index * 0.1}s` : "0s" }}
            >
              <StarRow rating={r.rating} />
              <p className="review-text">{r.text}</p>
              <div className="reviewer">
                <div className="avatar">{r.name[0]}</div>
                <div>
                  <strong>{r.name}</strong>
                  <div className="role">
                    {r.role} • {r.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`cta ${isVisible ? "animated" : ""}`}>
          <p>Have you taken our course? Share your experience!</p>
          <button onClick={() => setShowModal(true)}>Write a Review</button>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <input
                type="text"
                placeholder="Your Role (e.g., Student, Developer)"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              />
              <StarRow
                rating={formData.rating}
                setRating={(val) => setFormData({ ...formData, rating: val })}
              />
              <textarea
                placeholder="Your Review"
                value={formData.text}
                onChange={(e) =>
                  setFormData({ ...formData, text: e.target.value })
                }
                required
              />
              <div className="modal-actions">
                <button type="submit">Submit</button>
                <button type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Testimonials;