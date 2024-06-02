import React, { useState } from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleInput(e) {
    switch (e.target.name) {
      case "username":
        setUsername(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: { username, email, password },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (!data.err) {
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          alert(data.err);
        }
      });
  }

  return (
    <div className="signup-container">
      <h2 className="signup-head">Sign Up</h2>
      <TextField
        className="signup-input"
        label="username"
        variant="outlined"
        helperText="Please enter your username"
        name="username"
        onChange={handleInput}
      />
      <TextField
        className="signup-input"
        label="email"
        variant="outlined"
        helperText="Please enter your email"
        type="email"
        name="email"
        onChange={handleInput}
      />
      <TextField
        className="signup-input"
        label="password"
        variant="outlined"
        helperText="Please enter your password"
        type="password"
        name="password"
        onChange={handleInput}
      />
      <Button
        className="signup-button"
        variant="outlined"
        fullWidth
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <p>
        Already have an account?
        <Link to={"/login"}>
          <span className="signup-link">Login</span>
        </Link>
      </p>
    </div>
  );
};
