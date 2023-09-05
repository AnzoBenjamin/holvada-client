import React from "react";
import HeroSlider from "../../../UI/HeroSlider";

const LearnHero: React.FC = () => {
  const HeroData = [
    {
      imageURL: "art.jpg",
      text: "Creative Visions",
      category: "art",
      tag: "Create",
    },
    {
      imageURL: "code.jpg",
      text: "Hack the World",
      category: "tech",
      tag: "Code",
    },
    {
      imageURL: "chess.jpg",
      text: "Play and Win",
      category: "chess",
      tag: "Play",
    },
    {
      imageURL: "language.jpg",
      text: "Speak Connect",
      category: "language",
      tag: "Learn",
    },
    {
      imageURL: "music.jpg",
      text: "Melody Magic",
      category: "music",
      tag: "Compose",
    },
  ];

  const content = [
    {
      primaryHeading: "art",
      secondaryHeading: "Unleash Your Creativity on Canvas",
      mainContent: [
        {
          heading: "Pencil Drawings",
          paragraph:
            "Discover the art of sketching with pencil, as our expert instructors guide you through shading, perspective, and capturing realistic details to create stunning drawings. ",
        },
        {
          heading: "Oil Paintings",
          paragraph:
            "Delve into the world of oil painting, from understanding color theory and composition to applying different brushwork techniques and creating vibrant, textured artworks.",
        },
        {
          heading: "Watercolors",
          paragraph:
            "Explore the translucent beauty of watercolor paintings, mastering techniques such as washes, glazing, wet-on-wet, and dry-brush to create captivating and expressive artworks.",
        },
        {
          heading: "Acrylic Paintings",
          paragraph:
            "Learn the versatility of acrylic paints, from blending colors to creating textures, as you develop your own unique style and bring your imagination to life on canvas.",
        },
        {
          heading: "Mixed Media",
          paragraph:
            "Experiment with combining different art mediums, textures, and materials to create mixed media artworks that showcase your creativity and artistic expression.",
        },
      ],
    },
    {
      primaryHeading: "tech",
      secondaryHeading: "Navigate the Digital World with Confidence",
      mainContent: [
        {
          heading: "Code",
          paragraph:
            " Coding Master the art of programming with courses in popular languages such as Python, JavaScript, and Java. From building algorithms to developing web applications, acquire the skills to tackle coding challenges and create your own projects.",
        },
        {
          heading: "Scratch",
          paragraph:
            "Dive into creative coding with Scratch, a beginner-friendly platform that allows you to create interactive stories, games, and animations. Learn programming concepts and unleash your imagination through hands-on projects.",
        },
        {
          heading: "Basic Computer Skills",
          paragraph:
            "Develop a solid foundation in essential computer skills, including operating systems, file management, internet navigation, and productivity tools like Microsoft Office or Google Suite. Gain the confidence to navigate the digital world with ease.",
        },
      ],
    },
    {
      primaryHeading: "chess",
      secondaryHeading: "Unlock your strategic mind with chess",
      mainContent: [
        {
          heading: "Beginners' Chess",
          paragraph:
            "Learn the fundamentals of chess, including piece movements, basic tactics, and strategies to get you started on your chess journey.",
        },
        {
          heading: "Intermediate Chess",
          paragraph:
            "Dive deeper into the world of chess, exploring advanced strategies, positional play, and tactical combinations to elevate your game.",
        },
        {
          heading: "Advanced Chess",
          paragraph:
            "Sharpen your skills with in-depth analysis of master games, advanced opening theory, and tournament preparation to become a formidable player.",
        },
        {
          heading: "Chess for Kids",
          paragraph:
            "Engage young minds in the captivating world of chess through fun and interactive lessons designed specifically for children.",
        },
      ],
    },

    {
      primaryHeading: "language",
      secondaryHeading: "Unlock the Power of Communication",
      mainContent: [
        {
          heading: "English",
          paragraph:
            "Improve your English language skills through engaging lessons that focus on grammar, vocabulary, pronunciation, and conversational fluency, tailored to various proficiency levels.",
        },
        {
          heading: "Kiswahili",
          paragraph:
            "Explore the rich Swahili language and culture with interactive lessons that cover vocabulary, grammar, idiomatic expressions, and practical usage for both beginners and intermediate learners.",
        },
        {
          heading: "French",
          paragraph:
            "Immerse yourself in the elegance of the French language, learning essential vocabulary, grammar structures, pronunciation, and cultural insights to communicate effectively in French-speaking environments.",
        },
      ],
    },
    {
      primaryHeading: "music",
      secondaryHeading: "Discover the Joy of Music",
      mainContent: [
        {
          heading: "Vocal Training",
          paragraph:
            "Develop your singing abilities with expert vocal coaches who will guide you through techniques, breathing exercises, and repertoire selection to enhance your vocal range and expression.",
        },
        {
          heading: "Music Theory",
          paragraph:
            "Unlock the secrets behind melodies and harmonies through comprehensive music theory lessons, covering key signatures, scales, chords, and musical notation.",
        },
        {
          heading: "Violin",
          paragraph:
            "Dive into the enchanting world of the violin, from learning proper bowing techniques to mastering beautiful melodies and classical pieces.",
        },
        {
          heading: "Piano",
          paragraph:
            "Explore the timeless beauty of the piano, starting from the basics of reading sheet music to playing intricate compositions with grace and precision.",
        },
        {
          heading: "Guitar",
          paragraph:
            "Strum your way to proficiency with guitar lessons that cover chords, scales, fingerpicking, and popular playing styles across various genres.",
        },
        {
          heading: "Saxophone",
          paragraph:
            "Learn to play this versatile and soulful instrument, from mastering breath control to developing improvisation skills and playing melodic solos",
        },
      ],
    },
  ];

  return <HeroSlider slideData={HeroData} content={content}/>;
};

export default LearnHero;
