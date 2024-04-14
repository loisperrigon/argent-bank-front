import React from "react";
import AccountUser from "../../components/AccountUser/AccountUser";
import Footer from "../../components/communs/Footer/Footer";
import Navbar from "../../components/communs/Navbar/Navbar";
import IsLogged from "../../contexts/Islogged/isLogged";
import "./User.css";

const User: React.FC = () => {
  try {
  } catch (error) {
    console.error("Failled acces data user", error);
  }
  return (
    <>
      <Navbar />
      <IsLogged>
        <AccountUser />
      </IsLogged>
      <Footer />
    </>
  );
};

export default User;
