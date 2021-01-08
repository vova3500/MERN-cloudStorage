import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../../utisl/input/Input";

import { login } from "../../redux/actions/user";

import "../registration/registration.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegistration = () => {
    dispatch(login(email, password));
  };

  return (
    <div className="registration">
      <h1 className="registration__title">Войти</h1>
      <Input
        value={email}
        setValue={setEmail}
        type="email"
        placeholder="Email"
      />
      <Input
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="Пароль"
      />
      <button onClick={handleRegistration} className="registration__btn">
        Войти
      </button>
    </div>
  );
};

export default Login;
