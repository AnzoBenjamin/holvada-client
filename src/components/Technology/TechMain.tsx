import React from "react";
import classes from "./TechMain.module.scss";
import Section from "../../UI/Section";

const TechMain: React.FC = () => {
  const content = [
    {
      primaryHeading: "web",
      secondaryHeading: "Building Robust and Scalable Solutions",
      mainContent: [
        {
          heading: "Frontend Development",
          paragraph:
            "Elevate the user experience of your digital projects with our Frontend Development services. Our team of expert developers specializes in HTML, CSS, and JavaScript, bringing your designs to life and ensuring smooth and captivating interfaces. From responsive websites to interactive web applications, we employ the latest frameworks and best practices to deliver exceptional user experiences.",
        },
        {
          heading: "Backend Development",
          paragraph:
            "Empower your digital ecosystem with our Backend Development expertise. Our skilled developers create powerful server-side applications and APIs that drive seamless functionality and data management. We excel in server management, database design, and security implementation, providing you with a reliable and scalable backend infrastructure to support your business operations.",
        },
      ],
    },
    {
      primaryHeading: "graphics",
      secondaryHeading: "Unlocking the World of Visual Creativity",
      mainContent: [
        {
          heading: "Logo Design",
          paragraph:
            "Make a lasting impression with our Logo Design services. Our talented designers collaborate closely with you to create unique and impactful logos that represent your brand's essence. We consider your brand values, target audience, and industry trends to design logos that are visually appealing, memorable, and resonate with your customers.",
        },
        {
          heading: "UI/UX Design",
          paragraph:
            "Enhance user satisfaction and engagement with our UI/UX Design services. Our experienced designers create user interfaces that are visually stunning, intuitive to navigate, and optimized for exceptional user experiences. By understanding your users' needs and behaviors, we craft interfaces that align with your brand's identity and drive positive interactions.",
        },
        {
          heading: "Posters/Flyers Design",
          paragraph:
            "Promote your events, products, or services with our Posters/Flyers Design services. Our creative designers combine compelling visuals, engaging typography, and effective layout design to create attention-grabbing posters and flyers. From informative event posters to impactful promotional materials, we ensure your designs stand out and leave a lasting impression.",
        },
      ],
    },
    {
      primaryHeading: "mobile",
      secondaryHeading: "Crafting Seamless Mobile Experiences",
      mainContent: [
        {
          heading: "iOS Development",
          paragraph:
            "Delight iOS users with our iOS Development services. Our skilled developers utilize Swift, Apple's programming language, to create stunning native iOS applications. From iPhones to iPads, we ensure your app meets Apple's design standards, delivers excellent user experiences, and seamlessly integrates with the iOS ecosystem.",
        },
        {
          heading: "Cross-Platform Development",
          paragraph:
            "Reach a wider audience with our Cross-Platform Development services. Leveraging frameworks such as React Native and Flutter, our developers create mobile applications that run smoothly on both Android and iOS platforms. By sharing a single codebase, we save development time and effort while ensuring consistent user experiences across different devices.",
        },
        {
          heading: "Android Development",
          paragraph:
            "Captivate Android users with our Android Development services. Our team of experienced developers specializes in Java and Kotlin, delivering captivating native Android applications tailored to your business needs. We ensure seamless functionality, intuitive user interfaces, and optimal performance for your Android app.",
        },
      ],
    },
  ];

  return (
    <main className={classes.hero}>
      {content.map((item, index) => (
        <Section
          key={index}
          headingSecondary={item.secondaryHeading}
          headingTertiary={item.primaryHeading}
          content={item.mainContent}
        />
      ))}
    </main>
  );
};

export default TechMain;
