import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import "./CertificatePage.css";
import sampleCert from "../assets/Faraz.jpg"; // replace with your certificate image

// ✅ Scroll Animation Hook
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting);
        });
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
  const [activeRole, setActiveRole] = useState("student");
  const [certificateId, setCertificateId] = useState("");

  // Animation refs
  const [refLeft, leftVisible] = useScrollAnimation();
  const [refRight, rightVisible] = useScrollAnimation();
  const [refSteps, stepsVisible] = useScrollAnimation();

  const handleRoleChange = (role) => {
    setActiveRole(role);
  };

  const handleVerify = () => {
    console.log("Verifying certificate for:", activeRole, "ID:", certificateId);
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
              Easily verify your certificate issued by MSN Academy. Just select
              your role and enter your ID to access your certificate details.
            </p>

            {/* Role Buttons */}
            <div className="role-buttons">
              <button
                className={`role-btn ${
                  activeRole === "student" ? "active" : ""
                }`}
                onClick={() => handleRoleChange("student")}
              >
                Student
              </button>
              <button
                className={`role-btn ${
                  activeRole === "intern" ? "active" : ""
                }`}
                onClick={() => handleRoleChange("intern")}
              >
                Intern
              </button>
            </div>

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
            <button className="verify-btn bounce" onClick={handleVerify}>
              Verify Certificate
            </button>

            <p className="instant-text">Instant results available</p>

            {/* Details Box */}
            <div className="details-box flip-in">
              <h4>Details</h4>
              <p>
                Your certificate will include your full name, course name or
                intern department, completion date, and a unique certificate
                number. You can also preview your certificate once verified.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div
            ref={refRight}
            className={`verification-right rotate-in ${rightVisible ? "show" : ""}`}
          >
            <img src={sampleCert} alt="Certificate Preview" />
          </div>
        </div>

        {/* Steps Section */}
        <div
          ref={refSteps}
          className={`steps-container fade-in-up ${stepsVisible ? "show" : ""}`}
        >
          <h2 className="steps-title">Certificate Verification Made Simple</h2>
          <p className="steps-subtitle">
            Easily verify your certificate from MSN Academy. Select your role
            and enter your ID to access your credentials.
          </p>

          <div className="steps-row">
            <div className="step-box slide-in-left">
              <div className={`step-icon-container ${activeRole ? "active" : ""}`}>
                {activeRole ? (
                  <FaCheckSquare className="step-icon" />
                ) : (
                  <FaRegSquare className="step-icon" />
                )}
              </div>
              <h3>Choose Your Role</h3>
              <p>Select either Student or Intern to proceed.</p>
            </div>

            <div className="step-box slide-in-up">
              <div
                className={`step-icon-container ${certificateId ? "active" : ""}`}
              >
                {certificateId ? (
                  <FaCheckSquare className="step-icon" />
                ) : (
                  <FaRegSquare className="step-icon" />
                )}
              </div>
              <h3>Enter Your ID</h3>
              <p>Provide the relevant ID to verify your certificate.</p>
            </div>

            <div className="step-box slide-in-right">
              <div className="step-icon-container">
                <FaRegSquare className="step-icon" />
              </div>
              <h3>See Your Certificate</h3>
              <p>Click the button below to verify your certificate.</p>
            </div>
          </div>

          <button
            className="steps-verify-btn pulse"
            onClick={handleVerify}
            style={{ marginBottom: "80px" }}
          >
            Verify
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CertificateVerification;
