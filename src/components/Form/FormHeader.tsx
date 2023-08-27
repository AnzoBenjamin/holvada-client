import React from "react";
import { Link } from "react-router-dom";
import classes from "./FormHeader.module.scss";
import styles from "../../scss/components/_buttons.module.scss";

interface FormHeaderProps {
  linkContent: string[];
}

const FormHeader: React.FC<FormHeaderProps> = ({ linkContent }) => {
  return (
    <div className={classes.header}>
      <Link to={"/"} className={classes["nav__header"]}>Holvada</Link>
      <div className={classes["btn-area"]}>
        {linkContent.map((item, index) => (
          <Link to={`/${item.toLowerCase()}`} key={index} className={styles.btn}>
            {item=="Forgot-password"? "Reset":item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FormHeader;
