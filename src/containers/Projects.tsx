import React from "react";

import blogApiGif from "../assets/img/projects/blogapi-screencapture.gif";
import calculatorGif from "../assets/img/projects/calculator-screencapture.gif";
import shoppingCartGif from "../assets/img/projects/shoppingcart-screencapture.gif";
import tnwHomepageCloneGif from "../assets/img/projects/tnwhomepageclone-screencapture.gif";
import weatherAppGif from "../assets/img/projects/weatherapp-screencapture.gif";
import Carousel, { IProject } from "../components/Carousel/Carousel";

const PROJECTS: IProject[] = [
  {
    name: "Blog API",
    summary: `A full-stack blog web application with a React client front-end, a React CMS front-end, 
    and an Express back-end built using the MERN stack. The backend was designed with RESTful 
    organization in mind.`,
    features: `Users can read and comment on published posts on the user webpage. Admins can signup, 
    login, create, read, edit, and delete blog posts as well as comments on the admin webpage.`,
    technologies: `HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Express.js, Passport.js, 
    MongoDB, Mongoose, Heroku`,
    demoGif: blogApiGif,
    demoLink: "https://yamakenth.github.io/blog-api-client/",
    repoLink: "https://github.com/yamakenth/blog-api-client",
  },
  {
    name: "Shopping Cart",
    summary: `A simple online store page where user can add items to cart.`,
    features: `Allows users to navigate between Home, Product, and Contact pages. Enables users to 
    add, remove, or edit number of products in cart. Shows number of items in cart in the header.`,
    technologies: "HTML, CSS, JavaScript, React.js",
    demoGif: shoppingCartGif,
    demoLink: "https://yamakenth.github.io/shopping-cart/",
    repoLink: "https://github.com/yamakenth/shopping-cart",
  },
  {
    name: "Weather App",
    summary: "A web weather app using data from OpenWeather API.",
    features: `Allows users to input a desired city name to fetch weather data. Displays current 
    weather and daily forecasts for the next 7 days. Allows users to toggle between metric and 
    imperial units.`,
    technologies: "HTML, CSS, JavaScript, Webpack",
    demoGif: weatherAppGif,
    demoLink: "https://yamakenth.github.io/weather-app/",
    repoLink: "https://github.com/yamakenth/weather-app",
  },
  {
    name: "Calculator",
    summary: "An on-screen calculator with basic arithmetic operations.",
    features: `Supports basic math operations (add, subtract, multiply, divide). Performs pair-wise 
    calculation from left to right disregarding PEMDAS order of operation. Accepts input via 
    on-screen button clicks (keyboard input not yet supported).`,
    technologies: "HTML, CSS, JavaScript",
    demoGif: calculatorGif,
    demoLink: "https://yamakenth.github.io/calculator/",
    repoLink: "https://github.com/yamakenth/calculator",
  },
  {
    name: "TNW Homepage Clone",
    summary: "A clone of The Next Web's homepage built with reponsive design.",
    features: `Responsive design with 2 break points without the use of CSS framework. Use of 
    animation to provide user feedback.`,
    technologies: "HTML, CSS",
    demoGif: tnwHomepageCloneGif,
    demoLink: "https://yamakenth.github.io/tnw-homepage-clone/",
    repoLink: "https://github.com/yamakenth/tnw-homepage-clone",
  },
];

export default function Projects(): JSX.Element {
  return (
    <section id="projects" className="bg-neutral-50">
      <div className="container py-16">
        <h2 className="mb-5">Projects</h2>
        <Carousel projects={PROJECTS} />
      </div>
    </section>
  );
}
