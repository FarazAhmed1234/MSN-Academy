import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedin, FaGithub, FaGlobe, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

const Footer = () => {
  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    // Initialize scroll animations for footer elements
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.getAttribute('data-animation') || 'fade-in';
          entry.target.classList.add(animationType);
        }
      });
    }, observerOptions);

    // Observe all elements with the 'data-animation' attribute
    if (footerRef.current) {
      const animatedElements = footerRef.current.querySelectorAll('[data-animation]');
      animatedElements.forEach(el => {
        observer.observe(el);
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (email) {
      setPopupMessage(`🎉 Thank you for subscribing with: ${email}`);
      setShowPopup(true);
      e.target.reset();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  // Auto close after 10 sec
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        closePopup();
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);

  return (
    <footer className="footer-container" ref={footerRef}>
      <div className="footer-content">
        {/* ===== Quick Links ===== */}
        <div className="footer-column" data-animation="slide-in-left">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/" className="hover-effect">About Us</a></li>
            <li><a href="/contact" className="hover-effect">Contact Us</a></li>
            <li><a href="/" className="hover-effect">Testimonials</a></li>
            <li><a href="/" className="hover-effect">Resources</a></li>
            <li><a href="/" className="hover-effect">Blog Posts</a></li>
          </ul>
        </div>

        {/* ===== Resources ===== */}
        <div className="footer-column1" data-animation="slide-in-left" data-animation-delay="0.1s">
          <h3>Resources</h3>
          <ul className="footer-links1">
            <li><a href="#" className="hover-effect">FAQs</a></li>
            <li><a href="#" className="hover-effect">Support</a></li>
            <li><a href="#" className="hover-effect">Careers</a></li>
            <li><a href="#" className="hover-effect">Events</a></li>
            <li><a href="#" className="hover-effect">Community</a></li>
          </ul>
        </div>

        {/* ===== Stay Updated ===== */}
        <div className="footer-column" data-animation="slide-in-left" data-animation-delay="0.2s">
          <h3>Stay Updated</h3>
          <ul className="footer-links">
            <li><a href="#" className="hover-effect">Newsletter</a></li>
            <li><a href="#" className="hover-effect">Webinars</a></li>
            <li><a href="#" className="hover-effect">Workshops</a></li>
            <li><a href="#" className="hover-effect">Resources</a></li>
            <li><a href="#" className="hover-effect">Feedback</a></li>
          </ul>
        </div>

        {/* ===== Newsletter Form ===== */}
        <div className="footer-column" data-animation="slide-in-right">
          <h3>Newsletter</h3>
          <p className="newsletter-desc">Join our newsletter for the latest updates and exclusive offers.</p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              required 
              className="input-animate"
            />
            <button type="submit" className="join-button pulse-on-hover">Join</button>
          </form>
          <p className="privacy-note">
            By submitting you agree to our Privacy Policy and consent to receive emails.
          </p>

          <div className="social-icons">
            <a href="https://www.facebook.com/people/MSN-Academy/61564445365771/?rdid=CshiN7SdrmJo4yCf&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F16cqKCuUgV%2F" className="social-icon"><FaFacebook size={20} /></a>
            <a href="#" className="social-icon"><FaXTwitter size={20} /></a>
            <a href="https://www.instagram.com/msn_academytech/?igsh=YjFnbDRybDZuOWNo#" className="social-icon"><FaInstagram size={20} /></a>
            <a href="https://www.linkedin.com/company/msn-academy269/posts/?feedView=all" className="social-icon"><FaLinkedin size={20} /></a>
            <a href="https://www.youtube.com/@MSNAcademy-Officials" className="social-icon"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom" data-animation="fade-in">
        <div className="copyright">
          © 2024 MSN Academy. All rights reserved.
        </div>
        <div className="footer-bottom-links">
          <a href="#" className="hover-effect">Privacy Policy</a>
          <a href="#" className="hover-effect">Terms of Use</a>
          <a href="#" className="hover-effect">Cookie Settings</a>
        </div>
      </div>

      {/* ===== Success Popup ===== */}
      {showPopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-box" onClick={(e) => e.stopPropagation()}>
            {/* X Close Button */}
            <button className="popup-close" onClick={closePopup}>×</button>

            <div className="popup-icon">🎉</div>
            <h3>Subscription Successful</h3>
            <p className="popup-message">{popupMessage}</p>
            <p className="popup-note">
              You're now part of our community! 🎊  
              Keep an eye on your inbox for exclusive updates, resources, and offers.  
              Don't forget to whitelist our email so you never miss out!
            </p>
            <div className="popup-actions">
              <a href="/blog" className="popup-btn">📖 Visit Blog</a>
              <a href="/resources" className="popup-btn secondary">📚 Explore Resources</a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;