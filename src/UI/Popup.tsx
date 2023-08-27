import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import Login from "../components/Form/Login";
import Signup from "../components/Form/Signup";
import classes from "./Popup.module.scss";
import timesHexagon from "/times-hexagon.svg";

interface PopupProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: React.FC<PopupProps> = ({ isVisible, setIsVisible }) => {
  const [activeForm, setActiveForm] = useState("signup8");
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveForm("login"),
    onSwipedRight: () => setActiveForm("signup"),
  });

  const popupHandler = () => {
    setIsVisible(false);
  };
  return (
    <div
      role="popup"
      className={`${classes.popup} ${isVisible ? classes.visible : ""}`}
    >
      <img
        src={timesHexagon}
        alt=""
        className={classes["popup-icon"]}
        onClick={popupHandler}
      />
      <div className={classes["popup-content"]} {...swipeHandlers}>
        <div className={classes["mobile-view"]}>
          {activeForm === "login" ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Popup;
