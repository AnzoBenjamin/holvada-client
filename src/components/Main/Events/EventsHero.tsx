import React from "react";
import classes from "./EventsHero.module.scss";
const EventsHero: React.FC = () => {
  return (
    <header className={classes.hero}>
      <div className={classes["hero-text"]}>
        <div>
          <h1 className={classes["heading-primary"]}>Unleash Your Potential</h1>
          <h3 className={classes["heading-secondary"]}>
            Welcome to a world where creativity knows no bounds and passions
            take center stage. Our platform is dedicated to providing a vibrant
            space for individuals to showcase their remarkable talents and
            skills.{" "}
          </h3>
        </div>
      </div>
    </header>
  );
};

export default EventsHero;
