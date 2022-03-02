import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useParams } from "react-router-dom";
import data from "../data/projects-data.js";
import NotFound from "./NotFound.js";

import "../css/Cards.css";
import CardItem from "../components/Cards/CardItem";

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <Routes>
        <Route path=":id" element={<Topic />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

function Main() {
  return (
    <div className="cards">
      <h1 className="text-content">Projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/img-9.jpg"
              text="Encoding Visual Shape and Texture"
              path="./shape-and-texture"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/img-3.jpg"
              text="Perturbation Methods"
              path="./pertubation-methods"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Multiphoton Imaging"
              path="./multiphoton-imaging"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Clutter and Crowding"
              path="./clutter-and-crowding"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Object Segmentation"
              path="./object-segmentation"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/img-3.jpg"
              text="Encoding Dynamic Visual Stimuli"
              path="./dynamic-visual-stimuli"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Processing Under Partial Occlusion"
              path="./partial-occlusion"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function Topic() {
  const { id } = useParams();

  if (!data["valid-projects"].includes(id.toLowerCase())) {
    return <NotFound />;
  }

  var topicData = require("../data/projects/" + id + ".js").default;

  return (
    <div className="column-container">
      <h1 className="text-content">{topicData.title}</h1>

      {topicData.content.map((textIn) => (
        <p className="text-content">{textIn}</p>
      ))}
    </div>
  );
}

export default Projects;
