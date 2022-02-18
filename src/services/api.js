import { toast } from 'react-toastify';
const APIkey = '?api_key=0acbef793912116e8168b05c9b24e1e7';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchData(url) {
  const res = await fetch(url);
  return res.ok
    ? await res.json()
    : Promise.reject(new Error(toast.error(`not found :(`)));
}

export function fetchTrendingMovies() {
  return fetchData(`
  ${BASE_URL}/trending/all/day${APIkey}`);
}

export function fetchSearchMovies(searchQuery) {
  return fetchData(`${BASE_URL}/search/movie${APIkey}&query=${searchQuery}`);
}

export function fetchMoviesByID(id) {
  return fetchData(`${BASE_URL}/movie/${id}${APIkey}`);
}

export function fetchMovieCast(movieID) {
  return fetchData(`${BASE_URL}/movie/${movieID}/credits${APIkey}`);
}

export function fetchMovieReviews(movieID) {
  return fetchData(`
  ${BASE_URL}/movie/${movieID}/reviews${APIkey}&page=1`);
}
