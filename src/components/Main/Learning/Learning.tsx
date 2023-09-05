import React, { useState, useRef, useEffect } from "react";
import Header from "../../Header/Header";
import LearnHero from "./LearnHero";
import classes from "./Learning.module.scss";
import { secondaryAnimationStart } from "../../../utils/animation";


const Learning: React.FC = () => {
  const navItems = ["Home", "Art", "Tech", "Chess", "Language", "Music"];
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
        navHeading="Learn"
        HeroElement={LearnHero}
        otherClasses={classes.hero}
        animationStart={secondaryAnimationStart}
      />
    </React.Fragment>
  );
};

export default Learning;
