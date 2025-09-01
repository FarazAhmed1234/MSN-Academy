import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import { FaLinkedin, FaGithub, FaGlobe, FaStar } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import "./HomePage.css";
import bgImage from "../assets/background22.png";
import heroImage from "../assets/Future.jpg";
import sulemanImage from "../assets/Suleman.png";
import course from "../assets/new.avif";
import chooseImage from "../assets/choose.webp";
import edgeImage from "../assets/edge.jpg";
import joinImage from "../assets/join.png";
import sulemanteam from "../assets/sulemanImage.png";
import rijateam from "../assets/rijaImage.png";
import team3 from "../assets/3Image.png";
import team4 from "../assets/4Image.png";
import team5 from "../assets/5Image.png";
import team6 from "../assets/6Image.png";
import uiimage from "../assets/ui.webp";
import frontendImg from "../assets/frontend.jpg";
import Appimage from "../assets/mobile.jpg";
import Fizza from "../assets/Fizza.png";
import furqanteam from "../assets/furqanteam.png";
import Bissam from "../assets/Bissam.png";
import Shahmir from "../assets/Shahmir.png";
import abdul from "../assets/abdul.png";
import Faseeh from "../assets/Faseeh.png";




import { Link } from "react-router-dom";

import team7 from "../assets/7Image.png";

