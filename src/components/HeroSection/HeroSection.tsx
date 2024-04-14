import React from "react";
import "./HeroSection.css"; // Assurez-vous de créer et de styliser ce fichier CSS en fonction de vos besoins

const HeroSection: React.FC = () => {
  return (
    <div className="hero">
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default HeroSection;
