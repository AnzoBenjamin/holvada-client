import classes from "./CallToAction.module.scss";
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className={classes["section-cta"]}>
      <div className={classes["cta-card"]}>
        <h3>Sign up for free</h3>
        <h2>Start Your Journey with holvada Today</h2>
        <p>
          Ready to embark on a transformative journey of innovation and
          learning? Contact us now to kickstart your project or enroll in our
          skill-building courses.{" "}
        </p>
        <Link
          className={classes.btn}
          to={"/signup"}
        >Signup</Link>
      </div>
    </section>
  );
};

export default CallToAction;
