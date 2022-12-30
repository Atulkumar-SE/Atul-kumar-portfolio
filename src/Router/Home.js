import React from "react";
import Footer from "../Components/Footer";
import HeroHome from "../Components/HeroHome";
import Work from "../Components/Project/work";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <Work/>
      <Footer />
    </>
  );
};

export default Home;
