import React, { useState, useRef, useEffect } from "react";
import Header from "../../Header/Header";
import LearnHero from "./LearnHero";
import classes from "./Learning.module.scss";
import { secondaryAnimationStart } from "../../../utils/animation";
import LearningPrices from "./LearningPrices";
import Footer from "../../Footer/Footer";


const Learning: React.FC = () => {
  const navItems = [""];
  const navLinks = [
    "section-home",
    "section-art",
    "section-tech",
    "section-chess",
    "section-language",
    "section-music",
  ];
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const headerElement = headerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      setIsHeaderVisible(!entry.isIntersecting);
    });

    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, [isHeaderVisible]);
  return (
    <React.Fragment>
      <Header
        navItems={navItems}
        navLinks={navLinks}
        navHeading="Holvada"
        HeroElement={LearnHero}
        otherClasses={classes.hero}
        animationStart={secondaryAnimationStart}
      />
      <LearningPrices/>
        <Footer/>
    </React.Fragment>
  );
};

export default Learning;
