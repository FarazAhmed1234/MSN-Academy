import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaTimes } from 'react-icons/fa';
import contactImage from "../assets/contact.avif";
import Footer from "../components/Footer";
import "./ContactPage.css";
import contactBg from "../assets/image.webp";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create refs for animation elements
  const heroRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  
  // Set up intersection observers for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        } else {
          // Remove the class when element leaves viewport to allow re-animation
          entry.target.classList.remove('animated');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all elements that need animation
    if (heroRef.current) observer.observe(heroRef.current);
    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    
    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, []);

  // Rest of the component remains the same...
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setShowModal(true);
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar />

      {/* Success Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-icon">
              <FaCheckCircle />
            </div>
            <h2>Thank You!</h2>
            <p>Your message has been successfully sent. We will get back to you soon.</p>
            <button className="modal-button" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      )}

      {/* Hero Section with Background Image */}
      <div
        ref={heroRef}
        className="contact-hero"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      >
        <div className="contact-hero-text">
          <p className="hero-subtitle">MSN Academy</p>
          <h1 style={{color:"white"}}>Connect With Us</h1>
          <p>
            Explore how to connect with us for support, collaboration, or any inquiries.
            We're here to help you grow.
          </p>
        </div>
      </div>

      <section>
        <div className="contact-container">
          <div ref={headerRef} className="contact-header">
            <h2>Contact Us</h2>
            <p>We'd love to hear from you!</p>
          </div>

          <div className="contact-content">
            <div ref={formRef} className="contact-form">
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    required
                  />
                  {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Type your message..."
                    required
                  ></textarea>
                  {errors.message && <span className="error-message">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="spinner"></div>
                  ) : (
                    <>
                      <FaPaperPlane style={{ marginRight: '8px' }} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            <div ref={infoRef} className="contact-info">
              <div className="contact-item">
                <div className="icon-container">
                  <FaPhone className="icon" />
                </div>
                <span>+22 224 87508153</span>
              </div>

              <div className="contact-item">
                <div className="icon-container">
                  <FaEnvelope className="icon" />
                </div>
                <span>mrsu.academy264@gmail.com</span>
              </div>

              <div className="contact-item">
                <div className="icon-container">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <span>Kanashi, Shashi</span>
              </div>

              <img src={contactImage} alt="Contact" className="contact-img" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactPage;