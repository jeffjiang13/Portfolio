import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Developing responsive web design for optimal user experience
                across various devices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Efficient in JavaScript ES6+, ensuring smooth and dynamic web
                interactivity.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in using React and React Hooks for building user
                interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience with Redux for effective state management in
                JavaScript applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Skilled in using HTML/HTML5 and CSS for structuring and styling
                web pages.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to utilize TypeScript for building large scale web
                applications.
              </p>
            </li>
          </ul>
        </article>

        {/* End of Frontend Development */}

        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in Node.js and Express.js for server-side scripting
                and API creation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience with MongoDB and PostgreSQL for database management
                and manipulation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Skilled in building and using REST APIs for smooth front-end and
                back-end integration.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Strong knowledge in Python 3 for various backend tasks and data
                manipulation.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Understanding of Apache Kafka and RabbitMQ for handling
                real-time data feeds.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience with Docker for creating, deploying, and running
                applications.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to work with Monoliths and Microservices architecture as
                per project requirements.
              </p>
            </li>
          </ul>
        </article>

        {/* END of Backend Development */}

        <article className="service">
          <div className="service__head">
            <h3>Fullstack Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Expertise in MERN (MongoDB, Express.js, React.js, Node.js) and
                Django stack for complete web application development.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in JavaScript (ES6+), HTML/HTML5, and CSS for
                end-to-end web development.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Skilled in creating responsive and user-friendly interfaces
                using React and Redux Toolkit.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Experience in building efficient backend systems with Node.js,
                Express, and Python.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Ability to integrate front-end and back-end through REST APIs
                and GraphQL.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Proficient in version control using Git and deployment using
                platforms like Vercel and render.com.
              </p>
            </li>
          </ul>
        </article>

        {/* End oF Fullstack Development */}
      </div>
    </section>
  );
};

export default Services;
