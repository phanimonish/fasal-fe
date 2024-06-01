import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="movie-card-section">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
