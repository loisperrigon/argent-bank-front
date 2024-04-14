import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";
import Footer from "../../components/communs/Footer/Footer";
import Navbar from "../../components/communs/Navbar/Navbar";
import IsLogged from "../../contexts/Islogged/isLogged";
import "./SignIn.css";

const SignIn: React.FC = () => {
  return (
    <>
      <Navbar />
      <IsLogged>
        <main className="main bg-dark">
          <SignInForm />
        </main>
      </IsLogged>
      <Footer />
    </>
  );
};

export default SignIn;
