import React from "react";
import CleanHero from "../sections/CleanHero";
import CleanAbout from "../sections/CleanAbout";
import CleanServices from "../sections/CleanServices";
import CleanProcess from "../sections/CleanProcess";
import CleanClients from "../sections/CleanClients";
import CleanTestimonials from "../sections/CleanTestimonials";
import CleanContact from "../sections/CleanContact";
import Client from "../sections/Client";
import { Helmet } from "react-helmet-async";

const HomePage: React.FC = () => {
  return (
    <>
      {" "}
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
          content="web development, app development, digital marketing, SEO, social media marketing, IT solutions, professional web design ,web development agency "
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
        <meta property="og:url" content="https://hdmedianetwork.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HD Media Network | Professional Web Development & Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Transform your digital presence with our innovative IT solutions and expert services."
        />
        <link rel="canonical" href="https://hdmedianetwork.in" />
      </Helmet>
      
      <main>
        <CleanHero />
        <CleanClients />
        <CleanAbout />
        <CleanServices />
        <CleanProcess />
        <Client />
        <CleanTestimonials />
        <CleanContact />
      </main>
    </>
  );
};

export default HomePage;
