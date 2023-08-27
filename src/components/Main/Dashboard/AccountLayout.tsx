import React, { ReactNode, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate, Link } from "react-router-dom";
import { AccountNav } from "./AccountNav";
import { useAuth } from "../../../store/auth-context";
import barsStaggered from "/bars-staggered.svg";
import timesHexagon from "/times-hexagon.svg";
import classes from "./AccountLayout.module.scss";
import styles from "../../../scss/components/_buttons.module.scss";

interface AccountLayoutProps {
  children: ReactNode;
}

interface DesktopNavProps {
  items: string[];
  links: string[];
}

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
            <Link to={`/${links[index]}`}>
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};



const DesktopNav: React.FC<DesktopNavProps> = ({ items, links }) => {
  return (
    <ul className={classes["desktop-nav"]}>
      {items.map((item, index) => (
        <li key={index} className={`${classes["desktop-nav--item"]}`}>
          <Link to={`/${links[index]}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const Navigation = () => {
  const menuRoot = document?.getElementById("menu-root");
  const [menu, setMenu] = useState(false);
  const [isFixed, setisFixed] = useState(false);
  const { signout } = useAuth();
  const navigate = useNavigate();
  const menuHandler = () => {
    setMenu(true);
    setisFixed(false)
  };
  const signOutHandler = async () => {
    try {
      signout();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const screenWidth = window.innerWidth;
  const navItems = ["Home", "Learn", "Events"];
  const navLinks = ["", "learn", "events"];
  return (
    <div>
      <div className={`${classes.nav} ${isFixed ? classes.fixed : ""} `}>
        <Link to={"/"} className={classes["nav__header"]}>Holvada</Link>
        {screenWidth > 1000 ? (
          <React.Fragment>
            <DesktopNav items={navItems} links={navLinks} />

            <div>
              <button className={styles.btn} onClick={signOutHandler}>
                Signout
              </button>
            </div>
            <img
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </React.Fragment>
        ) : (
          <div className={classes["nav__left"]}>
            <div>
              <button className={styles.btn} onClick={signOutHandler}>
                Signout
              </button>
            </div>
            <img
              src={barsStaggered}
              alt="Bars Staggered"
              className={`${classes["nav__icon"]} ${classes["mobile-nav"]}`}
              onClick={menuHandler}
            />
          </div>
        )}
      </div>
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
    </div>
  );
};

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <div className={classes.layout}>
        <AccountNav />
        <div className={classes.main}>{children}</div>
      </div>
    </div>
  );
};

export default AccountLayout;
