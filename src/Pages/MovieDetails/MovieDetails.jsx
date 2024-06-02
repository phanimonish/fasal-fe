import React, { useEffect, useState } from "react";
import "./MovieDetails.css";
import Navbar from "../../Components/Navbar/Navbar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Divider from "@mui/material/Divider";
import { MyListBox } from "../../Components/MyListBox/MyListBox";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "10px",
  p: 4,
};

export const MovieDetails = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [params] = useSearchParams();
  const imdbId = params.get("imdbId");

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/list`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.err) {
          setLists(data);
        } else {
          alert(data.err);
        }
      });
  }, []);

  useEffect(() => {
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

  function handleCreateList() {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ title }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.err) {
          navigate("/my-lists");
        } else {
          alert(data.err);
        }
      });
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar enableSearch={false} />
      <div className="movie-details">
        <Grid container>
          <Grid item xs={12} md={6}>
            <div className="poster-container">
              <img
                className="poster"
                src={movie.Poster}
                alt="Poster not available"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="details">
              <h1 style={{ fontSize: "3rem", padding: 0, margin: 0 }}>
                {movie.Title}
              </h1>
              <p style={{ width: "90%" }}>{movie.Plot}</p>
              <div className="movie-info">
                <h4 style={{ margin: 0, fontSize: "1.2rem" }}>
                  IMDb {movie.imdbRating}
                </h4>
                <h4
                  style={{
                    margin: 5,
                    fontSize: "1.2rem",
                  }}
                >
                  {movie.Year}
                </h4>
              </div>
              <div className="movie-info">
                <p
                  style={{
                    margin: 0,
                    textDecoration: "underline",
                    fontSize: "1.2rem",
                  }}
                >
                  {movie.Genre}
                </p>
              </div>
              <Button
                className="add-my-list-btn"
                onClick={handleOpen}
                variant="outlined"
              >
                Add to My List
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    Create / Add to 'My List'
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      style={{ margin: "1rem 0rem" }}
                      label="Title"
                      variant="outlined"
                      name="title"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    ></TextField>
                    <Button
                      href="/my-lists"
                      style={{
                        height: "2.5rem",
                      }}
                      variant="outlined"
                      onClick={handleCreateList}
                    >
                      Create list
                    </Button>
                  </div>
                  <Divider />
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    style={{ margin: "1rem 0px" }}
                  >
                    My Lists
                  </Typography>
                  <div style={{ overflow: "scroll" }}>
                    {lists
                      .filter((list) =>
                        list.title
                          .toLowerCase()
                          .includes(title.toLowerCase().trim())
                      )
                      .map((list) => {
                        return (
                          <MyListBox
                            title={list.title}
                            listId={list._id}
                            imdbId={imdbId}
                          />
                        );
                      })}
                  </div>
                </Box>
              </Modal>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
