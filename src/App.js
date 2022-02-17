import "./App.css";
import React from "react";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  return (
    <div className="App">
      <Container>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies/:movieId/*" element={<MoviesDetailsPage />} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Suspense>
        <ToastContainer autoClose={3000} />
      </Container>
    </div>
  );
}

export default App;
