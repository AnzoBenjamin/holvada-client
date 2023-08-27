import React from "react";
import classes from "./Section.module.scss";
import styles from "../scss/utils/_helpers.module.scss";

interface SectionProps {
  headingTertiary: string;
  headingSecondary: string;
  content: {heading: string, paragraph: string}[];
}

const Section: React.FC<SectionProps> = ({
  headingTertiary,
  headingSecondary,
  content,
}) => {
  return (
    <section className={`${classes.section} section-${headingTertiary}`}>
      <div className={classes["img-box"]}>
        <img src={`/${headingTertiary}.png`} alt="" className={classes.img} />
      </div>
      <div className={classes["heading-area"]}>

      <h3 className={styles["heading-tertiary"]}>{headingTertiary}</h3>
      <h2 className={styles["heading-secondary"]}>{headingSecondary}</h2>
      </div>
      <div className={classes["content-area"]}>

      {content.map((item, index)=>{
        return(
          <div key={index} className={classes.content}>
            <span className={classes.number}>0{index+1}</span>
          <h4 className={classes.heading}>{item.heading}</h4>
          <p>{item.paragraph}</p>
          </div>
        )
      })}
      </div>
    </section>
  );
};

export default Section;
