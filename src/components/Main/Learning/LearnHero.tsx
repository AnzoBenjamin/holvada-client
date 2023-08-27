import React from 'react'
import HeroSlider from "../../../UI/HeroSlider";

const LearnHero: React.FC = () => {
  const HeroData = [
    {imageURL: "art.jpg", text: "Creative Visions", category:"art", tag:"Create"},
    {imageURL: "code.jpg", text: "Hack the World", category: "tech", tag:"Code"},
    {imageURL: "chess.jpg", text: "Play and Win", category: "chess", tag:"Play"},
    {imageURL: "language.jpg", text: "Speak Connect", category: "language", tag:"Learn"},
    {imageURL: "music.jpg", text: "Melody Magic", category: "music", tag:"Compose"}

  ]
  return (
    <HeroSlider slideData={HeroData}/>
  )
}

export default LearnHero