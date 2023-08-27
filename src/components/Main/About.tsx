import classes from "./About.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

const About = () => {
  return (
    <section className={classes["section-about"]} id="section-about">
      <div className={classes["section-about-img"]}>
        <img src="/team.webp" alt="Illustration of a team" />
      </div>
      <div className={classes["section-about__text-area"]}>
        <h3 className={styles["heading-tertiary"]}>About us</h3>
        <h2 className={styles["heading-secondary"]}>Who we are</h2>
        <p className={classes["text-content"]}></p>
      </div>
    </section>
  );
};

export default About;
