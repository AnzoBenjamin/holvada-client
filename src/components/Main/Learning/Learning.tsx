import React, { useState, useRef, useEffect } from "react";
import Header from "../../Header/Header";
import LearnHero from "./LearnHero";
import classes from "./Learning.module.scss";
import Footer from "../../Footer/Footer";
import LearnMain from "./LearnMain";
import LearningPrices from "./LearningPrices";
import IntroText from "../../../UI/IntroText";
import Section from "../../../UI/Section";
import { secondaryAnimationStart } from "../../../utils/animation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import Navigation from "../../Header/Navigation";

const Learning: React.FC = () => {
  const HeroData = [
    {
      imageURL: "art.jpg",
      text: "Creative Visions",
      category: "art",
      tag: "Create",
    },
    {
      imageURL: "code.jpg",
      text: "Hack the World",
      category: "tech",
      tag: "Code",
    },
    {
      imageURL: "chess.jpg",
      text: "Play and Win",
      category: "chess",
      tag: "Play",
    },
    {
      imageURL: "language.jpg",
      text: "Speak Connect",
      category: "language",
      tag: "Learn",
    },
    {
      imageURL: "music.jpg",
      text: "Melody Magic",
      category: "music",
      tag: "Compose",
    },
  ];


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
