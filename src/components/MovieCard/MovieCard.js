import React from "react";
import s from "./MovieCard.module.css";

function MovieCard({ movie }) {
  const { release_date, poster_path, overview, title, vote_average, genres } =
    movie;
  const release =
    release_date[0] + release_date[1] + release_date[2] + release_date[3];
  return (
    <div className={s.movieCard}>
      <div className={s.imgBox}>
        <img
          src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
          alt={title}
          className={s.image}
        />
      </div>
      <div className={s.infoBox}>
        <h2 className={s.title}>
          {title}({release})
        </h2>
        <p className={s.userScore}>User Score: {vote_average}</p>
        <p className={s.smallTitle}>Overview:</p>
        <p>{overview}</p>
        <p className={s.smallTitle}>Genres:</p>
        <ul>
          {genres.map(({ id, name }) => (
            <li key={id}>-{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MovieCard;
