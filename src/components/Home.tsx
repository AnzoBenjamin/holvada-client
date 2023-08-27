import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Hero from "./Header/Hero";
import classes from './Home.module.scss'
import {animationStart} from '../utils/animation'

const Home = () => {
  const navItems = ["Home", "How to", "Services"];
  const navLinks = [
    "section-header",
    "section-guide",
    "section-services",
  ];

  return (
    <React.Fragment>
      <Header
        HeroElement={Hero}
        navItems={navItems}
        navLinks={navLinks}
        navHeading="Holvada"
        otherClasses={classes.hero}
        animationStart={animationStart}
      />
      <Main />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
