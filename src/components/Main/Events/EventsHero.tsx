import React from "react";
import classes from "./EventsHero.module.scss"
const EventsHero: React.FC = () => {
  return <header className={classes.hero}>
    <div className={classes["hero-text"]}>
    <h1 className={classes["heading-primary"]}>Unleash Your Potential</h1>
    </div>
  </header>;
};

export default EventsHero;
