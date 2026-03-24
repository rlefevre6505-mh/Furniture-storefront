import "./AboutPage.css";

export default function AboutPage() {
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
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="white"
          >
            <path d="M379.33-244 154-469.33 201.67-517l177.66 177.67 378.34-378.34L805.33-670l-426 426Z" />
          </svg>
          <h3 className="">Quality First</h3>
          <p className="">
            We never compromise on quality. Every piece is built to last with
            premium materials and expert craftsmanship.
          </p>
        </div>
        <div className="quality">
          {" "}
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="white"
          >
            <path d="M214-175.33q-44.06-45-69.03-104T120-400.67q0-69.66 25-130.5Q170-592 222-644q35-35 86.83-59.33 51.84-24.34 122.34-38.17 70.5-13.83 160-17.17 89.5-3.33 199.5 4.67 8 107.33 5.33 196.67-2.67 89.33-16.17 160.66-13.5 71.34-38 124.71-24.5 53.38-60.5 89.29Q629.67-131 570.5-105.5T446-80q-67.67 0-126.67-24.17-59-24.16-105.33-71.16Zm106-5.34q26.33 17 58.5 25.5t67.45 8.5q50.72 0 99.05-20.83t89.33-62.5q24-24 42.84-63.83 18.83-39.84 31.33-97Q721-448 726-522.83q5-74.84.67-169.17-79-2-149.17 1.17-70.17 3.16-128.5 14.16t-104 30q-45.67 19-74.67 48.67-43 43.67-63.33 90.33Q186.67-461 186.67-414q0 51.67 21.16 101.5 21.17 49.83 46.84 77.17 49.33-92 121.66-168.5 72.34-76.5 158.34-122.17-82 71-135.84 155.83Q345-285.33 320-180.67Zm0 0Zm0 0Z" />
          </svg>
          <h3 className="text-xl font-semibold mb-2">Sustainable</h3>
          <p className="text-gray-600">
            We're committed to sustainability, using eco-friendly materials and
            responsible manufacturing practices.
          </p>
        </div>
        <div className="quality">
          <svg
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="white"
          >
            <path d="M475-146.67q4.67 0 10.33-2.33 5.67-2.33 9-5.67l334-334.66Q841-502 847.17-518.11q6.16-16.11 6.16-32.22 0-16.67-6.16-32.84-6.17-16.16-18.84-28.5L651.67-788.33q-12.34-12.67-28.5-18.84-16.17-6.16-32.84-6.16-16.11 0-32.22 6.16Q542-801 529.33-788.33l-15.66 15.66L592.33-693Q606-679 615-660.67q9 18.34 9 39.67 0 39.33-29.17 68.17Q565.67-524 526.33-524q-23.33 0-40.5-7.33-17.16-7.34-30.95-21.23L381-626 202-447q-4.33 4.33-6.17 9.18-1.83 4.86-1.83 10.4 0 11.09 7.67 18.92 7.66 7.83 18.77 7.83 5.56 0 10.56-2.66 5-2.67 8.33-6l137.34-137.34L423.33-500 287-363.33q-4.33 4.33-6.17 9.5-1.83 5.16-1.83 10.5 0 10.66 8 18.66t18.67 8q5.33 0 10.33-2.33t8.33-5.67l137.34-137L508.33-415 372-278.33q-3.67 3.33-5.83 8.89-2.17 5.55-2.17 11.11 0 10.66 8 18.66t18.67 8q5.33 0 9.83-1.83t8.83-6.17l137.34-137L593.33-330 456-192.67q-4.33 4.34-6.17 9.5Q448-178 448-173.33q0 12 7.5 19.33 7.5 7.33 19.5 7.33ZM474.71-80q-34.38 0-61.21-24.5t-31.83-60.91q-34-4.92-57-27.92t-28-57q-34-5-56.5-28.5t-27.5-56.5q-37.34-5-61.34-31t-24-62q0-18 6.99-35.54 6.98-17.53 20.01-30.8L381-721l117 117q6 6.33 13.56 9.83 7.55 3.5 15.11 3.5 11.66 0 21.33-9.5 9.67-9.5 9.67-21.27 0-5.23-2.84-11.56-2.83-6.33-9.16-12.33l-143-143q-12.34-12.67-28.5-18.84-16.17-6.16-32.84-6.16-16.11 0-32.22 6.16Q293-801 280.37-788.43L132-639.67q-12.33 12.34-18 26.67-5.67 14.33-7 31.33t5 33.5q6.33 16.5 16.33 30.17l-48 48q-19-22.33-30-52.17-11-29.83-10.33-60.5.67-29.33 12.33-56.5Q64-666.33 85-687.33L232.67-835q22.66-22.33 51.03-33.33 28.36-11 58.16-11 29.81 0 57.97 11 28.17 11 50.5 33.33L466-819.33 481.67-835q22.66-22.33 51.03-33.33 28.36-11 58.16-11 29.81 0 57.97 11 28.17 11 50.5 33.33L875-659.33q22.33 22.33 33.67 51.02Q920-579.62 920-549.98q0 29.65-11.33 57.81Q897.33-464 875-441.67L541-108q-13.33 13.33-30.52 20.67Q493.29-80 474.71-80Zm-98.38-550.67Z" />
          </svg>

          <h3>Customer Focus</h3>
          <p>
            Your satisfaction is our priority. We provide exceptional service
            from browsing to delivery and beyond.
          </p>
        </div>
      </section>
      <section className="contact_container">
        <h2>Visit Our Showroom</h2>
        <div className="contact">
          <div className="contact1">
            <div>
              <div>
                <h3>Contact Information</h3>
                <div>
                  <div className="detail">
                    <svg
                      className="svg_sm"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="white"
                    >
                      <path d="M366.67-440h66.66v-116.67h93.34V-440h66.66v-186.67L480-702l-113.33 75.33V-440ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-115-73.5-188.17-73.5-73.16-179.83-73.16-106.33 0-179.83 73.16Q226.67-667 226.67-552q0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
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
                    <svg
                      className="svg_sm"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="white"
                    >
                      <path d="M666.67-186.67h106.66v-586.66H666.67v586.66ZM303.83-416.28q9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5 14.21 0 23.71-9.61Zm0 120q9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5 14.21 0 23.71-9.61Zm-57.16-230.39h306.66v-146.66H246.67v146.66Zm177.16 110.39q9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5 14.21 0 23.71-9.61Zm0 120q9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5 14.21 0 23.71-9.61Zm120-120q9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5 14.21 0 23.71-9.61Zm0 120q9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5 14.21 0 23.71-9.61ZM600-226.67v-506.66H186.67v506.66H600ZM666.67-120q-21.15 0-37.25-11.33-16.09-11.34-23.75-28.67h-419q-27.5 0-47.09-19.58Q120-199.17 120-226.67v-506.66q0-27.5 19.58-47.09Q159.17-800 186.67-800h419q7.66-17.33 23.75-28.67Q645.52-840 666.67-840h106.66q27.5 0 47.09 19.58Q840-800.83 840-773.33v586.66q0 27.5-19.58 47.09Q800.83-120 773.33-120H666.67Zm-480-106.67v-506.66 506.66Z" />
                    </svg>
                    <div className="detail_text">
                      <p>
                        <strong>Phone</strong>
                        <br />
                        0163 296 0000
                      </p>
                    </div>
                  </div>
                  <div className="detail">
                    <svg
                      className="svg_sm"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="white"
                    >
                      <path d="M146.67-160q-27 0-46.84-19.83Q80-199.67 80-226.67v-506.66q0-27 19.83-46.84Q119.67-800 146.67-800h666.66q27 0 46.84 19.83Q880-760.33 880-733.33v506.66q0 27-19.83 46.84Q840.33-160 813.33-160H146.67ZM480-454.67 146.67-670v443.33h666.66V-670L480-454.67Zm0-66.66 330.67-212H150l330 212ZM146.67-670v-63.33V-226.67-670Z" />
                    </svg>
                    <div className="detail_text">
                      <p>
                        <strong>Email</strong>
                        <br />
                        info@modernhome.com
                      </p>
                    </div>
                  </div>
                  <div className="detail">
                    <svg
                      className="svg_sm"
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="white"
                    >
                      <path d="m588.67-300.67-142-142V-640h66.66v169.67l122 122-46.66 47.66Zm-142-426v-86.66h66.66v86.66h-66.66Zm280 280v-66.66h86.66v66.66h-86.66Zm-280 300v-86.66h66.66v86.66h-66.66Zm-300-300v-66.66h86.66v66.66h-86.66ZM480.18-80q-82.83 0-155.67-31.5-72.84-31.5-127.18-85.83Q143-251.67 111.5-324.56T80-480.33q0-82.88 31.5-155.78Q143-709 197.33-763q54.34-54 127.23-85.5T480.33-880q82.88 0 155.78 31.5Q709-817 763-763t85.5 127Q880-563 880-480.18q0 82.83-31.5 155.67Q817-251.67 763-197.46q-54 54.21-127 85.84Q563-80 480.18-80Zm.15-66.67q139 0 236-97.33t97-236.33q0-139-96.87-236-96.88-97-236.46-97-138.67 0-236 96.87-97.33 96.88-97.33 236.46 0 138.67 97.33 236 97.33 97.33 236.33 97.33ZM480-480Z" />
                    </svg>
                    <div className="detail_text">
                      <p>
                        <strong>Hours </strong>
                        <br />
                        Mon-Fri: 10am - 7pm
                        <br />
                        Sat-Sun: 11am - 6pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </div>
          <div className="contact2">
            <div>
              <h3>Schedule a Visit</h3>
              <form>
                <div>
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label>Email</label>
                  <input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit">Request Appointment</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
