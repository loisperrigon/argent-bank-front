import React from "react";
import "./Header";

interface HeaderProps {
  name: string | null;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name}!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};

export default Header;
