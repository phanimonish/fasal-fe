import React from "react";
import "./Login.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-head">Login</h2>
      <TextField
        className="login-input"
        label="username"
        variant="outlined"
        helperText="Please enter your username"
      />
      <TextField
        className="login-input"
        label="password"
        variant="outlined"
        helperText="Please enter your password"
        type="password"
      />
      <Button className="login-button" variant="outlined" fullWidth>
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
