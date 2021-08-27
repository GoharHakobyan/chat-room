import React from "react";
import { NavLink } from "react-router-dom";
import s from "../Header/header.module.css";
import logo from "../../assets/images/logo.png";

const Header = (props) => {
  return (
    <div className={s.header}>
      <div className={s.logoWrapper}>
        <img src={logo} alt="logo" />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? (
          <p>{props.login}</p>
        ) : (
          <NavLink to={"/login"}>
            <p>Login</p>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
