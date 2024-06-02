import React, { useState } from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
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
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
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
    <div className="login-container">
      <h2 className="login-head">Login</h2>
      <TextField
        className="login-input"
        name="username"
        label="username"
        variant="outlined"
        helperText="Please enter your username"
        onChange={handleInput}
      />
      <TextField
        className="login-input"
        name="password"
        label="password"
        variant="outlined"
        helperText="Please enter your password"
        type="password"
        onChange={handleInput}
      />
      <Button
        className="login-button"
        variant="outlined"
        fullWidth
        onClick={handleSubmit}
      >
        Log in
      </Button>
      <p>
        Doesn't have an account?
        <Link to={"/signup"}>
          <span className="signup-link">Sign up</span>
        </Link>
      </p>
    </div>
  );
};
