import React from "react";
import { Link } from "react-router-dom";
import s from "./MovieNav.module.css";

function MovieNav() {
  return (
    <>
      <div className={s.nav}>
        <p className={s.title}>Addition information</p>
        <ul className={s.list}>
          <li className={s.item}>
            <Link to="cast" className={s.link}>
              Cast
            </Link>
          </li>
          <li className={s.item}>
            <Link to="reviews" className={s.link}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MovieNav;
