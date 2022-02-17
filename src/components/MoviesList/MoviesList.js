import React from "react";
import s from "./MovieList.module.css";
import { Link } from "react-router-dom";

function MoviesList({ movies }) {
  const { list, item, link } = s;
  return (
    <ul className={list}>
      {movies.map(({ id, title, name }) => (
        <li key={id} className={item}>
          <Link to={`/movies/${id}`} className={link}>
            {title}
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesList;
