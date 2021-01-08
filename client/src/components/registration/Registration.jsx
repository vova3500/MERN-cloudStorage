import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Input from "../../utisl/input/Input";

import { registration } from "../../redux/actions/user";

import "./registration.css";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleRegistration = () => {
    dispatch(registration(email, password));
  };

  return (
    <div className="registration">
      <h1 className="registration__title">Регистрация</h1>
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
        Отправить
      </button>
    </div>
  );
};

export default Registration;
