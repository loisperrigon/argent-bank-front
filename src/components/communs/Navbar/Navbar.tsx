import React from "react";
import { useSelector } from "react-redux";
import logo from "../../../assets/img/argentBankLogo.png";
import { RootState } from "../../../store";
import Logged from "./Logged/Logged";
import "./Navbar.css"; // Assurez-vous de créer et de styliser ce fichier CSS en fonction de vos besoins

const Navbar: React.FC = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      {isLoggedIn ? (
        <Logged />
      ) : (
        <div>
          <a className="main-nav-item" href="./signIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
