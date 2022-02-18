import React from 'react';
import { useState, useEffect } from 'react';
import { lazy, Suspense } from 'react';
import s from './HomePage.module.css';
import { fetchTrendingMovies } from '../../services/api';

const MoviesList = lazy(() => import('../../components/MoviesList/MoviesList'));

function HomePage() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then(({ results }) => setMovies(results))
      .finally(setLoading(false));
  }, []);

  const { section, title } = s;

  return (
    <div className={section}>
      <h1 className={title}> Trending today </h1>
      <Suspense fallback={loading && <div>Loading...</div>}>
        {movies && <MoviesList movies={movies} />}
      </Suspense>
    </div>
  );
}

export default HomePage;
