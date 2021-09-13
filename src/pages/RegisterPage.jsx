import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpOperation } from "../redux/auth/auth-operations";
import { AuthFormWrapper } from "../Componenets/authPage/AuthPageStyled";

const initialState = {
  email: "",
  password: "",
  name: "",
};

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(signUpOperation(user));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <AuthFormWrapper>
      <form onSubmit={onHandleSubmit} className="login-form">
        <div className="flex-row logo">
          <h1>SignUp</h1>
        </div>
        <label className="flex-row">
          <input
            className="lf--input"
            onChange={handleChangeInput}
            type="text"
            name="name"
            value={user.name}
            placeholder="Your name"
            required
          />
        </label>
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
          SignUp
        </button>
      </form>
    </AuthFormWrapper>
  );
};

export default RegisterPage;