const HomePage = () => {

  const navigate = useNavigate();
  const observerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const supportsIO = 'IntersectionObserver' in window;

    const options = isMobile
      ? { root: null, threshold: 0.05, rootMargin: '0px 0px -10% 0px' }
      : { root: null, threshold: 0.15, rootMargin: '0px 0px -100px 0px' };

    const elements = Array.from(document.querySelectorAll('[data-animation]'));

    const setInitialState = (el) => {
      const type = el.getAttribute('data-animation') || 'fade-in';
      const delay = el.getAttribute('data-animation-delay') || '0s';
      const duration = el.getAttribute('data-animation-duration') || (isMobile ? '0.5s' : '0.8s');

      el.style.opacity = '0';
      el.style.transitionProperty = 'opacity, transform';
      el.style.transitionTimingFunction = 'ease';
      el.style.transitionDuration = duration;
      el.style.transitionDelay = delay;

      if (type.includes('slide')) {
        if (type.includes('left')) el.style.transform = 'translateX(-50px)';
        else if (type.includes('right')) el.style.transform = 'translateX(50px)';
      } else if (type.includes('zoom')) {
        el.style.transform = 'scale(0.9)';
      } else if (type.includes('up')) {
        el.style.transform = 'translateY(30px)';
      } else if (type.includes('down')) {
        el.style.transform = 'translateY(-30px)';
      }
    };

    const activate = (el) => {
      const type = el.getAttribute('data-animation') || 'fade-in';
      el.classList.add(type);
      el.style.opacity = '1';
    };

    const reset = (el) => {
      const type = el.getAttribute('data-animation') || 'fade-in';
      el.classList.remove(type);
      el.style.opacity = '0';

      if (type.includes('slide')) {
        if (type.includes('left')) el.style.transform = 'translateX(-50px)';
        else if (type.includes('right')) el.style.transform = 'translateX(50px)';
      } else if (type.includes('zoom')) {
        el.style.transform = 'scale(0.9)';
      } else if (type.includes('up')) {
        el.style.transform = 'translateY(30px)';
      } else if (type.includes('down')) {
        el.style.transform = 'translateY(-30px)';
      }
    };

    elements.forEach(setInitialState);

    // Fallback if IO not supported
    if (!supportsIO) {
      const onScroll = () => {
        elements.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const visible = rect.top < window.innerHeight * (isMobile ? 0.95 : 0.85) && rect.bottom > 0;
          if (visible) activate(el);
        });
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const onceAttr = el.getAttribute('data-animation-once');
        const once = onceAttr === 'false' ? false : true; // default true

        if (entry.isIntersecting) {
          activate(el);
          if (isMobile && once) io.unobserve(el); // smoother on mobile
        } else {
          if (!isMobile || once === false) reset(el);
        }
      });
    }, options);

    // Ensure initial styles are applied before observing (avoids race on iOS)
    requestAnimationFrame(() => elements.forEach((el) => io.observe(el)));

    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar1 />

      <section className="widthfull">
        {/* Hero Section */}
        <section className="hero" style={{ backgroundImage: `url(${bgImage})`, height:"500px" }} >
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
              <div className="about-hero-text" data-animation="fade-in-down">
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
              <div className="about-hero-image" data-animation="fade-in-up">
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
                  <img src={uiimage} alt="UI/UX Design" />
                </div>
                <h3>Full Stack Graphic Designing with UI/UX</h3>
                <p className="certificate">Professional Certificate</p>
                
                <div className="card-buttons">
                  <button className="btn-outline hover-lift">Enroll Now</button>
                  <button
                    className="btn-secondary hover-lift"
                    onClick={() => window.open("https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc", "_blank")}
                  >
                    Watch Demo
                  </button>

                </div>
              </div>

              <div className="course-card" data-animation="zoom-in" data-animation-delay="0.2s">
                <div className="course-image">
                  <img src={frontendImg} alt="Web Development" />
                </div>
                <h3>Frontend Website Development</h3>
                <p className="certificate">Professional Certificate</p>
                
                <div className="card-buttons">
                  <button className="btn-outline hover-lift">Enroll Now</button>
  <button
                    className="btn-secondary hover-lift"
                    onClick={() => window.open("https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc", "_blank")}
                  >
                    Watch Demo
                  </button>                </div>
              </div>

              <div className="course-card" data-animation="zoom-in" data-animation-delay="0.3s">
                <div className="course-image">
                  <img src={Appimage} alt="App Development" />
                </div>
                <h3>Mobile Application Development with Flutter</h3>
                <p className="certificate">Professional Certificate</p>
                
                <div className="card-buttons">
                  <button className="btn-outline hover-lift">Enroll Now</button>
  <button
                    className="btn-secondary hover-lift"
                    onClick={() => window.open("https://youtube.com/playlist?list=PLZbMaGH5VmjXJXvoMK4LHcZGq83pLAM1A&si=4D3rHMrbG0GIlmjc", "_blank")}
                  >
                    Watch Demo
                  </button>                </div>
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
              <div className="leader-text" data-animation="fade-in-down">
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
              <div className="leader-image" data-animation="fade-in-up">
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
                <div className="card-image" >
                  <img src={chooseImage} alt="Why Choose MSN Academy" style={{ marginTop: "10px" }} />
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




        <section className="team">
          <div className="container">
            <p className="team-subtitle" data-animation="fade-in">Our Team</p>
            <h2 className="team-title" data-animation="fade-in" data-animation-delay="0.1s">Trainer Team</h2>

            <div className="team-grid">


              <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.2s">
                <div className="profile-image">
                  <img src={furqanteam} alt="Muhammad Furqan" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Muhammad Furqan</h3>
                  <p className="profile-title">Full Stack Graphic Trainer</p>
                  <p className="profile-description">Trains learners in creative and technical graphic design skills</p>
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
                  <img src={Bissam} alt="Bissam Akbar" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Bissam Akbar</h3>
                  <p className="profile-title">Digital Marketing Trainer</p>
                  <p className="profile-description">Trains learners in strategies and tools for effective online marketing.</p>
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
                  <img src={Fizza} alt="Fizza Khokhar" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Fizza Khokhar</h3>
                  <p className="profile-title">Full Stack Developer | Frontend Trainer</p>
                  <p className="profile-description">Develops end-to-end web solutions and trains learners in frontend technologies.</p>
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
                  <p className="profile-title">Full Stack Developer | App Dev Trainer</p>
                  <p className="profile-description">Builds complete web solutions and trains learners in app development.</p>
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

              <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.1s">
                <div className="profile-image">
                  <img src={sulemanteam} alt="Muhammad Suleman" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Muhammad Suleman</h3>
                  <p className="profile-title">Data Analyst Trainer</p>
                  <p className="profile-description">Trains learners in data analysis, visualization, and interpretation for informed decision-making.</p>
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
                  <p className="profile-title">Frontend Trainer</p>
                  <p className="profile-description">Trains learners in designing and developing responsive, user-friendly web interfaces.</p>
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
                  <img src={Shahmir} alt="Shahmir Sandhu" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Shahmir Sandhu</h3>
                  <p className="profile-title">MERN Backend Trainer</p>
                  <p className="profile-description">Trains learners in building and managing backend systems using the MERN stack.</p>
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



              <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.1s">
                <div className="profile-image">
                  <img src={abdul} alt="Syed Abdul Wahab" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Syed Abdul Wahab</h3>
                  <p className="profile-title">Competitive Programming Trainer</p>
                  <p className="profile-description">Trains learners in problem-solving, algorithms, and coding skills for programming competitions.</p>
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


              <div className="profile-card" data-animation="zoom-in" data-animation-delay="0.1s">
                <div className="profile-image">
                  <img src={Faseeh} alt="Faseeh Siddique" />
                </div>
                <div className="profile-content">
                  <h3 className="profile-name">Faseeh Siddique</h3>
                  <p className="profile-title">Python Programming Trainer</p>
                  <p className="profile-description">Trains learners in Python programming and applications.</p>
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
                className="btn-primary pulse" onClick={() => navigate("/courses")}>Enroll</button>

              <button className="btn-outline hover-lift" onClick={() => navigate("/contact")}>Contact</button>

            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;