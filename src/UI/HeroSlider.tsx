import React, { useEffect, useState } from "react";
import classes from "./HeroSlider.module.scss";
import Section from "./Section";
import { Link } from "react-scroll";

interface SlideProps {
  imageURL: string;
  text: string;
  category: string;
  index: number;
  currentPair: number;
  setCurrentPair: (currentPair: number) => void;
  tag: string;
}

interface HeroSliderProps {
  slideData: {
    imageURL: string;
    text: string;
    category: string;
    tag: string;
  }[];

  content: {
    primaryHeading: string;
    secondaryHeading: string;
    mainContent: { heading: string; paragraph: string }[];
  }[];
}

const Slide: React.FC<SlideProps> = ({
  index,
  currentPair,
  imageURL,
  text,
  category,
  tag,
  setCurrentPair,
}) => {
  const [link, setLink] = useState("");
  const [showAnimation, setShowAnimation] = useState(true);

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
          <div
            className={`${classes["button-guide-animation"]} ${showAnimation ? classes.show : ""}`}
          >
            <div className={classes["animation-text"]}>Click here</div>
            <Link smooth to={`section-${link}`} className={classes.btn} onClick={()=>setShowAnimation(false)}>
              {tag}
            </Link>
          </div>
        </div>
      </div>
      <div className={classes["nav-numbers"]}>
        <ul className={classes["nav-numbers__list"]}>
          <li>
            <Link
              className={currentPair == 0 ? classes["active-link"] : ""}
              onClick={() => setCurrentPair(0)}
            >
              01
            </Link>
          </li>
          <li>
            <Link
              className={currentPair == 1 ? classes["active-link"] : ""}
              onClick={() => setCurrentPair(1)}
            >
              02
            </Link>
          </li>
          <li>
            <Link
              className={currentPair == 2 ? classes["active-link"] : ""}
              onClick={() => setCurrentPair(2)}
            >
              03
            </Link>
          </li>

          <li>
            <Link
              className={currentPair == 3 ? classes["active-link"] : ""}
              onClick={() => setCurrentPair(3)}
            >
              04
            </Link>
          </li>

          <li>
            <Link
              className={currentPair == 4 ? classes["active-link"] : ""}
              onClick={() => setCurrentPair(4)}
            >
              05
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const HeroSlider: React.FC<HeroSliderProps> = ({ slideData, content }) => {
  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentPair((prevPair) => (prevPair + 1) % slideData.length);
    }, 7000);

    return () => {
      clearInterval(intervalID);
    };
  }, [currentPair]);

  return (
    <>
      {slideData.map((slide, index) => {
        return (
          <>
            <div className={classes["hero-slider"]}>
              <Slide
                key={index}
                imageURL={slide.imageURL}
                text={slide.text}
                currentPair={currentPair}
                setCurrentPair={setCurrentPair}
                index={index}
                category={slide.category}
                tag={slide.tag}
              />
            </div>

            <div
              className={` ${classes["hero-content"]} ${
                index === currentPair ? classes.active : classes.exit
              }`}
            >
              <Section
                key={index}
                headingSecondary={content[index].secondaryHeading}
                headingTertiary={content[index].primaryHeading}
                content={content[index].mainContent}
              />
            </div>
          </>
        );
      })}
    </>
  );
};

export default HeroSlider;
