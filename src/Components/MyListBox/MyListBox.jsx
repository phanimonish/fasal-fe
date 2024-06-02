import React from "react";
import { useNavigate } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const MyListBox = ({ title, imdbId, listId }) => {
  const navigate = useNavigate();

  function handleClick() {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/list/${listId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ movies: [imdbId] }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.err) {
          navigate(`/list-movies/${listId}`);
        } else {
          alert(data.err);
        }
      });
  }

  return (
    <div
      style={{
        width: "90%",
        height: "30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "1px 1px 5px lightGray",
        margin: "1rem 0rem",
        cursor: "pointer",
        borderRadius: "5px",
        padding: "1rem",
      }}
    >
      <h4>{title}</h4>
      <AddOutlinedIcon onClick={handleClick} />
    </div>
  );
};
