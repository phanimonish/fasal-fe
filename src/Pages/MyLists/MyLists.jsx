import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { MyListBox } from "../../Components/MyListBox/MyListBox";
import Divider from "@mui/material/Divider";
import { MyListCard } from "../../Components/MyListCard/MyListCard";

export const MyLists = () => {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

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

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Navbar />
      <div
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
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
          }}
        >
          Create List +
        </div>
        
        {lists.map((list) => {
          return <MyListCard title={list.title} listId={list._id} />;
        })}
      </div>
    </div>
  );
};
