import React, { useEffect, useState } from "react";
import "./MovieCard.css";
import MoviePoster from "../../Images/movie-poster.jpg";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ imdbId }) => {
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(movie);

    fetch(`${process.env.REACT_APP_OMDB_BASE_URL}&i=${imdbId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.Response === "False") {
          alert(data.Error);
          navigate("/");
          return;
        }

        setMovie(data);

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`movie-details?imdbId=${movie.imdbID}`)}
    >
      <img
        className="movie-poster"
        src={movie.Poster}
        alt="Poster not available"
      />
      <div className="movie-head">
        <div className="movie-title">
          <h3 style={{ margin: 0 }}>{movie.Title}</h3>
          <h4 style={{ margin: 1 }}>({movie.Year})</h4>
        </div>
      </div>
      <div className="movie-info">
        <h5 style={{ margin: 0, fontSize: "14px" }}>
          IMDb {movie.imdbRating}{" "}
        </h5>
        <p style={{ margin: 3, textDecoration: "underline", fontSize: "14px" }}>
          {movie.Genre}
        </p>
      </div>
    </div>
  );
};
