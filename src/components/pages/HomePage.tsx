import React from "react";
import CleanHero from "../sections/CleanHero";
import CleanAbout from "../sections/CleanAbout";
import CleanServices from "../sections/CleanServices";
import CleanProcess from "../sections/CleanProcess";
import CleanClients from "../sections/CleanClients";
import CleanTestimonials from "../sections/CleanTestimonials";
import CleanContact from "../sections/CleanContact";
import Client from "../sections/Client";

const HomePage:React.FC = () => {
  return (
    <>
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
