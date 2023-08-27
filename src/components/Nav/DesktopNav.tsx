import React from "react";
import { Link } from "react-scroll";
import { reveal } from "../../utils/animation";
import { motion } from "framer-motion";

import classes from "./DesktopNav.module.scss";

interface DesktopNavProps {
  items: string[];
  links: string[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ items, links }) => {
  return (
    <ul className={classes["desktop-nav"]}>
      {items.map((item, index) => (
        <motion.li key={index} variants={reveal} className={`${classes["desktop-nav--item"]}`}>
          <Link smooth to={links[index]}>
            {item}
          </Link>
        </motion.li>
      ))}
    </ul>
  );
};

export default DesktopNav;
