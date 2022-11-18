import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useParams } from "react-router-dom";
import data from "../data/projects-data.js";
import NotFound from "./NotFound.js";

import "../css/ProjectCards.css";
import CardItem from "../components/Cards/ProjectCard";
import { textAlign } from "@mui/system";

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
  //This is hard coded in for now, because it's very convoluted to
  //have dynamically different sized rows and store captions

  return (
    <div className="cards">
      <h1 className="text-content align-center">Projects</h1>
      <div className="cards_container">
        <div className="cards_wrapper">
          <ul className="cards_items">
            <CardItem
              src="images/partial-occlusion.png"
              text="Processing Under Partial Occlusion"
              path="./partial-occlusion"
            />
            <CardItem
              src="images/dynamic-visual-stimuli.gif"
              text="Encoding Dynamic Visual Stimuli"
              path="./dynamic-visual-stimuli"
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

function Topic() {
  const { id } = useParams();

  if (!data["valid-projects"].includes(id.toLowerCase())) {
    return <NotFound />;
  }

  var topicData = require("../data/projects/" + id + ".js").default;

  let ctr = 0;

  return (
    <div className="column-container">
      <h1 className="text-content align-center">{topicData.title}</h1>

      {topicData.content.map((textIn) => {
        switch (textIn.type) {
          case "text":
            return <p className={"text-content projects " + textIn.class}>{textIn.value}</p>;
          case "link":
            return (
              <a className="text-content projects" href={textIn.value.link}>
                {textIn.value.text}
              </a>
            );
          case "image":
            return (
              <div className="align-center">
              <img style={{
                width:"60%"
              }}
              src={process.env.PUBLIC_URL + textIn.value.src}
              alt={textIn.value.caption} />
              </div>
            )
          case "publication":
            return (
              <p
                className="text-content projects"
                style={ctr++ % 2 === 0 ? { backgroundColor: "#D4E6ED" } : {}}
              >
                {textIn.value.author} <a href={textIn.value.link}>{textIn.value.title}</a>{" "}
                {textIn.value.journal}
              </p>
            );
          default:
            return <p className="text-content projects">{textIn.value}</p>;
        }
      })}
    </div>
  );
}

export default Projects;
