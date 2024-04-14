import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store";
import AccountSection from "./AccountSection/AccountSection";
import "./AccountUser";
import Header from "./Header/Header";

const MainContent: React.FC = () => {
  const username = useSelector((state: RootState) => state.auth.userFirstname);
  return (
    <main className="main bg-dark">
      <Header name={username} />
      <h2 className="sr-only">Accounts</h2>
      <AccountSection
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
        buttonText="View transactions"
      />
      <AccountSection
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
        buttonText="View transactions"
      />
      <AccountSection
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
        buttonText="View transactions"
      />
    </main>
  );
};

export default MainContent;
