import React from "react";
import classes from "./TechHero.module.scss";

const TechHero: React.FC = () => {
  return (
    <header className={classes.hero}>
      <div className={classes["hero-text"]}>
        <h1>INNOVATE</h1>
      </div>
    </header>
  );
};

export default TechHero;
