import React from "react";
import classes from "./EventsHero.module.scss";
import { Button } from "primereact/button";
const EventsHero: React.FC = () => {
  return (
    <header className={classes.hero}>
      <div className={classes["hero-text"]}>
        <div>
          <h1 className={classes["heading-primary"]}>Unleash Your Potential</h1>
          <h3 className={classes["heading-secondary"]}>
            Our platform is dedicated to providing a vibrant space for
            individuals to showcase their remarkable talents and skills.{" "}
          </h3>
          <div className={classes["btn-area"]}>
            <Button label="Upcoming" className="p-button-warning" />
            <Button
              label="Bookings"
              className="p-button-outlined p-button-warning"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default EventsHero;
