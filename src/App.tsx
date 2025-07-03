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
      <Helmet>
        {/* SEO Meta Tags */}
        <title>
          HD Media Network | Professional Web Development & Digital Marketing
        </title>
        <meta
          name="description"
          content="HD Media Network provides innovative IT solutions including web development, app development, and digital marketing services to help businesses thrive in the digital landscape."
        />
        <meta
          name="keywords"
          content="web development, app development, digital marketing, SEO, social media marketing, IT solutions, professional web design"
        />
        <meta
          property="og:title"
          content="HD Media Network | Professional Web Development & Digital Marketing"
        />
        <meta
          property="og:description"
          content="Transform your digital presence with our innovative IT solutions and expert services."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hdmedianetwork.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HD Media Network | Professional Web Development & Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Transform your digital presence with our innovative IT solutions and expert services."
        />
        <link rel="canonical" href="https://hdmedianetwork.com" />
      </Helmet>


      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTopOnLoad />
          <CleanHeader />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/servicepage" element={<ServicePage />} />
            <Route path="/aboutpage" element={<AboutPage />} />
          </Routes>
          <ScrollToTop />
          <CleanFooter />{" "}
        </div>
      </Router>
    </>
  );
};

export default App;
