import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isValidJWT } from "../../api/api"; // Assurez-vous que cette fonction est correctement importée
import Loader from "../../components/communs/Loader/Loader";
import { RootState } from "../../store";

interface IsLoggedProps {
  children: React.ReactNode;
}

const IsLogged: React.FC<IsLoggedProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const jwt = useSelector((state: RootState) => state.auth.token);

  React.useEffect(() => {
    const checkToken = async () => {
      if (jwt) {
        const isValid = await isValidJWT(jwt);

        if (isValid.valid) {
          navigate("../user");
        } else {
          navigate("../signIn");
        }
      } else {
        navigate("../signIn");
      }

      setIsLoading(false);
    };

    checkToken();
  }, []);

  return <>{isLoading ? <Loader /> : children}</>;
};

export default IsLogged;
