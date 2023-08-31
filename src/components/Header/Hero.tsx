import React, {useState} from "react";
import styles from "../../scss/utils/_helpers.module.scss";
import classes from "./Hero.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { animationStart, reveal } from "../../utils/animation";

const Hero: React.FC = () => {
  const [videoSource, setvideoSource] = useState('')
  const [animationPlayed, setAnimationPlayed] = useState(false); // Flag to track animation



  useState(()=>{
    const screenWidth = window.innerWidth
    animationPlayed
    if (screenWidth >= 1200) setvideoSource("/hero.webm");
    else if (screenWidth >= 576) setvideoSource("/hero-tablet.webm");
    else setvideoSource("/hero-mobile.webm");
  })
  
  const onAnimationComplete = () => {
    setAnimationPlayed(true); // Set the flag to true when animation is complete
  };
  return (
    <div className={classes.hero}>
      <motion.div
        layout
        initial={{ height: 0 }}
        animate={{ height: "unset" }}
        transition={{
          delay: animationStart,
          duration: 1,
          ease: "easeIn",
          staggerChildren: 0.2,
          delayChildren: animationStart + 0.5,
        }}
        className={classes["hero-content"]}
        onAnimationComplete={onAnimationComplete} // Call this when animation is complete
      >
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1, duration: 0.5 }}
        >
          <h1 className={styles["heading-primary"]}>
            Nurturing skills and promoting talents{" "}
          </h1>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1.2, duration: 0.5 }}
        >
          <div className={classes["hero__text-area"]}>
            <p>
              Join us on a transformative journey to raise skilled and talented champions around the world to make dreams a reality
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={reveal}
          initial="hiddenVariant"
          animate="revealVariant"
          transition={{ delay: animationStart + 1.3, duration: 0.5 }}
          className={classes["hero__btn-area"]}
        >
          <Link smooth to="footer" className={classes["btn-primary"]}>
            Contact
          </Link>
          <Link
            smooth
            to="section-services"
            className={classes["btn-secondary"]}
          >
            Services
          </Link>
        </motion.div>
      </motion.div>
      <div className={classes["video-container"]}>
        <video className={classes["hero-video"]} autoPlay muted loop>
          <source src={videoSource} type="video/webm" />
        </video>
      </div>
    </div>
  );
};

export default Hero;
