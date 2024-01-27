import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/portfolio9.png";
import IMG10 from "../../assets/portfolio10.png";
import IMG11 from "../../assets/portfolio11.png";
import IMG12 from "../../assets/portfolio12.png";
import IMG13 from "../../assets/portfolio13.png";
import IMG14 from "../../assets/portfolio14.png";
import IMG15 from "../../assets/portfolio15.png";
import IMG16 from "../../assets/portfolio16.png";

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 15,
    image: IMG15,
    title: "Madamcoon Maine Coon Cattery NYC",
    // github: "https://github.com/jeffjiang13",
    // demo: "https://madamcoon.com/",
    live: "https://madamcoon.com/",
  },
  {
    id: 16,
    image: IMG16,
    title: "ChiqueChickShop",
    // github: "https://github.com/jeffjiang13",
    // demo: "https://chiquechickshop.com/",
    live: "https://chiquechickshop.com/",
  },
  {
    id: 13,
    image: IMG13,
    title: "Facebook Clone",
    github: "https://github.com/jeffjiang13/fb",
    demo: "https://jj-facebook.vercel.app/",
  },
  {
    id: 14,
    image: IMG14,
    title: "Instagram Clone",
    github: "https://github.com/jeffjiang13/IG-2.0",
    demo: "https://jj-ig.vercel.app",
  },
  {
    id: 1,
    image: IMG1,
    title: "Ecommerce with Strapi",
    github: "https://github.com/jeffjiang13/top-ecommerce-frontend",
    demo: "https://chiquechick-frontend.vercel.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "iShopper (with multi shop vendor)",
    github: "https://github.com/jeffjiang13/ecommerce-5",
    demo: "https://jj-ecommerce-5.vercel.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "ShopWise (with Admin Panel)",
    github: "https://github.com/jeffjiang13/ecommerce-3",
    demo: "https://jj-ecommerce-3.vercel.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Ecommerce with Strapi",
    github: "https://github.com/jeffjiang13/react-ecommerce",
    demo: "https://jj-react-ecommerce.vercel.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Ecommerce with Admin Panel",
    github: "https://github.com/jeffjiang13/ecommerce-4",
    demo: "https://ecommerce-4.vercel.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Nike Store Clone",
    github: "https://github.com/jeffjiang13/ecommerce-store",
    demo: "https://jj-ecommerce-store.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "CryptoKet",
    github: "https://github.com/jeffjiang13/cryptoket-v2",
    demo: "https://cryptoket-v2.vercel.app/",
  },
  {
    id: 8,
    image: IMG8,
    title: "TikTok Clone",
    github: "https://github.com/jeffjiang13/tiktok",
    demo: "https://jj-tiktok.vercel.app/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Cinema",
    github: "https://github.com/jeffjiang13/cinema",
    demo: "https://jj-cinema.vercel.app/",
  },
  {
    id: 10,
    image: IMG10,
    title: "Pokedex",
    github: "https://github.com/jeffjiang13/pokedex",
    demo: "https://jj-pokedex.netlify.app/",
  },
  {
    id: 11,
    image: IMG11,
    title: "Amazon Clone",
    github: "https://github.com/jeffjiang13/amazon",
    demo: "https://jeff-amazon.vercel.app/",
  },
  {
    id: 12,
    image: IMG12,
    title: "MovieNight",
    github: "https://github.com/jeffjiang13/movie-night",
    demo: "https://jj-movie-night.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <h5 style={{ maxWidth: "800px", margin: "0 auto" }}>
        Thank you for visiting my portfolio! Please note, some of the
        applications are hosted on render.com and might take a moment to load
        due to automatic sleep mode after 15 minutes of inactivity. Your
        patience is appreciated while the applications spin up for you to
        explore. Enjoy!{" "}
      </h5>
      <br />
      <h5>Here are some of my recent projects. Want to see more? Email me.</h5>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, live }) => {
          return (
            <article
              key={id}
              className="portfolio__item"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div
                className="portfolio__item-cta"
                style={{ marginTop: "auto" }}
              >
                {/* Conditional rendering for GitHub button */}
                {github && (
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
                {/* Conditional rendering for Live Demo button */}
                {live && (
                  <a
                    href={live}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Client Site
                  </a>
                )}
                {demo && (
                  <a
                    href={demo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
