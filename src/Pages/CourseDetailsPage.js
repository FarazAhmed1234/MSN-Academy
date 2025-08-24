import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ChevronUp, ChevronDown } from "lucide-react";
import "./CourseDetailsPage.css";
import ScrollToTop from "./ScrollToTop";

const CourseDetailsPage = ({ course }) => {
  const [openSection, setOpenSection] = useState({
    overview: false,
    outcomes: false,
    audience: false,
    duration: false,
    fee: false,
    instructor: false,
  });
  const navigate = useNavigate();

  const observerRef = useRef(null);

  useEffect(() => {
    // Initialize scroll animations with Intersection Observer
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -100px 0px"
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const animationType = entry.target.getAttribute('data-animation') || 'fade-in';

        if (entry.isIntersecting) {
          // Add animation class when element enters viewport
          entry.target.classList.add(animationType);
          entry.target.style.opacity = "1";

          // Apply final transform based on animation type
          if (animationType.includes('slide')) {
            entry.target.style.transform = "translateX(0)";
          } else if (animationType.includes('zoom')) {
            entry.target.style.transform = "scale(1)";
          } else if (animationType.includes('up') || animationType.includes('down')) {
            entry.target.style.transform = "translateY(0)";
          }
        } else {
          // Remove animation class when element leaves viewport
          entry.target.classList.remove(animationType);
          entry.target.style.opacity = "0";

          // Reset transform properties for slide animations
          if (animationType.includes('slide')) {
            if (animationType.includes('left')) {
              entry.target.style.transform = "translateX(-50px)";
            } else if (animationType.includes('right')) {
              entry.target.style.transform = "translateX(50px)";
            }
          }

          // Reset transform for zoom animations
          if (animationType.includes('zoom')) {
            entry.target.style.transform = "scale(0.9)";
          }

          // Reset transform for fade up/down animations
          if (animationType.includes('up')) {
            entry.target.style.transform = "translateY(30px)";
          } else if (animationType.includes('down')) {
            entry.target.style.transform = "translateY(-30px)";
          }
        }
      });
    }, observerOptions);

    // Observe all elements with the 'data-animation' attribute
    document.querySelectorAll('[data-animation]').forEach(el => {
      // Set initial state for all animated elements
      const animationType = el.getAttribute('data-animation');
      el.style.opacity = "0";
      el.style.transition = "opacity 0.5s ease, transform 0.8s ease";

      if (animationType.includes('slide')) {
        if (animationType.includes('left')) {
          el.style.transform = "translateX(-50px)";
        } else if (animationType.includes('right')) {
          el.style.transform = "translateX(50px)";
        }
      } else if (animationType.includes('zoom')) {
        el.style.transform = "scale(0.9)";
      } else if (animationType.includes('up')) {
        el.style.transform = "translateY(30px)";
      } else if (animationType.includes('down')) {
        el.style.transform = "translateY(-30px)";
      }

      observerRef.current.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const toggleSection = (key) => {
    setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <ScrollToTop />
      <section>
        <div className="course-container">
          {/* Left Side */}
          <div className="course-info">
            <p className="breadcrumb" onClick={() => navigate(-1)} style={{ cursor: "pointer" }} data-animation="fade-up">
              Courses &gt; <strong>{course.name}</strong>
            </p>
            <h1 data-animation="fade-up">{course.name}</h1>
            <p className="subtitle" style={{ marginLeft: "29px" }} data-animation="fade-up">
              {course.description}
            </p>

            <div className="includes-box" data-animation="fade-up">
              <h3>Includes:</h3>
              <div className="includes-list">
                <ul>
                  <li>✔ Hands-on projects</li>
                  <li>✔ Expert instructors</li>
                  <li>✔ Flexible schedule</li>
                  <li>✔ Certification upon completion</li>
                </ul>
                <ul>
                  <li>✔ Lifetime access</li>
                  <li>✔ Community support</li>
                  <li>✔ Weekly live sessions</li>
                  <li>✔ Resource materials included</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="course-card1" data-animation="fade-up">
            <div className="course-image">
              <img src={course.image} alt={course.name} style={{ height: "180px" }} />
              <button className="play-button" onClick={() => window.open("https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc", "_blank")}>▶</button>
            </div>
            <p className="price">{course.price}</p>
            <p className="rating"><Star className="star" /> 4.5 stars · 25 reviews</p>
            <button className="btn primary" onClick={() => window.open("https://forms.gle/c82S9HnVPQCKf1vE8", "_blank")}>Get started</button>
            
            <button className="btn secondary" onClick={() => window.open("https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc", "_blank")}>Watch demo</button>
            <br />
          </div>
        </div>

        {/* Accordion */}
        <main className="details-content container">
          <h1 style={{ marginLeft: "94px", marginBottom: "10px" }} data-animation="fade-up">
            More information
          </h1>
          <hr style={{ marginLeft: "94px", marginBottom: "10px", marginRight: "100px" }} data-animation="fade-up" />
          <br />

          {["overview", "outcomes", "audience", "duration", "fee", "instructor"].map((key, index) => (
            <div className="info-item" key={key} data-animation="fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="info-header" onClick={() => toggleSection(key)}>
                <h2>{key.charAt(0).toUpperCase() + key.slice(1)}</h2>
                <span className="toggle-icon">{openSection[key] ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
              </div>
              <div className={`info-content ${openSection[key] ? 'open' : ''}`}>
                <p>{course[key]}</p>
              </div>
              <hr />
            </div>
          ))}
        </main>

        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
};


export default CourseDetailsPage;