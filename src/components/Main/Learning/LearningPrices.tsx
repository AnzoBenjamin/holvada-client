import classes from "./LearningPrices.module.scss";
import styles from "../../../scss/utils/_helpers.module.scss";
import Card from "../../../UI/Card";
import { CheckmarkCircle, CloseCircle } from "react-ionicons";

const LearningPrices = () => {
  return (
    <section className={classes["section-prices"]} id="section-prices">
      <h3 className={styles["heading-tertiary"]}>Prices</h3>
      <h2 className={styles["heading-secondary"]}>
        Flexible Pricing Plans to Suit Your Goals
      </h2>
      <div className={classes["card-area"]}>
        <Card className={classes.starter}>
          <header className={classes["plan-header"]}>
            <p className={classes["plan-name"]}>Single</p>
            <p className={classes["plan-price"]}>
              <span>$</span>15
            </p>
            <p className={classes["plan-text"]}>per hourly session</p>
          </header>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span> Learning equipment provided if necessary</span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Online inquiries</span>
            </li>
            <li className={classes["list-item"]}>
              <CloseCircle color={"#E3A390"} />
              <span></span>
            </li>
          </ul>
        </Card>
        <Card className={classes.complete}>
          <header className={classes["plan-header"]}>
            <p className={classes["plan-name"]}>Multiple</p>
            <p className={classes["plan-price"]}>
              <span>$</span>7.50
            </p>
            <p className={classes["plan-text"]}>per hourly session</p>
          </header>
          <ul className={classes.list}>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Learning equipment provided if necessary</span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>Online inquiries</span>
            </li>
            <li className={classes["list-item"]}>
              <CheckmarkCircle color={"#90d0e3"} />
              <span>50% discount</span>
            </li>
          </ul>
        </Card>
      </div>
    </section>
  );
};

export default LearningPrices;
