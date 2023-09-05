import React from "react";
import Section from "../../../UI/Section";

const Art = () => {
  const content = {
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
  };

  return (
    <Section
      headingSecondary={content.secondaryHeading}
      headingTertiary={content.primaryHeading}
      content={content.mainContent}
    />
  );
};

export default Art;
