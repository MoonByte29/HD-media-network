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
        {/* Primary Meta Tags */}
        <title>HD Media Network | Best IT company in Jaipur</title>
        <meta name="title" content="HD Media Network | Empowering Your Digital Presence" />
        <meta
          name="description"
          content="HD Media Network delivers cutting-edge web development, mobile apps, digital marketing, SEO, and UI/UX solutions tailored for businesses and brands. Let’s build your digital future."
        />
        <meta
          name="keywords"
          content="HD Media Network, Web Development, Mobile App Development, Digital Marketing, SEO Services, UI/UX Design, Branding, IT Solutions, Website Design, Web development agency , Jaipur , India"
        />
        <meta name="author" content="HD Media Network" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://hdmedianetwork.in/" />
        <meta property="og:title" content="HD Media Network | Empowering Your Digital Presence" />
        <meta
          property="og:description"
          content="From stunning websites to mobile apps, marketing, and branding — HD Media Network is your all-in-one digital growth partner."
        />
        <meta property="og:image" content="http://hdmedianetwork.in/og-image.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://hdmedianetwork.in/" />
        <meta property="twitter:title" content="HD Media Network | Empowering Your Digital Presence" />
        <meta
          property="twitter:description"
          content="Web development, marketing, mobile apps & SEO — all under one roof. Let’s elevate your brand online."
        />
        <meta property="twitter:image" content="http://hdmedianetwork.in/og-image.jpg" />
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
