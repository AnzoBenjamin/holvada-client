import React from "react";
import HeroSlider from "../../../UI/HeroSlider";

const EventsHero: React.FC = () => {
  const HeroData = [
    { imageURL: "events.jpg", text: "sing", tag: "sing", category: "sing"},
    { imageURL: "events 2.jpg", text: "play", tag: "sing", category: "sing" },
    { imageURL: "events 3.jpg", text: "sing", tag: "sing", category: "sing"},
    { imageURL: "events 4.jpg", text: "play", tag: "sing", category: "sing" },
  ];
  return <HeroSlider slideData={HeroData} />;
};

export default EventsHero;
