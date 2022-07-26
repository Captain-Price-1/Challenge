import { React, useState } from "react";
import BootstrapCarousel from "./BootstrapCarousel";
import BasicExample from "./ProjectsCards";
import ProjectsData from "./ProjectsData";
import FeedbackForm from "./FeedbackForm";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./Blogs";

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
