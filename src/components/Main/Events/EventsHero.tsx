import React from "react";
import classes from "./EventsHero.module.scss"
const EventsHero: React.FC = () => {
  const HeroData = [
    { imageURL: "events.jpg", text: "sing", tag: "sing", category: "sing" },
  ];
  return <header className={classes.hero}>
    <div className={classes["hero-text"]}>
    <h1>Welcome to an environment where you can show what you have developed</h1>
    </div>
  </header>;
};

export default EventsHero;
