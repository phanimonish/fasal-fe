import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { MyLists } from "./Pages/MyLists/MyLists";
import { MovieDetails } from "./Pages/MovieDetails/MovieDetails";
import { ListMovies } from "./Pages/ListMovies/ListMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/my-lists" element={<MyLists />} />
          <Route path="/movie-details" element={<MovieDetails />} />
          <Route path="/list-movies/:listId" element={<ListMovies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
