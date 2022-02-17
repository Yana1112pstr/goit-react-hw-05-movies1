import React from "react";
import { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import s from "./HomePage.module.css";
import { fetchTrendingMovies } from "../../services/api";

const MoviesList = lazy(() => import("../../components/MoviesList/MoviesList"));

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  const { section, title } = s;

  return (
    <div className={section}>
      <h1 className={title}> Trending today </h1>
      <Suspense fallback={<div>Loading...</div>}>
        {movies && <MoviesList movies={movies} />}
      </Suspense>
    </div>
  );
}

export default HomePage;
