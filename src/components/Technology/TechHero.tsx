import React from "react";
import HeroSlider from "../../UI/HeroSlider";

const TechHero: React.FC = () => {
  const HeroData = [
    {
      imageURL: "frontend.webp",
      text: "Code & Design",
      category: "frontend",
      tag: "Explore",
    },
    {
      imageURL: "backend.webp",
      text: "Data Dynamo",
      category: "backend",
      tag: "Empower",
    },
    {
      imageURL: "design.webp",
      text: "Creative Spark",
      category: "design",
      tag: "Discover",
    },
    {
      imageURL: "mobile.webp",
      text: "App Adventure",
      category: "mobile",
      tag: "Inspire",
    },
  ];
  return <HeroSlider slideData={HeroData} />;
};

export default TechHero;
