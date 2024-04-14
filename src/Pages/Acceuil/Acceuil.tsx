import React from "react";
import FeaturesSection from "../../components/FeaturesSection/FeaturesSection";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/communs/Footer/Footer";
import Navbar from "../../components/communs/Navbar/Navbar";
import "../../styles/styles.css"; // Assurez-vous d'avoir un fichier CSS pour des styles globaux si nécessaire

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </>
  );
};

export default App;
