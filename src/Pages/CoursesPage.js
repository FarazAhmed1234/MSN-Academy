import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar1 from "../components/Navbar1";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";
import CourseDetailsPage from "./CourseDetailsPage";
import courses from "./coursesData";
import bgImage from "../assets/background22.png";
import img1 from "../assets/boy.jpg";
import img2 from "../assets/boy1.jpg";
import img3 from "../assets/boy2.jpg";
import heroImage from "../assets/girl.jpg";
import handImage from "../assets/hand.avif";




import "./CoursesPage.css";

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const observerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize scroll animations with improved Intersection Observer
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
          // This allows the animation to trigger again when scrolled back into view
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

  if (selectedCourse) {
    return (
      <>
        <Navbar />
        <CourseDetailsPage course={selectedCourse} onBack={() => setSelectedCourse(null)} />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar1 />

      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${bgImage})` }}
        data-animation="fade-in"
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="academy-label" data-animation="fade-up">MSN Academy</p>
            <h1 style={{ color: "white" }} data-animation="fade-up">Master the Skills to Shape Your Future</h1>
            <p data-animation="fade-up">Explore our diverse courses designed to elevate your digital skills and career opportunities.</p>
            <button className="cta-btn pulse" data-animation="fade-up">Enroll now</button>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses" data-animation="fade-in">
        <div className="container">
          <h2 data-animation="fade-up">Explore Our Comprehensive Course Offerings for Aspiring Digital Professionals</h2>
          <div className="course-grid">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="course-card"
                data-animation="fade-up"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="course-image">
                  <img src={course.image} alt={course.name} />
                </div>
                <h3>{course.name}</h3>
                <p className="certificate">Professional Certificate</p>

                <div className="card-buttons">
                  <button className="btn-outline hover-lift" onClick={() => setSelectedCourse(course)}>
                    Enroll Now
                  </button>
                  <button className="btn-secondary hover-lift" onClick={() => window.open("https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc", "_blank")}>Watch demo</button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="learning-path" data-animation="fade-in">
        <h2 className="title" data-animation="fade-up">Discover Your Path to Digital Mastery</h2>
        <p className="subtitle" data-animation="fade-up">
          At MSN Academy, we offer a structured approach to learning that combines theoretical knowledge with
          practical application.
        </p>
        <div className="cards">
          <div className="card" data-animation="fade-in">
            <div className="card-image"><img src={img1} alt="Learning" /></div>
            <h3>Interactive Learning for Real–World Skills</h3>
            <p>Includes hands-on projects to reinforce learning.</p>
          </div>
          <div className="card" data-animation="fade-up">
            <div className="card-image"><img src={img2} alt="Mentorship" /></div>
            <h3>Personal Mentorship to Guide Your Journey</h3>
            <p>Our experienced mentors provide personalized guidance throughout your learning experience.</p>
          </div>
          <div className="card" data-animation="fade-up">
            <div className="card-image"><img src={img3} alt="Community" /></div>
            <h3>Join a Community of Aspiring Professionals</h3>
            <p>Collaborate with peers and industry experts to grow together.</p>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="about-hero" data-animation="fade-in">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text" data-animation="fade-in">
              <h1>Unlock Your Potential with Personalized Mentorship</h1>
              <p>At MSN Academy, we believe in the power of mentorship and hands-on projects.</p>
              <button className="btn-primary hover-lift">Learn More</button>
            </div>
            <div className="about-hero-image" data-animation="fade-up">
              <img src={heroImage} alt="Students working" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-hero" data-animation="fade-in">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text" data-animation="fade-in">
              <h1>Ready to Start Your <br />Journey?</h1>
              <p>Enroll in our courses today and unlock your potential in the digital world!</p>
              <button className="btn-primary hover-lift" style={{ backgroundColor: "#021533", color: "white", marginRight: "20px" }}>Enroll</button>
              <button className="btn-primary hover-lift" style={{ backgroundColor: "white", color: "black", border: "1px solid black" }} onClick={() => navigate("/contact")}>Contact</button>
            </div>
            <div className="about-hero-image" data-animation="fade-up">
              <img src={handImage} alt="Students working" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoursesPage;