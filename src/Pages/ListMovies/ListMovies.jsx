import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { MovieCard } from "../../Components/MovieCard/MovieCard";
import "./list-movies.css";
import { useNavigate, useParams } from "react-router-dom";


export const ListMovies = () => {
  const params = useParams();
  const listId = params.listId;

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Interstellar");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    fetch(`${process.env.REACT_APP_API_BASE_URL}/list/${listId}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.err) {
          setMovies(data.movies);
        } else {
          alert(data.err);
        }

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar defaultValue={search} setSearch={setSearch} />
      <div className="movie-card-section">
        {movies.map((movie) => {
          return <MovieCard key={movie} imdbId={movie} />;
        })}
      </div>
    </div>
  );
};
