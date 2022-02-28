import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useParams } from "react-router-dom";
import { projectsData as data } from "../data/projects-data.js";
import Cards from "./ProjectCards";

import '../css/Cards.css';
import CardItem from '../components/Cards/CardItem';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <Routes>
        <Route path=":id" element={<Topic />} />
        <Route path="/" element={<Cards />} />
      </Routes>
    </>
  );
};

function Topic() {
  const {id} = useParams();
  let topicData =
  import(id + '.json').then();

  return (
    <div className="column-container">
      <h1 className="text-content">Projects</h1>
      

      <p className="text-content">test</p>
    </div>
  );
}


export default Projects;
