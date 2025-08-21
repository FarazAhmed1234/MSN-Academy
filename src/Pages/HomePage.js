import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaLinkedin, FaGithub, FaGlobe, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./HomePage.css";
import bgImage from "../assets/background22.png";
import heroImage from "../assets/Future.jpg";
import sulemanImage from "../assets/Suleman.png";
import course from "../assets/new.avif";
import chooseImage from "../assets/choose.png";
import edgeImage from "../assets/edge.png";
import joinImage from "../assets/join.png";
import sulemanteam from "../assets/sulemanImage.png";
import rijateam from "../assets/rijaImage.png";
import team3 from "../assets/3Image.png";
import team4 from "../assets/4Image.png";
import team5 from "../assets/5Image.png";
import team6 from "../assets/6Image.png";
import { Link } from "react-router-dom";

import team7 from "../assets/7Image.png";

const HomePage = () => {

  const navigate = useNavigate();
  const observerRef = useRef(null);

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

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 data-animation="fade-in-down" style={{ color: "white" }}>Empowering Pakistan's <br /> Freelancers & Developers</h1>
            <p data-animation="fade-in-up" data-animation-delay="0.2s">
              Join our academy today and unlock premium learning tools, expert mentorship,
              and hands-on projects to put your new skills into action.
            </p>
            <button className="cta-btn pulse" data-animation="fade-in-up" data-animation-delay="0.4s" onClick={() => navigate("/courses")}>Join now</button>
          </div>
        </div>
      </section>

      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <div className="about-hero-text" data-animation="slide-in-left">
              <h1>EMPOWER YOUR FUTURE WITH MSN ACADEMY</h1>
              <p>
                MSN Academy strives to be a leading nation-building institution,
                equipping individuals with in-demand tech skills, an innovative mindset,
                and the drive to shape Pakistan's future and beyond. We deliver high-quality,
                affordable education that bridges the gap between academia and industry,
                producing job-ready professionals through hands-on learning, expert mentorship,
                and real-world projects. Guided by our core values of integrity and transparency,
                innovation and excellence, student-centric growth, diversity and inclusion,
                and empowerment through knowledge, we are committed to developing skilled,
                confident, and future-ready leaders.
              </p>
              <button className="btn-primary hover-lift">Learn More</button>
            </div>
            <div className="about-hero-image" data-animation="slide-in-right">
              <img src={heroImage} alt="Students working together" />
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses">
        <div className="container">
          <h2 data-animation="fade-in">Explore Our Comprehensive <br /> Course Offerings</h2>
          <p className="courses-intro" data-animation="fade-in" data-animation-delay="0.2s">
            At MSN Academy, we provide a diverse range of courses designed to equip you with the skills needed for success in the digital world. Whether you're a beginner or looking to enhance your expertise, we have something for everyone.
          </p>

          <div className="course-grid">
            <div className="course-card" data-animation="zoom-in" data-animation-delay="0.1s">
              <div className="course-image">
                <img src={course} alt="UI/UX Design" />
              </div>
              <h3>UI/UX Design</h3>
              <p className="certificate">Professional Certificate</p>
              <div className="rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star inactive" />
                <span>4.5 (7.2k)</span>
              </div>
              <div className="card-buttons">
                <button className="btn-outline hover-lift">Enroll Now</button>
                <button className="btn-secondary hover-lift">Watch Demo</button>
              </div>
            </div>

            <div className="course-card" data-animation="zoom-in" data-animation-delay="0.2s">
              <div className="course-image">
                <img src={course} alt="Web Development" />
              </div>
              <h3>Web Development</h3>
              <p className="certificate">Professional Certificate</p>
              <div className="rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star inactive" />
                <span>4.5 (7.2k)</span>
              </div>
              <div className="card-buttons">
                <button className="btn-outline hover-lift">Enroll Now</button>
                <button className="btn-secondary hover-lift">Watch Demo</button>
              </div>
            </div>

            <div className="course-card" data-animation="zoom-in" data-animation-delay="0.3s">
              <div className="course-image">
                <img src={course} alt="App Development" />
              </div>
              <h3>Mobile App Development</h3>
              <p className="certificate">Professional Certificate</p>
              <div className="rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star inactive" />
                <span>4.5 (7.2k)</span>
              </div>
              <div className="card-buttons">
                <button className="btn-outline hover-lift">Enroll Now</button>
                <button className="btn-secondary hover-lift">Watch Demo</button>
              </div>
            </div>
          </div>


          <div className="view-more" data-animation="fade-in" data-animation-delay="0.4s">
            <Link to="/courses" className="hover-underline">
              View More →
            </Link>
          </div>

        </div>
      </section>

      {/* Leader Section */}
      <section className="leader">
        <div className="container">
          <div className="leader-content">
            <div className="leader-text" data-animation="slide-in-left">
              <h2>Meet Muhammad Suleman: Visionary Leader of MSN Academy</h2>
              <p>
                Muhammad Suleman, Founder & CEO of MSN Academy, leverages his expertise in data analysis and digital technologies to empower freelancers and developers in Pakistan. He enhanced his skills through a data analytics internship at Systems Limited.
              </p>
              <div className="leader-points">
                <div className="point" data-animation="fade-in" data-animation-delay="0.2s">
                  <h4>Vision</h4>
                  <p>Empowering youth through practical job-ready skills.</p>
                </div>
                <div className="point" data-animation="fade-in" data-animation-delay="0.3s">
                  <h4>Experience</h4>
                  <p>Mentoring in Python, data analysis, and freelancing.</p>
                </div>
              </div>
            </div>
            <div className="leader-image" data-animation="slide-in-right">
              <img src={sulemanImage} alt="Muhammad Suleman" />
            </div>
          </div>
        </div>
      </section>

      {/* Learning Section */}
      <section className="learning">
        <div className="container">
          <h2 data-animation="fade-in">Stand Out in Learning</h2>
          <p className="learning-subtitle" data-animation="fade-in" data-animation-delay="0.2s">Discover the Future of Digital Skills Training</p>

          <div className="learning-grid">
            <div className="learning-card" data-animation="zoom-in" data-animation-delay="0.1s">
              <div className="card-content">
                <span className="tag">Unique</span>
                <h3>Why Choose MSN Academy?</h3>
                <p>Personal mentorship sets us apart from competitors.</p>
                <a href="#" className="learn-link hover-underline">Learn </a>
              </div>
              <div className="card-image">
                <img src={chooseImage} alt="Why Choose MSN Academy" />
              </div>
            </div>

            <div className="learning-card" data-animation="zoom-in" data-animation-delay="0.2s">
              <div className="card-content">
                <span className="tag">Innovative</span>
                <h3>Comparative Edge</h3>
                <p>Hands-on projects enhance real-world skills.</p>
                <a href="#" className="learn-link hover-underline">Enroll </a>
              </div>
              <div className="card-image">
                <img src={edgeImage} alt="Comparative Edge" />
              </div>
            </div>

            <div className="learning-card" data-animation="zoom-in" data-animation-delay="0.3s">
              <div className="card-content">
                <span className="tag">Expert</span>
                <h3>Join Us</h3>
                <p>Transform your career with our courses.</p>
                <a href="#" className="learn-link hover-underline">Start </a>
              </div>
              <div className="card-image">
                <img src={joinImage} alt="Join Us" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <p className="team-subtitle" data-animation="fade-in">Our Team</p>
          <h2 className="team-title" data-animation="fade-in" data-animation-delay="0.1s">Management Team</h2>

          <div className="team-grid">
            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.1s">
              <div className="profile-image">
                <img src={sulemanteam} alt="Muhammad Suleman" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Muhammad Suleman</h3>
                <p className="profile-title">Founder & CEO</p>
                <p className="profile-description">Passionate about mentoring in data science and freelancing.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.2s">
              <div className="profile-image">
                <img src={rijateam} alt="Rija Khan" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Rija Khan</h3>
                <p className="profile-title">HR Admin</p>
                <p className="profile-description">Expert in employee relations and administrative HR processes.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.3s">
              <div className="profile-image">
                <img src={team3} alt="Ashba Azeem" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Ashba Azeem</h3>
                <p className="profile-title">Content Manager</p>
                <p className="profile-description">Specializes in managing and creating engaging digital content.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.4s">
              <div className="profile-image">
                <img src={team4} alt="Haadya Khan" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Haadya Khan</h3>
                <p className="profile-title">Content Marketing Member</p>
                <p className="profile-description">Creates and promotes engaging content to boost brand awareness.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.5s">
              <div className="profile-image">
                <img src={team5} alt="Daniyal Ahmed" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Daniyal Ahmed</h3>
                <p className="profile-title">Development Lead</p>
                <p className="profile-description">Proficient in software development and system architecture design.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.6s">
              <div className="profile-image">
                <img src={team6} alt="Laralb Ali" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Laralb Ali</h3>
                <p className="profile-title">Strategic Finance Lead</p>
                <p className="profile-description">Guiding students in building successful freelancing careers.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>

            <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.7s">
              <div className="profile-image">
                <img src={team7} alt="Najm Ur Rehman" />
              </div>
              <div className="profile-content">
                <h3 className="profile-name">Najm Ur Rehman</h3>
                <p className="profile-title">Technical Mentor</p>
                <p className="profile-description">Guides learners in mastering technical skills and real-world projects.</p>
                <div className="social-links">
                  <a href="https://www.linkedin.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://twitter.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaXTwitter />
                  </a>
                  <a href="https://example.com" className="social-link hover-lift" target="_blank" rel="noreferrer">
                    <FaGlobe />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-overlay" data-animation="fade-in">
          <h2>Start Your Learning Journey Today</h2>
          <p>Join our courses to gain practical skills and boost your career in the digital world.</p>
          <div className="cta-buttons">
            <button
              className="btn-primary pulse"onClick={() => navigate("/courses")}>Enroll</button>

            <button className="btn-outline hover-lift" onClick={() => navigate("/contact")}>Contact</button>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;