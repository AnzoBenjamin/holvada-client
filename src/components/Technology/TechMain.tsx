import React from "react";
import classes from "./TechMain.module.scss";

const TechMain: React.FC = () => {


  return (
    <main className={classes.hero}>
      <section>
        <h2 className={classes["heading-secondary"]}>Our Techno-artistry</h2>
        <div className={classes["img-area"]}>
          <img src="/design.jpg" alt="Design" className={classes.first}/>
          <img src="/frontend.webp" alt="Frontend" className={classes.second}/>
          <img src="/backend.webp" alt="Frontend" className={classes.third}/>
          <img src="/mobile.webp" alt="Frontend" className={classes.fourth}/>


        </div>
      </section>
    </main>
  );
};

export default TechMain;
