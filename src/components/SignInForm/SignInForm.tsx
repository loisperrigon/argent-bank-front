import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as loginUser } from "../../api/api";
import { setCredentials } from "../../features/auth/auth";
import "./SignInForm.css"; // Adjust the path as needed

const SignInForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const userData = await loginUser(email, password);

      dispatch(
        setCredentials({
          email: email,
          userFirstName: userData.body.userFirstName,
          userLastName: userData.body.userLastName,
          token: userData.body.token,
        })
      );
      navigate("../user");
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button className="sign-in-button" type="submit">
          Sign in
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
