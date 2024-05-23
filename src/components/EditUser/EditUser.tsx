import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../api/api";
import { updateUser } from "../../features/auth/auth";
import { RootState } from "../../store";
import "./EditUser.css"; // Ajustez le chemin selon vos besoins

interface EditUserProps {
  handleEdit: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const [userFirstName, setUserFirstName] = useState(
    useSelector((state: RootState) => state.auth.userFirstName)
  );
  const [userLastName, setUserLastName] = useState(
    useSelector((state: RootState) => state.auth.userLastName)
  );
  const token = useSelector((state: RootState) => state.auth.token);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUserProfile(token, {
      firstName: userFirstName,
      lastName: userLastName,
    })
      .then((data) => {
        console.log("Profil mis à jour avec succès:", data);
        dispatch(
          updateUser({
            userFirstName: userFirstName,
            userLastName: userLastName,
          })
        );
        handleEdit();
      })

      .catch((error) =>
        console.error("Erreur lors de la mise à jour du profil:", error)
      );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-editUser">
        <div className="form-editUser-inputs">
          <div className="input-NAME">
            <input
              type="text"
              id="userFirstName"
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </div>
          <div className="input-NAME">
            <input
              type="text"
              id="userLastName"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-editUser-buttons">
          <button className="form-editUser-button" type="submit">
            Sauvegarder
          </button>
          <button
            className="form-editUser-button"
            type="button"
            onClick={handleEdit}
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
