import Slideshow from "../components/Slideshow.jsx";
import { Link } from "react-router";
import { useEffect } from "react";
import "./Home.css";
import { PhoneIconV1, VanIcon, ShieldIcon } from "../components/icons.jsx";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="carousel">
        <Slideshow />
      </div>
      <section className="highlights">
        <div className="highlight">
          <VanIcon /> <h3 className="">Free Shipping</h3>
          <p className="">On orders over £500</p>
        </div>
        <div className="highlight">
          <ShieldIcon />
          <h3 className="text-xl font-semibold mb-2">5-Year Warranty</h3>
          <p className="text-gray-600">Quality guaranteed</p>
        </div>
        <div className="highlight">
          <PhoneIconV1 />

          <h3>24/7 Support</h3>
          <p>We're here to help</p>
        </div>
      </section>
      <section className="showroom">
        <img
          src="/images/main/showroom.webp"
          alt="a photo of our showroom"
        ></img>{" "}
        <h2 className="h2">Visit Our Showroom</h2>
        <p className="p">
          Experience our furniture in person. Schedule a private consultation
          with our design experts.
        </p>
        <Link to="/about#contact" className="a">
          <span>Learn More</span>
        </Link>
      </section>
    </>
  );
}
