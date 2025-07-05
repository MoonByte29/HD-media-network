import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./components/ui/Loader";
import CleanHeader from "./components/layout/CleanHeader";
import CleanFooter from "./components/layout/CleanFooter";

import ServicePage from "./components/pages/ServicePage";
import AboutPage from "./components/pages/AboutPage";
import ScrollToTop from "./components/ui/ScrollToTop";
import ScrollToTopOnLoad from "./components/ui/ScrollToTopOnLoad";
import HomePage from "./components/pages/HomePage";
import TermsConditionsPage from "./components/pages/TermsConditionsPage";
import FAQPage from "./components/pages/FAQPage";
import RefundPolicyPage from "./components/pages/RefundPolicyPage";

const App: React.FC = () => {
  useEffect(() => {
    document.title = "HD Media Network | Digital Solutions";
  }, []);

  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (appLoading) {
    return <Loader />;
  }

  return (
    <>
  


      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTopOnLoad />
          <CleanHeader />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/termsandconditions" element={<TermsConditionsPage/>} />
            <Route path="/faq" element={<FAQPage/>} />
            <Route path="/refundpolicy" element={<RefundPolicyPage/>} />
          </Routes>
          <ScrollToTop />
          <CleanFooter />{" "}
        </div>
      </Router>
    </>
  );
};

export default App;
