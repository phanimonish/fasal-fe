import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Interstellar");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_OMDB_BASE_URL}&s=${search}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.Response === "False") {
          alert(data.Error);
          navigate("/");
          return;
        }

        setMovies(data.Search);

        setTotalPages(Math.ceil(data.totalResults) / 10);

        setLoading(false);
      });
  }, [search, page]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar defaultValue={search} setSearch={setSearch} />
      <div className="movie-card-section">
        {movies.map((movie) => {
          return <MovieCard key={movie.imdbID} imdbId={movie.imdbID} />;
        })}
      </div>
    </div>
  );
};
