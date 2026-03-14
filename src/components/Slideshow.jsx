import { heroImages } from "../../data/data.js";
import HeroImage from "./HeroImage.jsx";
import "./Slideshow.css";
import { useState, useEffect } from "react";

export default function Slideshow() {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6000);
  }, []);

  return (
    <div className="slideshow">
      {/* {heroImages.map((hero, index) => {
        return ( */}
      <div key={`hero-div${imageIndex}`} className="slide">
        <HeroImage
          src={heroImages[imageIndex].url}
          alt="An elegant living space"
          className="heroImage"
        >
          <div className={`div${imageIndex}`}></div>
          {imageIndex === 0 && <p className={`p${imageIndex}`}>Home comfort</p>}
          {imageIndex === 1 && (
            <p className={`p${imageIndex}`}>Exquisite elegance</p>
          )}
          {imageIndex === 2 && (
            <p className={`p${imageIndex}`}>Contemporary style</p>
          )}
        </HeroImage>
      </div>
      {/* );
      })} */}
    </div>
  );
}
