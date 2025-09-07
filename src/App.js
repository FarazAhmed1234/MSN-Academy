import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // ✅ import it
import HomePage from "./Pages/HomePage";
import CoursesPage from "./Pages/CoursesPage";
import CertificatePage from "./Pages/CertificatePage";
import ContactPage from "./Pages/ContactPage";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/feedback" element={<Testimonials />} />
      </Routes>
    </Router>
  );


}

export default App;
