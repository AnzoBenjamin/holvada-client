import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Services.module.scss";
import styles from "../../scss/utils/_helpers.module.scss";

interface ServiceItemProps {
  imageClass: string;
  title: string;
  items: string[];
  itemIcon: string[];
  bgClass: string;
  otherClass: string;
  link: string;
  description: string;
}
const ServiceItem: React.FC<ServiceItemProps> = ({
  imageClass,
  title,
  items,
  itemIcon,
  bgClass,
  otherClass,
  link,
  description,
}) => {
  const [isFlipped, setisFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    return window.innerWidth <= 768;
  });

  const handleFlip = () => {
    setisFlipped(!isFlipped);
  };

  const handleClick = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  useState(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check
    handleWindowSizeChange();

    // Event listener for window size changes
    window.addEventListener("resize", handleWindowSizeChange);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });
  return (
    <div
      className={`${classes["section-services__area--item"]} ${
        isFlipped ? classes.flipped : ""
      } ${otherClass}`}
      onClick={isMobile ? handleFlip : undefined}
      onMouseEnter={!isMobile ? handleFlip : undefined}
      onMouseLeave={!isMobile ? handleFlip : undefined}
    >
      <div className={`${classes["section-services__area--front"]}`}>
        <figure className={classes["section-services__area--figure"]}>
          <div className={`${classes["image-container"]} ${imageClass}`}>
            &nbsp;
            <figcaption>
              <span className={classes["section-services-img__heading"]}>
                {title}
              </span>
            </figcaption>
          </div>
        </figure>

        <ul className={classes.list}>
          {items.map((item, index) => (
            <li key={index} className={classes["list-item"]}>
              <img
                src={itemIcon[index]}
                className={classes["list-item__icon"]}
              />{" "}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={`${classes["section-services__area--back"]} ${bgClass}`}>
        <p>{description}</p>
        <Link to={link} className={classes.btn} onClick={handleClick}>
          More
        </Link>
      </div>
    </div>
  );
};

const Services = () => {

  /*
  const serviceItems = [
    {
      imageClass: classes.code,
      bgClass: classes["code__bg"],
      title: "Software",
      items: [
        "Mobile development",
        "Web development",
        "Graphics Design",
        "Software as a service",
      ],
      itemIcon: [
        "/mobile-icon.png",
        "/web.webp",
        "/design-icon.webp",
        "/saas.webp",
      ],
      link: "/tech",
      description:
        "Whether you need a mobile application that puts your business in the hands of your customers or a robust software system that powers your operations, our team of experts has you covered. From frontend development that creates captivating user interfaces to backend development that ensures seamless functionality, we deliver tailored software solutions that meet your unique needs.",
    },
    {
      imageClass: classes.performance,
      bgClass: classes["performance__bg"],
      title: "Events",
      items: ["Language", "Art", "Music", "Chess"],
      itemIcon: [
        "/language-icon.webp",
        "/art-icon.webp",
        "/music-icon.webp",
        "/chess-icon.webp",
      ],
      link: "/events",
      description:
        "Unleash your creativity and explore the world of art with our diverse art services. From oil paintings that bring life to your imagination to intricately detailed pencil drawings and awe-inspiring sculptures, our art offerings cater to various artistic expressions.",
    },
  ];
  */
  const serviceItems = [
    {
      imageClass: classes.code,
      bgClass: classes["code__bg"],
      title: "Software",
      items: [
        "Mobile development",
        "Web development",
        "Graphics Design",
        "Software as a service",
      ],
      itemIcon: [
        "/mobile-icon.png",
        "/web.webp",
        "/design-icon.webp",
        "/saas.webp",
      ],
      link: "/tech",
      description:
        "Whether you need a mobile application that puts your business in the hands of your customers or a robust software system that powers your operations, our team of experts has you covered. From frontend development that creates captivating user interfaces to backend development that ensures seamless functionality, we deliver tailored software solutions that meet your unique needs.",
    },
    {
      imageClass: classes.art,
      bgClass: classes["art__bg"],
      title: "Learning",
      items: ["Language", "Art", "Music", "Chess"],
      itemIcon: [
        "/language-icon.webp",
        "/art-icon.webp",
        "/music-icon.webp",
        "/chess-icon.webp",
      ],
      link: "/learn",
      description:
        "Unleash your creativity and explore the world of art with our diverse art services. From oil paintings that bring life to your imagination to intricately detailed pencil drawings and awe-inspiring sculptures, our art offerings cater to various artistic expressions.",
    },
    {
      imageClass: classes.performance,
      bgClass: classes["performance__bg"],
      title: "Events",
      items: ["Competitions", "Concerts", "Showcases"],
      itemIcon: [
        "/competition-icon.png",
        "/concert-icon.png",
        "/showcase-icon.png",
      ],
      link: "/events",
      description:
        "Unleash your creativity and explore the world of art with our diverse art services. From oil paintings that bring life to your imagination to intricately detailed pencil drawings and awe-inspiring sculptures, our art offerings cater to various artistic expressions.",
    },
  ];

  return (
    <section className={classes["section-services"]} id="section-services">
      <h3 className={styles["heading-tertiary"]}>Services</h3>
      <h2 className={styles["heading-secondary"]}>
        Comprehensive Solutions Tailored to Your Needs
      </h2>
      {/*
      <div className={classes["section-services__area"]}>
        learningItems.map((item, index) => (
          <ServiceItem
            key={index}
            imageClass={item.imageClass}
            title={item.title}
            items={item.items}
            itemIcon={item.itemIcon}
            bgClass={item.bgClass}
            otherClass=""
            link={item.link}
            description={item.description}
          />

      </div>
        ))*/}
      <div className={classes["section-services__area"]}>
        {serviceItems.map((item, index) => (
          <ServiceItem
            key={index}
            imageClass={item.imageClass}
            title={item.title}
            items={item.items}
            itemIcon={item.itemIcon}
            bgClass={item.bgClass}
            otherClass=""
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
      <div>
        <p className={classes.note}>All plans include the following</p>
        <div className={classes.common}>
          <div className={classes["common__area"]}>
            <div className={classes["common__area--item"]}>
              {" "}
              <h4 className={classes["common__area--heading"]}>
                {" "}
                Online collaboration
                <img src="/online.webp" alt="" className={classes.icon} />{" "}
              </h4>
              <p>
                With our powerful online collaboration feature, holvada enables
                you to work together seamlessly with your team, no matter where
                you are located.
              </p>
            </div>
            <div className={classes["common__area--item"]}>
              {" "}
              <h4 className={classes["common__area--heading"]}>
                {" "}
                7 days a week availability
                <img src="/available.webp" alt="" className={classes.icon} />
              </h4>
              <p>
                We're proud to offer our services seven days a week, ensuring
                that our expertise and assistance are available to you every
                day.
              </p>
            </div>
            <div className={classes["common__area--item"]}>
              {" "}
              <h4 className={classes["common__area--heading"]}>
                {" "}
                Full Refund
                <img src="/refund.webp" alt="" className={classes.icon} />{" "}
              </h4>
              <p>
                If you find yourself dissatisfied with any product or service
                you've purchased from our website, you can request a refund
                within 7 days from the date of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
