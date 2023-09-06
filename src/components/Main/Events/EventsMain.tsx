import React from "react";
import classes from "./EventsMain.module.scss";

const EventsMain: React.FC = () => {
  return (
    <main>
      <section className={classes["intro-section"]}>
        <div>
          <h3 className={classes["heading-secondary"]}>Unleash your talents</h3>
          <p>
            Welcome to the most captivating events platform where you can
            explore a diverse array of activities like chess battles,
            mesmerizing music, hypnotic dance, mind-blowing art, and enchanting
            language sessions. Let your creativity flow and dive into the
            thrilling world of event experiences that no one will ever forget!
          </p>
        </div>
        <div>
          <img
            src="/event-intro.jpg"
            alt="Event intro photo"
            className={classes.img}
          />
        </div>
      </section>
      <section className={classes.gallery}>
        <h3 className={classes["heading-secondary"]}>A glimpse in</h3>
        <div className={classes["gallery-photos"]}>
          <img src="/events-1.jpg" alt="Events 1" className={classes.img} />
          <img src="/events-2.jpg" alt="Events 2" className={classes.img} />
          <img src="/events-3.jpg" alt="Events 3" className={classes.img} />
          <img src="/events-4.jpg" alt="Events 4" className={classes.img} />
          <img src="/events-5.jpg" alt="Events 5" className={classes.img} />
          <img src="/events-6.jpg" alt="Events 6" className={classes.img} />
        </div>
      </section>
    </main>
  );
};

export default EventsMain;
