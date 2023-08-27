import React from "react";
import classes from "./IntroText.module.scss"

const IntroText: React.FC = () => {
  return (
    <div className={classes.intro}>
      <h2>Master Code, Chess, Music, Language, and Art</h2>
      <p>
        Dive into a world of possibilities with EduMastery, where experts in
        programming, strategic games, fine arts, languages, and musical
        compositions deliver top-tier learning experiences tailored to your
        needs.
      </p>
    </div>
  );
};

export default IntroText;
