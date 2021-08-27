import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Navbar/navbar.module.css";

const Navbar = () => {
  return (
    <nav style={{ background: "rgba(189, 193, 199)", padding: "10px" }}>
      <div>
        <NavLink to="/Profile" className={classes.item} activeClassName={classes.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/Dialogs" className={classes.item} activeClassName={classes.active}>
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink to="/Users" className={classes.item} activeClassName={classes.active}>
          Users
        </NavLink>
      </div>
      <div>
        <a href="https://www.w3schools.com/" className={classes.item}>
          News
        </a>
      </div>
      <div>
        <a href="https://www.w3schools.com/" className={classes.item}>
          Music
        </a>
      </div>
      <div>
        <a href="https://www.w3schools.com/" className={classes.item}>
          Settings
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
