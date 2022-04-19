import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useParams } from "react-router-dom";
import projectData from "../data/projects-data.js";
import NotFound from "./NotFound.js";

import "../css/ProjectCards.css";
import CardItem from "../components/Cards/ProjectCard";

const Projects = () => {
  const [json, setJson] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("data/projects-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setJson(myJson);
        setLoading(false);
      });
  };
  // get current website address and get data from directory
  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Wrapper internalJson={projectData} />
  ) : (
    <Wrapper internalJson={json} />
  );
};

const Wrapper = (props) => {
  let internalJson = props.internalJson;
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {internalJson.title}</title>
      </Helmet>
      <Routes>
        <Route path=":id" element={<Topic internalJson={internalJson}/>} />
        <Route path="/" element={<Main internalJson={internalJson}/>} />
      </Routes>
    </>
  );
};

function Main(props) {
  let internalJson = props.internalJson;
  return (
    <div className="cards">
      <h1 className="text-content">Projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/dynamic-visual-stimuli.gif"
              text="Encoding Dynamic Visual Stimuli"
              path="./dynamic-visual-stimuli"
            />
            <CardItem
              src="images/partial-occlusion.png"
              text="Processing Under Partial Occlusion"
              path="./partial-occlusion"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/shape-and-texture.png"
              text="Encoding Visual Shape and Texture"
              path="./shape-and-texture"
            />
            <CardItem
              src="images/multiphoton-imaging.png"
              text="Multiphoton Imaging"
              path="./multiphoton-imaging"
            />
            <CardItem
              src="images/pertubation-methods.png"
              text="Perturbation Methods"
              path="./pertubation-methods"
            />
          </ul>
          <ul className="cards_items">
            <CardItem
              src="images/clutter-and-crowding.png"
              text="Clutter and Crowding"
              path="./clutter-and-crowding"
            />
            <CardItem
              src="images/object-segmentation.png"
              text="Object Segmentation"
              path="./object-segmentation"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

function Topic(props) {
  const { id } = useParams();
  let internalJson = props.internalJson;

  if (!internalJson["valid-projects"].includes(id.toLowerCase())) {
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
