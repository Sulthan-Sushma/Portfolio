/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/pexels-photo-1069798.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "About Me",
    description:
      "Computer Science Engineering student at Sri Indu College. Passionate developer specializing in web and mobile technologies. Strong problem-solving skills and Logic buliding completing the challenges in time. Always eager to learn and innovate.",
    //url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Skills",
    description:
      "Proficient in C, Java, Python, HTML, CSS, JavaScript. Experienced with ReactJS, NodeJS, and MySQL. Skilled in Android and React Native development. Version control with Git/GitHub. SQL and Java certified.",
    //url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Game",
    description:
      "Developed an interactive web-based game using JavaScript. Implemented game logic, score tracking, and responsive design. Demonstrates proficiency in front-end development and creating engaging user experiences.",
    url: "https://github.com/Sulthan-Sushma/node-js",
  },
  {
    title: "ReactJS Login Page",
    description:
      "Developed a secure and responsive authentication system using ReactJS. Implemented form validation, error handling, and user-friendly design. Demonstrates proficiency in modern front-end development and UI/UX principles.",
    url: "https://github.com/Sulthan-Sushma/apps",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
