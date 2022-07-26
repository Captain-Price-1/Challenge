import Carousel from "react-bootstrap/Carousel";
import { React, useState } from "react";
import BootstrapCarousel from "./BootstrapCarousel";
import BasicExample from "./ProjectsCards";
import ProjectsData from "./ProjectsData";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeedbackForm from "./FeedbackForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./Blogs";
const slide1 = require("../src/images/react_dev.png");
const slide2 = require("../src/images/competitive_coder.png");
const slide3 = require("../src/images/tech-enthusiast.png");

function App() {
  return (
    <>
      <h1>My Challenge</h1>
      <BootstrapCarousel />
      <h1>My Projects</h1>
      <div className="grid">
        {ProjectsData.map((item) => {
          const { id, name, img, category, url, info } = item;
          return <BasicExample item={item} key={id} />;
        })}
      </div>
      <h1>Blogs</h1>
      <div className="grid">
        <Blogs />
      </div>
      <FeedbackForm />
    </>
  );
}

export default App;
