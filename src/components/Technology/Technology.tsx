import React from "react";
import Header from "../Header/Header";
import TechHero from "./TechHero";
import Footer from "../Footer/Footer";
import TechMain from "./TechMain";
import classes from './Technology.module.scss'
import { secondaryAnimationStart } from "../../utils/animation";

const Technology = () => {
  const navItems = ["Home", "Web", "Graphics", "Mobile"];
  const navLinks = [
    "hero",
    "section-web",
    "section-graphics",
    "section-mobile",
  ];

  return (
    <React.Fragment>
      <Header
        navItems={navItems}
        navLinks={navLinks}
        navHeading="Holvada"
        HeroElement={TechHero}
        animationStart={secondaryAnimationStart}
        otherClasses={classes.hero}
      />
    </React.Fragment>
  );
};

export default Technology;
