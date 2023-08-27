import React from "react";
import classes from "./MobileNav.module.scss";
import timesHexagon from "/times-hexagon.svg";
import { Link } from "react-scroll";

interface MobileNavProps {
  isVisible: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
  items: string[];
  links: string[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  isVisible,
  setMenu,
  items,
  links,
}) => {
  const hiddenMenuHandler = () => {
    setMenu(false);
  };
  return (
    <nav
      className={`${classes["nav__hidden"]} ${
        isVisible ? classes.visible : ""
      }`}
    >
      <div className={classes["nav__hidden--header"]}>
        <Link to={"/"} className={classes["nav__header"]}>Holvada</Link>
        <img
          src={timesHexagon}
          alt=""
          className={classes["nav__icon"]}
          onClick={hiddenMenuHandler}
        />
      </div>
      <ul className={classes["nav__hidden--items"]}>
        {items.map((item, index) => (
          <li key={index} className={classes["nav__hidden--item"]}>
            <Link smooth to={links[index]} onClick={hiddenMenuHandler}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;
