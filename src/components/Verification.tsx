import React from "react";
import classes from "./Verification.module.scss";
import { Link } from "react-router-dom";

export const Verification: React.FC = () => {
  return (
    <div className={classes.verification}>
      <p>Check your email for verification</p>
      <Link to={"/login"}>Continue to signin</Link>
    </div>
  );
};
