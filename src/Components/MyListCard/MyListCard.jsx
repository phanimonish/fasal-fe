import React from "react";
import { useNavigate } from "react-router-dom";

export const MyListCard = ({ title, listId }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "300px",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "1px 1px 5px lightGray",
        margin: "1rem 0rem",
        cursor: "pointer",
        borderRadius: "10px",
        color: "#fff",
        background:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkM3JmfwfKaCeNzHF4VscXIGxfrpXjAivRNOxV0-Cb0IYNTXtpR1FHFuvtVsygFHClUoY&usqp=CAU)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      onClick={() => {
        navigate(`/list-movies/${listId}`);
      }}
    >
      {title}
    </div>
  );
};
