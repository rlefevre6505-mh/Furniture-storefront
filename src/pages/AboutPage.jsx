import "./AboutPage.css";
import { useEffect } from "react";
import { useLocation } from "react-router";
import {
  TickIcon,
  LeafIcon,
  HandshakeIcon,
  LocationIcon,
  MailIcon,
  ClockIcon,
  PhoneIconV2,
} from "../components/icons";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      {" "}
      <section className="hero">
        <img
          className="hero_image"
          src="/images/main/showroom.webp"
          alt="a photo of our showroom"
        />

        <h2 className="h2">About Stoneleaf Furnishings</h2>
        <p className="p">Crafting beautiful spaces since 2010</p>
      </section>
      <section className="about">
        <div>
          <h2>Our Story</h2>
          <div>
            <p>
              Stoneleaf Furnishings was founded with a simple vision: to bring
              premium, timeless furniture to modern homes. For over a decade,
              we've been dedicated to sourcing and crafting pieces that combine
              exceptional quality with contemporary design.
            </p>
            <div className="spacer"></div>
            <p>
              Every piece in our range is carefully selected to ensure it meets
              our high standards of craftsmanship, durability, and style. We
              believe that furniture should not only be beautiful but also
              functional and built to last for generations.
            </p>
            <div className="spacer"></div>
            <p>
              Our team of design experts works closely with master craftsmen to
              create furniture that tells a story. From the living room to the
              bedroom, we help you transform your house into a home that
              reflects your unique personality and lifestyle.
            </p>
          </div>
        </div>
      </section>
      <section className="qualities">
        <div className="quality">
          {" "}
          <TickIcon />
          <h3 className="">Quality First</h3>
          <p className="">
            We never compromise on quality. Every piece is built to last with
            premium materials and expert craftsmanship.
          </p>
        </div>
        <div className="quality">
          {" "}
          <LeafIcon />
          <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
          <p className="text-gray-600">
            We're committed to sustainability, using eco-friendly materials and
            responsible manufacturing practices.
          </p>
        </div>
        <div className="quality">
          <HandshakeIcon />

          <h3>Customer Focus</h3>
          <p>
            Your satisfaction is our priority. We provide exceptional service
            from browsing to delivery and beyond.
          </p>
        </div>
      </section>
      <section className="contact_container">
        <h2>Visit Our Showroom</h2>
        <div className="contact" id="contact">
          <div className="contact1">
            <div>
              <div>
                <h3>Contact Information</h3>
                <div>
                  <div className="detail">
                    <LocationIcon />
                    <div className="detail_text">
                      <p>
                        <strong>Address</strong> <br />
                        123 Furniture Street
                        <br />
                        London, W1A 0AX
                      </p>
                    </div>
                  </div>
                  <div className="detail">
                    <PhoneIconV2 />
                    <div className="detail_text">
                      <p>
                        <strong>Phone</strong>
                        <br />
                        0163 296 0000
                      </p>
                    </div>
                  </div>
                  <div className="detail">
                    <MailIcon />
                    <div className="detail_text">
                      <p>
                        <strong>Email</strong>
                        <br />
                        info@stonleaf.com
                      </p>
                    </div>
                  </div>
                  <div className="detail">
                    <ClockIcon />
                    <div className="detail_text">
                      <p>
                        <strong>Hours </strong>
                        <br />
                        Mon-Sat: 9am - 6pm
                        <br />
                        Sun: 10am - 5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
          <div className="contact2">
            <h3>Schedule a Visit</h3>
            <form className="form">
              <div className="form_div">
                <label htmlFor="name">Name</label>
                <input name="name" ype="text" placeholder="Your name" />
              </div>
              <div className="form_div">
                <label htmlFor="email">Email</label>
                <input name="email" type="email" placeholder="your@email.com" />
              </div>
              <div className="form_div">
                <label htmlFor="date">Preferred Date</label>
                <input name="date" type="date" />
              </div>
              <div className="form_div">
                <label htmlFor="meassage">Message</label>
                <textarea
                  className="textarea"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your needs..."
                />
              </div>
              <button className="submit_button" type="submit">
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
