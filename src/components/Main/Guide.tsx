import classes from "./Guide.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

const Guide = () => {
  return (
    <section className={classes["section-guide"]} id="section-guide">
      <h3 className={styles["heading-tertiary"]}>How To</h3>
      <h2 className={styles["heading-secondary"]}>You only need three steps</h2>
      <div className={classes.steps}>
        <div className={classes["steps--one"]}>
          <div className={classes["step-text-box"]}>
            <p className={classes["step-number"]}>01</p>
            <h3 className={classes["heading-tertiary"]}>
              Select Your Desired Program
            </h3>
            <p className={classes["step-description"]}>
              Browse through the various programs available, including software
              development, language learning, art, music, design, and chess.
              Hover the cursor over (tap on mobile) the program that interests
              you to learn more about its details, curriculum, and benefits.
            </p>
          </div>
          <div className={classes["step-img-box"]}>
            <img
              src="/start.webp"
              className={classes["step-img"]}
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>

        <div className={classes["steps--two"]}>
          <div className={classes["step-text-box"]}>
            <p className={classes["step-number"]}>02</p>
            <h3 className="heading-tertiary">Choose Your Payment Method</h3>
            <p className={classes["step-description"]}>
              Once you have selected your desired program, click on the "Join
              us" button. You will be directed to the payment page where you can
              choose your preferred payment method. Select from our secure and
              convenient payment options, which may include credit/debit card,
              mobile money, or other available methods.
            </p>
          </div>
          <div className={classes["step-img-box"]}>
            <img
              src="/join-us.webp"
              className={classes["step-img"]}
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>

        <div className={classes["steps--three"]}>
          <div className={classes["step-text-box"]}>
            <p className={classes["step-number"]}>03</p>
            <h3 className="heading-tertiary">
              Select Online or Physical Program{" "}
            </h3>
            <p className={classes["step-description"]}>
              After completing the payment, you can choose between online or
              physical collaboration. If you opt for the online program, you can
              access course materials, interact with instructors, and
              participate in collaborative activities remotely. If you prefer
              the physical program, you will be provided with details on the
              location and schedule of the program, as well as any additional
              requirements or materials needed.
            </p>
          </div>
          <div className={classes["step-img-box"]}>
            <img
              src="/success.webp"
              className={classes["step-img"]}
              alt="IPhone app preferences selection screen"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
