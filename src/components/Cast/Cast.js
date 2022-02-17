import React, { useState, useEffect } from "react";
import { fetchMovieCast } from "../../services/api";
import s from "./Cast.module.css";

function Cast({ movieID }) {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    fetchMovieCast(movieID).then((res) => setActors(res.cast));
  }, [movieID]);

  return (
    <>
      <ul>
        {actors &&
          actors.map((actor) => {
            const { id, profile_path, name, character } = actor;
            if (profile_path === null) {
              return <div key={id}></div>;
            }
            return (
              <li key={id}>
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={id}
                    className={s.imgBox}
                  />
                </div>
                <p className={s.castName}>{name}</p>
                <p>{`Character: ${character}`}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default Cast;
