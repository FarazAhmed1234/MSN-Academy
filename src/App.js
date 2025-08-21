import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import it
import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import CertificatePage from "./Pages/CertificatePage";
import ContactPage from "./Pages/ContactPage";

function App() {
  return (
    <Router>
            <ScrollToTop />   {/* ✅ Add here */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
