import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaCheckSquare, FaRegSquare, FaDownload } from "react-icons/fa";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./CertificatePage.css";

// Templates
import studentTemplate from "../assets/Student.png";
import internTemplate from "../assets/Intern.png";
import competitionTemplate from "../assets/competition.png";

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

// 🔹 Error Popup Component
const ErrorPopup = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h3>Certificate Verification</h3>
        <p>{message}</p>
        <button className="popup-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState("");
  const [certificateData, setCertificateData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeRole, setActiveRole] = useState("student");

  // Animations
  const [refLeft, leftVisible] = useScrollAnimation();
  const [refRight, rightVisible] = useScrollAnimation();
  const [refSteps, stepsVisible] = useScrollAnimation();

  const handleRoleChange = (role) => {
    setActiveRole(role);
  };

  const getTemplate = () => {
    switch (activeRole) {
      case "student":
        return studentTemplate;
      case "intern":
        return internTemplate;
      case "competition":
        return competitionTemplate;
      default:
        return studentTemplate;
    }
  };

  const handleVerify = async () => {
    setError("");
    setCertificateData(null);

    if (!certificateId) {
      setError("Please enter your Certificate ID.");
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

        if (data.role) {
          setActiveRole(data.role.toLowerCase());
        }
      } else {
        setError("❌ Certificate not found.");
      }
    } catch (err) {
      setError("❌ Certificate not found.");
    }
    setLoading(false);
  };

  // 🔹 Download Certificate
  const handleDownload = (type = "png") => {
    const certElement = document.getElementById("certificate-preview");

    if (!certElement) return;

    html2canvas(certElement, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      if (type === "png") {
        const link = document.createElement("a");
        link.href = imgData;
        link.download = `${certificateData.recipient_name}_certificate.png`;
        link.click();
      } else if (type === "pdf") {
        const pdf = new jsPDF("landscape", "mm", "a4");
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${certificateData.recipient_name}_certificate.pdf`);
      }
    });
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
              Verify your certificate issued by MSN Academy. Enter your
              certificate ID to access your certificate details.
            </p>

            {/* Role buttons */}
            <div className="role-buttons">
              {certificateData && certificateData.role ? (
                <button className="role-btn active">
                  {certificateData.role.charAt(0).toUpperCase() +
                    certificateData.role.slice(1)}
                </button>
              ) : (
                <>
                  <button
                    className={`role-btn ${activeRole === "student" ? "active" : ""}`}
                    onClick={() => handleRoleChange("student")}
                  >
                    Student
                  </button>
                  <button
                    className={`role-btn ${activeRole === "intern" ? "active" : ""}`}
                    onClick={() => handleRoleChange("intern")}
                  >
                    Intern
                  </button>
                  <button
                    className={`role-btn ${activeRole === "competition" ? "active" : ""}`}
                    onClick={() => handleRoleChange("competition")}
                  >
                    Competition
                  </button>
                </>
              )}
            </div>

            {/* Input */}
            <div className="input-box">
              <label>Enter your Certificate ID</label>
              <input
                type="text"
                placeholder="Type here"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
              />
            </div>

            {/* Verify button */}
            <button
              className="verify-btn bounce"
              onClick={handleVerify}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Certificate"}
            </button>
          </div>

          {/* Right Section */}
          <div
            ref={refRight}
            className={`verification-right rotate-in ${rightVisible ? "show" : ""}`}
          >
            <img src={getTemplate()} alt="Certificate Preview" />
          </div>
        </div>

        {/* Certificate Preview */}
        {certificateData && (
          <div className="certificate-preview-container">
            <div id="certificate-preview" className="certificate-preview">
              <img
                src={getTemplate()}
                alt="Certificate Template"
                className="certificate-bg"
              />
              <div className="cert-text cert-name">
                {certificateData.recipient_name}
              </div>
              <div className="cert-text cert-course">
                {certificateData.course_title}
              </div>
              <div className="cert-text cert-date">
                {certificateData.issued_at}
              </div>
              <div className="cert-text cert-id">ID: {certificateData.msn_id}</div>
              <div className="cert-text cert-code">
                Verification Code: {certificateData.code}
              </div>
            </div>

            {/* Download Buttons */}
            <div className="download-buttons">
              <button onClick={() => handleDownload("png")} className="download-btn">
                <FaDownload /> Download PNG
              </button>
              <button onClick={() => handleDownload("pdf")} className="download-btn">
                <FaDownload /> Download PDF
              </button>
            </div>

            <br />
            <br />
            <br />
          </div>
        )}

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
                {certificateId ? <FaCheckSquare className="step-icon" /> : <FaRegSquare className="step-icon" />}
              </div>
              <h3>Enter Your ID</h3>
              <p>Provide the correct ID to verify your certificate.</p>
            </div>

            <div className="step-box slide-in-up">
              <div className={`step-icon-container ${certificateData ? "active" : ""}`}>
                {certificateData ? <FaCheckSquare className="step-icon" /> : <FaRegSquare className="step-icon" />}
              </div>
              <h3>Verify</h3>
              <p>Click the button to check your certificate details.</p>
            </div>

            <div className="step-box slide-in-right">
              <div className={`step-icon-container ${certificateData ? "active" : ""}`}>
                {certificateData ? <FaCheckSquare className="step-icon" /> : <FaRegSquare className="step-icon" />}
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

        {/* 🔹 Error Popup */}
        <ErrorPopup message={error} onClose={() => setError("")} />
      </div>
      <Footer />
    </>
  );
};

export default CertificateVerification;
