import React, { useState } from "react";
import EditUser from "../../EditUser/EditUser";
import "./Header";

interface HeaderProps {
  name: string | null;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  const [isEdit, setIsEdit] = useState(false);

  function handleEdit() {
    setIsEdit(!isEdit);
  }
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {name}!
      </h1>
      {isEdit ? (
        <EditUser handleEdit={handleEdit} />
      ) : (
        <button className="edit-button" onClick={handleEdit}>
          Edit Name
        </button>
      )}
    </div>
  );
};

export default Header;
