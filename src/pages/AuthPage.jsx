import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AuthFormWrapper } from "../Componenets/authPage/AuthPageStyled";

import { signInOperation } from "../redux/auth/auth-operations";

const initialState = {
  email: "",
  password: "",
};

const AuthPage = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState(initialState);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signInOperation(user));
    } catch (error) {}
  };

  return (
    <AuthFormWrapper>
      <form onSubmit={onHandleSubmit} className="login-form">
        <div className="flex-row logo">
          <h1>Login</h1>
        </div>
        <label className="flex-row">
          <input
            className="lf--input"
            onChange={handleChangeInput}
            value={user.email}
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </label>
        <label className="flex-row">
          <input
            className="lf--input"
            onChange={handleChangeInput}
            value={user.password}
            type="text"
            name="password"
            placeholder="Your password"
            required
          />
        </label>
        <button type="submit" className="lf--submit">
          SignIn
        </button>
      </form>
    </AuthFormWrapper>
  );
};

export default AuthPage;
