import React from "react";
import chat from "../../assets/img/icon-chat.png";
import money from "../../assets/img/icon-money.png";
import security from "../../assets/img/icon-security.png";
import FeatureItem from "../communs/FeatureItem/FeatureItem";
import "./FeaturesSection.css"; // Assurez-vous de créer et de styliser ce fichier CSS en fonction de vos besoins

const FeaturesSection: React.FC = () => {
  return (
    <section className="features">
      <FeatureItem
        icon={chat}
        title="You are our #1 priority"
        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
      />
      <FeatureItem
        icon={money}
        title="More savings means higher rates"
        description="The more you save with us, the higher your interest rate will be!"
      />
      <FeatureItem
        icon={security}
        title="Security you can trust"
        description="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  );
};

export default FeaturesSection;
