import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./AccountNav.module.scss";

export const AccountNav: React.FC = () => {
  const screenWidth = window.innerWidth;
  const [active, setActive] = useState(true)
  const menuHandler = () => {
    setActive(!active)
  }

  return screenWidth > 1000 ? (
    <nav className={classes.nav}>
      <ul className={classes.list}>
        <li className={classes["list-item"]}>
          <img src="/add.png" alt="add" className={classes.icon} />
          <Link to={"/account/add"}>Add</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/upcoming.png" alt="upcoming" className={classes.icon} />
          <Link to={"/account/upcoming"}>Upcoming</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/pending.png" alt="pending" className={classes.icon} />
          <Link to={"/account/pending"}>Pending</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/complete.png" alt="completed" className={classes.icon} />
          <Link to={"/account/completed"}>Completed</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/account.png" alt="completed" className={classes.icon} />
          <Link to={"/account/details"}>Account</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <div className={classes["mobile-nav"]}>
      <img src="/bars.png" alt="Menu bar" className={classes.icon} onClick={menuHandler}/>
      <ul className={`${classes["mobile-list"]} ${active || classes.active}`}>
        <li className={classes["list-item"]}>
          <img src="/add.png" alt="add" className={classes.icon} />
          <Link to={"/account/add"}>Add</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/upcoming.png" alt="upcoming" className={classes.icon} />
          <Link to={"/account/upcoming"}>Upcoming</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/pending.png" alt="pending" className={classes.icon} />
          <Link to={"/account/pending"}>Pending</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/complete.png" alt="completed" className={classes.icon} />
          <Link to={"/account/completed"}>Completed</Link>
        </li>
        <li className={classes["list-item"]}>
          <img src="/account.png" alt="completed" className={classes.icon} />
          <Link to={"/account/details"}>Account</Link>
        </li>
        <img src="/close.png" alt="Close bar" className={`${classes.icon} ${classes.close}`} onClick={menuHandler}/>
      </ul>
    </div>
  );
};
