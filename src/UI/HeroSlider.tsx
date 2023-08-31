import React, { useEffect, useState } from "react";
import classes from "./HeroSlider.module.scss";
import { Link } from "react-scroll";

interface SlideProps {
  imageURL: string;
  text: string;
  category: string;
  index: number;
  currentPair: number;
  tag: string;
}

interface HeroSliderProps {
  slideData: {
    imageURL: string;
    text: string;
    category: string;
    tag: string;
  }[];
}

const Slide: React.FC<SlideProps> = ({
  index,
  currentPair,
  imageURL,
  text,
  category,
  tag,
}) => {
  const [link, setLink] = useState("");
  useEffect(() => {
    if (currentPair === 0) setLink("art");
    else if (currentPair === 1) setLink("tech");
    else if (currentPair === 2) setLink("chess");
    else if (currentPair === 3) setLink("language");
    else if (currentPair === 4) setLink("music");
  }, [currentPair]);
  return (
    <div
      key={index}
      className={` ${classes["hero-slider__pair"]} ${
        index === currentPair ? classes.active : classes.exit
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85),rgba(0,0,0,0.85)) ,url(${imageURL})`,
        backgroundPosition: "center",
      }}
    >
      <div className={classes["hero-slider__text"]}>
        <div className={classes["hero-slider__heading-area"]}>
          <h3 className={classes["heading-secondary"]}>0{index + 1}</h3>
          <h1 className={classes["heading-primary"]}>{text}</h1>
        </div>
        <div className={classes["hero-slider__other-area"]}>
          <p>
            <span className={classes["category-tag"]}>category</span>

            <span className={classes["heading-tertiary"]}>{category}</span>
          </p>
          <Link smooth to={`section-${link}`} className={classes.btn}>
            {tag}
          </Link>
        </div>
      </div>
    </div>
  );
};

const HeroSlider: React.FC<HeroSliderProps> = ({ slideData }) => {
  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentPair((prevPair) => (prevPair + 1) % slideData.length);
    }, 7000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className={classes["hero-slider"]}>
      {slideData.map((slide, index) => {
        return (
          <Slide
            key={index}
            imageURL={slide.imageURL}
            text={slide.text}
            currentPair={currentPair}
            index={index}
            category={slide.category}
            tag={slide.tag}
          />
        );
      })}
    </div>
  );
};

export default HeroSlider;
