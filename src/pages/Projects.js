import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes, useParams } from "react-router-dom";
import data from "../data/projects-data.js";
import Cards from "./ProjectCards";
import NotFound from "./NotFound.js";

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

  if(!data["valid-projects"].includes(id)) {
    return <NotFound />;
  }
  
  var topicData = require('../data/projects/' + id + '.js').default;
  console.log(topicData);

  return (
    <div className="column-container">
      
      <h1 className="text-content">{topicData.title}</h1>

      <p className="text-content">test</p>
    </div>
  );
}

function isValidID(id) {
  if(data["valid-projects"].includes(id)) {
    return true;
  } else {
    return false;
  }
}


export default Projects;
