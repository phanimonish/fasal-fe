import React from "react";
import "./MovieCard.css";
import MoviePoster from "../../Images/movie-poster.jpg";
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export const MovieCard = () => {
  const navigate = useNavigate();
  return (
    <div className="movie-card" onClick={() => navigate("movie-details")}>
      <img className="movie-poster" src={MoviePoster} alt="" />
      <div className="movie-head">
        <div className="movie-title">
          <h3 style={{ margin: 0 }}>Jersey</h3>
          <h4 style={{ margin: 1 }}>(2019)</h4>
        </div>

        <Tooltip title="Add to My List" placement="bottom">
          <div className="my-list" onClick={() => navigate("my-list")}>
            <PlaylistAddOutlinedIcon style={{ width: "40", height: "35" }} />
          </div>
        </Tooltip>
      </div>
      <div className="movie-info">
        <h5 style={{ margin: 0, fontSize: "14px" }}>IMDb 9.3 </h5>
        <p style={{ margin: 3, textDecoration: "underline", fontSize: "14px" }}>
          Inspiration
        </p>
        <p style={{ margin: 3, textDecoration: "underline", fontSize: "14px" }}>
          U/A
        </p>
      </div>
    </div>
  );
};
