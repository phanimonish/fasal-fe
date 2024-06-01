import React from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-head">Sign Up</h2>
      <TextField
        className="signup-input"
        label="email"
        variant="outlined"
        helperText="Please enter your email"
        type="email"
      />
      <TextField
        className="signup-input"
        label="username"
        variant="outlined"
        helperText="Please enter your username"
      />
      <TextField
        className="signup-input"
        label="password"
        variant="outlined"
        helperText="Please enter your password"
        type="password"
      />
      <Button className="signup-button" variant="outlined" fullWidth>
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
