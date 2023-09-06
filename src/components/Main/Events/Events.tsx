import React from "react";
import Header from "../../Header/Header";
import EventsHero from "./EventsHero";
import classes from "./Events.module.scss";
import { secondaryAnimationStart } from "../../../utils/animation";
import EventsMain from "./EventsMain";
import Footer from "../../Footer/Footer";

const Events: React.FC = () => {
  const navItems = ["Home", "Upcoming", "Gallery", "Bookings"];
  const navLinks = [
    "section-home",
    "section-upcoming",
    "section-gallery",
    "section-bookings",
  ];

  return (
    <React.Fragment>
      <Header
        HeroElement={EventsHero}
        navHeading="Holvada"
        navItems={navItems}
        navLinks={navLinks}
        otherClasses={classes.hero}
        animationStart={secondaryAnimationStart}
      />
      <EventsMain/>
      <Footer />
    </React.Fragment>
  );
};

export default Events;
