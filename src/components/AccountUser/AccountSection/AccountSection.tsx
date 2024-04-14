import React from "react";
import "./AccountSection.css";

interface AccountSectionProps {
  title: string;
  amount: string;
  description: string;
  buttonText: string;
}

const AccountSection: React.FC<AccountSectionProps> = ({
  title,
  amount,
  description,
  buttonText,
}) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">{buttonText}</button>
      </div>
    </section>
  );
};

export default AccountSection;
