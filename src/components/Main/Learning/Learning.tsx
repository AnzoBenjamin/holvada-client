import React from "react";
import Header from "../../Header/Header";
import LearnHero from "./LearnHero";
import classes from "./Learning.module.scss";
import Footer from "../../Footer/Footer";
import LearnMain from "./LearnMain";
import LearningPrices from './LearningPrices'
import IntroText from "../../../UI/IntroText";
import {secondaryAnimationStart} from '../../../utils/animation'

const Learning: React.FC = () => {
  const navItems = ["Home", "Art", "Tech", "Chess", "Language", "Music"];
  const navLinks = [
    "section-home",
    "section-art",
    "section-tech",
    "section-chess",
    "section-language",
    "section-music"
  ];
  return (
    <React.Fragment>
      <Header
        navItems={navItems}
        navLinks={navLinks}
        navHeading="Learn"
        HeroElement={LearnHero}
        otherClasses={classes.hero}
        animationStart={secondaryAnimationStart}
      />
      <IntroText/>
      <LearningPrices/>
      <LearnMain/>
      <Footer />
    </React.Fragment>
  );
};

export default Learning;
