import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { reveal } from "../../utils/animation";
import MobileNav from "../Nav/MobileNav";
import DesktopNav from "../Nav/DesktopNav";
import { useAuth } from "../../store/auth-context";

import barsStaggered from "/bars-staggered.svg";
import classes from "./Navigation.module.scss";
import styles from "../../scss/components/_buttons.module.scss";

interface NavigationProps {
  isFixed: boolean;
  navHeading: string;
  navItems: string[];
  navLinks: string[];
  animationStart: number;
}

const Navigation: React.FC<NavigationProps> = ({
  isFixed,
  navHeading,
  navItems,
  navLinks,
  animationStart,
}) => {
  const menuRoot = document?.getElementById("menu-root");
  const [menu, setMenu] = useState(false);
  const { currentUser } = useAuth();
  const menuHandler = () => {
    setMenu(true);
  };

  const screenWidth = window.innerWidth;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: animationStart }}
    >
      <motion.div
        variants={reveal}
        initial="hiddenVariant"
        animate="revealVariant"
        transition={{
          ease: "easeIn",
          type: "tween",
          duration: 0.5,
          staggerChildren: 0.2,
          delayChildren: animationStart + 0.5,
        }}
        className={`${classes.nav} ${isFixed ? classes.fixed : ""} `}
      >
        <motion.h2 variants={reveal} className={classes["nav__header"]}>
          <Link to={"/"}>{navHeading}</Link>
        </motion.h2>
        {screenWidth > 1000 ? (
          <React.Fragment>
            <DesktopNav items={navItems} links={navLinks} />

            <motion.div variants={reveal} className={classes.btn}>
              {currentUser ? (
                <Link to={"/dashboard/add"} className={styles.btn}>Account</Link>
              ) : (
                <Link to={"/signup"} className={styles.btn}>Join Us</Link>
              )}
            </motion.div>
            <motion.img
              variants={reveal}
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </React.Fragment>
        ) : (
          <motion.div className={classes["nav__left"]}>
            <motion.div variants={reveal} className={classes.btn}>
                {currentUser ? (
                  <Link to={"/dashboard/add"} className={styles.btn}>Account</Link>
                ) : (
                  <Link to={"/signup"} className={styles.btn}>Join Us</Link>
                )}
            </motion.div>
            <motion.img
              variants={reveal}
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </motion.div>
        )}
      </motion.div>
      {menuRoot &&
        createPortal(
          <MobileNav
            isVisible={menu}
            setMenu={setMenu}
            items={navItems}
            links={navLinks}
          />,
          menuRoot
        )}
    </motion.div>
  );
};

export default Navigation;
