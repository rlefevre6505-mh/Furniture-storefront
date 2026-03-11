import { heroImages } from "../../data/data.js";
import HeroImage from "./HeroImage.jsx";
import { useState, useEffect } from "react";

export default function Slideshow() {
  // const [imageIndex, setImageIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setImageIndex((prevIndex) =>
  //       prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
  //     );
  //   }, 3000);
  // }, []);

  return (
    <div className="slideshow">
      {heroImages.map((hero, i) => {
        return (
          <div key={`hero-div${i}`} className="slide">
            <div className={`block${i}`}></div>
            <HeroImage src={hero.url} alt="An elegant living space" />
          </div>
        );
      })}
    </div>
  );
}
