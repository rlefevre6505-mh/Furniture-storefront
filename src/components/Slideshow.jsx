import { heroImages } from "../../data/data.js";
import HeroImage from "./HeroImage.jsx";
import "./Slideshow.css";
import { useState, useEffect } from "react";

export default function Slideshow() {
  const [imageIndex, setImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setImageIndex((prevIndex) =>
          prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1,
        );
        setIsFading(false);
      }, 600);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      <div className={`slide ${isFading ? "fade-out" : "fade-in"}`}>
        <HeroImage
          src={heroImages[imageIndex].url}
          alt="An elegant living space"
          className="heroImage"
          imageIndex={imageIndex}
        ></HeroImage>
      </div>
    </div>
  );
}
