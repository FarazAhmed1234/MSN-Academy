import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import "./CertificatePage.css";
import sampleCert from "../assets/Faraz.png"; // fallback preview

// 🔹 Scroll Animation Hook
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
}

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Animation refs
  const [refLeft, leftVisible] = useScrollAnimation();
  const [refRight, rightVisible] = useScrollAnimation();
  const [refSteps, stepsVisible] = useScrollAnimation();

  const handleVerify = async () => {
    setError("");
    setCertificateData(null);

    if (!certificateId) {
      setError("⚠️ Please enter your Certificate ID.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://msn-certificate-application.vercel.app/api/certificate/getbycode/${certificateId}`
      );

      if (!response.ok) throw new Error("Certificate not found");

      const data = await response.json();

      if (data && data.code) {
        setCertificateData(data);
      } else {
        setError("❌ Certificate not found.");
      }
    } catch (err) {
      setError("❌ Certificate not found.");
    }
    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <div className="page-container">
        {/* Verification Section */}
        <div className="verification-container">
          {/* Left Section */}
          <div
            ref={refLeft}
            className={`verification-left zoom-in ${leftVisible ? "show" : ""}`}
          >
            <h2 className="title">Certificate Verification</h2>
            <p className="subtitle">
              Verify your certificate issued by MSN Academy. Enter your certificate
              ID to access your certificate details.
            </p>

            {/* Input Box */}
            <div className="input-box">
              <label>Enter your Certificate ID</label>
              <input
                type="text"
                placeholder="Type here"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
              />
            </div>

            {/* Verify Button */}
            <button
              className="verify-btn bounce"
              onClick={handleVerify}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Certificate"}
            </button>

            <p className="instant-text">Instant results available</p>

            {/* Error Message */}
            {error && <p className="error-text">{error}</p>}

            {/* Certificate Details */}
            {certificateData && (
              <div className="details-box flip-in">
                <h4>✅ Certificate Details</h4>
                <p><strong>MSN ID:</strong> {certificateData.msn_id}</p>
                <p><strong>Role:</strong> {certificateData.role}</p>
                <p><strong>Name:</strong> {certificateData.recipient_name}</p>
                <p><strong>Code:</strong> {certificateData.code}</p>
                <p><strong>Course:</strong> {certificateData.course_title}</p>
                <p><strong>Issued At:</strong> {certificateData.issued_at}</p>
              </div>




            )}
          </div>



          {/* Right Section */}
          <div
            ref={refRight}
            className={`verification-right rotate-in ${rightVisible ? "show" : ""}`}
          >
            {certificateData ? (
              <img
                src={certificateData.certificate_url || sampleCert}
                alt="Certificate Preview"
              />
            ) : (
              <img src={sampleCert} alt="Certificate Preview" />
            )}
          </div>
        </div>


        {/* Steps Section */}
        <div
          ref={refSteps}
          className={`steps-container fade-in-up ${stepsVisible ? "show" : ""}`}
        >
          <h2 className="steps-title">Certificate Verification Made Simple</h2>
          <p className="steps-subtitle">
            Enter your ID to verify your certificate instantly.
          </p>

          <div className="steps-row">
            <div className="step-box slide-in-left">
              <div className={`step-icon-container ${certificateId ? "active" : ""}`}>
                {certificateId ? (
                  <FaCheckSquare className="step-icon" />
                ) : (
                  <FaRegSquare className="step-icon" />
                )}
              </div>
              <h3>Enter Your ID</h3>
              <p>Provide the correct ID to verify your certificate.</p>
            </div>

            <div className="step-box slide-in-up">
              <div
                className={`step-icon-container ${certificateData ? "active" : ""}`}
              >
                {certificateData ? (
                  <FaCheckSquare className="step-icon" />
                ) : (
                  <FaRegSquare className="step-icon" />
                )}
              </div>
              <h3>Verify</h3>
              <p>Click the button to check your certificate details.</p>
            </div>

            <div className="step-box slide-in-right">
              <div className="step-icon-container">
                <FaRegSquare className="step-icon" />
              </div>
              <h3>See Your Certificate</h3>
              <p>Your details and preview will appear instantly.</p>
            </div>
          </div>

          <button
            className="steps-verify-btn pulse"
            onClick={handleVerify}
            disabled={loading}
            style={{ marginBottom: "80px" }}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CertificateVerification;
