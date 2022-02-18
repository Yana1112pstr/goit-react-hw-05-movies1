import { Routes, Route, useParams } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { fetchMoviesByID } from '../../services/api';
import s from './MovieDetailsPage.module.css';
import ButtonGoBack from '../../components/ButtonGoBack/ButtonGoBack';

const MovieCard = lazy(() => import('../../components/MovieCard/MovieCard'));
const MovieNav = lazy(() => import('../../components/MovieNav/MovieNav'));
const Cast = lazy(() => import('../../components/Cast/Cast'));
const Reviews = lazy(() => import('../../components/Reviews/Reviews'));

function MoviesDetailsPage() {
  const [movie, setMovie] = useState(null);
  const movieID = useParams();
  const id = Object.values(movieID);

  useEffect(() => {
    fetchMoviesByID(id).then(setMovie);
  }, [id]);

  return (
    <div className={s.container}>
      <ButtonGoBack />
      <Suspense fallback={<div>Loading...</div>}>
        {movie && <MovieCard movie={movie} />}
        <MovieNav />
        <Routes>
          <Route path="cast" element={<Cast movieID={id} />} />
          <Route path="reviews" element={<Reviews movieID={id} />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default MoviesDetailsPage;
