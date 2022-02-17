import React, { useState, useEffect } from "react";
import { lazy, Suspense } from "react";
import { fetchSearchMovies } from "../../services/api";
import s from "./MoviesPage.module.css";

const SearchForm = lazy(() => import("../../components/SearchForm/SearchForm"));
const MoviesList = lazy(() => import("../../components/MoviesList/MoviesList"));

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState(null);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    searchQuery &&
      fetchSearchMovies(searchQuery).then((res) => setMovies(res.results));
  }, [searchQuery]);

  const handleChangeQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className={s.section}>
      <SearchForm onSubmit={handleChangeQuery} />
      <Suspense fallback={<div>Loading...</div>}>
        {movies && <MoviesList movies={movies} />}
      </Suspense>
    </div>
  );
};

export default MoviesPage;
