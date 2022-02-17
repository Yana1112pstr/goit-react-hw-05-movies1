import React from "react";
import { NavLink } from "react-router-dom";
import s from "./AppBar.module.css";

const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Home
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? s.activeLink : s.link)}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default AppBar;
