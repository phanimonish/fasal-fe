import React from "react";
import "./MovieDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import MoviePoster from "../../Images/movie-poster.jpg";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export const MovieDetails = () => {
  return (
    <div>
      <Navbar />
      <div className="movie-details">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="poster-container">
              <img className="poster" src={MoviePoster} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="details">
              <h1 style={{ fontSize: "3rem", padding: 0, margin: 0 }}>
                Jersey
              </h1>
              <p style={{ width: "90%" }}>
                The storyline follows Arjun (Nani), a talented but failed
                cricketer who decides to return to cricket in his mid-30s,
                driven by the desire to represent the Indian cricket team, and
                fulfill his son's wish for a jersey as a gift. <br />
                26-year-old Arjun Talwar is an extraordinary cricketer with the
                highest batting average in all of India and 106 half-centuries,
                nine double centuries and two triple centuries to his name.
                Following the 1985-86 Duleep Trophy finals, Arjun awaits news of
                his selection in the India national team, only to find out his
                inclusion in the list was a misprint.
                <br /> Following this, he quits cricket. However, sometime in
                the early 1990s, Arjun is suspended from his job on corruption
                charges, although he is innocent.
              </p>
              <div className="movie-info">
                <h4 style={{ margin: 0, fontSize: "1.2rem" }}>IMDb 9.3 </h4>
                <h4
                  style={{
                    margin: 5,
                    fontSize: "1.2rem",
                  }}
                >
                  2019
                </h4>
                <p
                  style={{
                    margin: 5,
                    fontSize: "1.2rem",
                  }}
                >
                  U/A
                </p>
              </div>
              <div className="movie-info">
                <p
                  style={{
                    margin: 0,
                    textDecoration: "underline",
                    fontSize: "1.2rem",
                  }}
                >
                  Sport
                </p>
                <p
                  style={{
                    margin: 5,
                    textDecoration: "underline",
                    fontSize: "1.2rem",
                  }}
                >
                  Inspiration
                </p>
                <p
                  style={{
                    margin: 5,
                    textDecoration: "underline",
                    fontSize: "1.2rem",
                  }}
                >
                  Drama
                </p>
              </div>
              <Button className="add-my-list-btn" variant="outlined">
                Add to My List
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
