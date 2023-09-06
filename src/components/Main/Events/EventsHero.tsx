import React from "react";
import classes from "./EventsHero.module.scss";
const EventsHero: React.FC = () => {
  return (
    <>
      <header className={classes.hero}>
        <div className={classes["hero-text"]}>
          <div>
            <h1 className={classes["heading-primary"]}>
              {" "}
              Experience the thrill of extraordinary events.
            </h1>
          </div>
        </div>
      </header>
    </>
  );
};

export default EventsHero;
