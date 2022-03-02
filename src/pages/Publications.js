import React from "react";
import { Helmet } from "react-helmet";
import data from "../data/publications-data.js";

const Publications = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title} </title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content">{data.title}</h1>
        <p className="text-content"></p>
      </div>
    </>
  );
};

export default Publications;
