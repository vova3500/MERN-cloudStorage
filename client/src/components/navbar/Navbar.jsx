import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../redux/actions/user";

import logo from "../../assets/images/logo.svg";

import "./navbar.css";

const Navbar = ({ isAuth }) => {
  const dispatch = useDispatch();

  const handeleLogout = () => {
    dispatch(logout());
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar__container">
        {!isAuth && (
          <>
            <div className="navbar__login">
              <NavLink to="/login">Войти</NavLink>
            </div>
            <div className="navbar__registartion">
              <NavLink to="/registration">Регистрация</NavLink>
            </div>
          </>
        )}
        {isAuth && (
          <div onClick={handeleLogout} className="navbar__exit">
            <NavLink to="/">Выход</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
