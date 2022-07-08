import React from "react";
import { Helmet } from "react-helmet";
import publicationsData from "../data/publications-data.js";
import reviewsData from "../data/reviews-data.js";

const Publications = () => {
  let ctr = 0;
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {publicationsData.title} </title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content">{publicationsData.title}</h1>
        {publicationsData.publications.map((dataIn) => {
          return (
            <p
              className="text-content"
              style={ctr++ % 2 === 0 ? { backgroundColor: "#D4E6ED" } : {}}
            >
              {dataIn.author}{" "}
              <a href={process.env.PUBLIC_URL + dataIn.link}>{dataIn.title}</a>{" "}
              {dataIn.journal}
            </p>
          );
        })}
        <h1 className="text-content">{reviewsData.title}</h1>
        {reviewsData.publications.map((dataIn) => {
          return (
            <p
              className="text-content"
              style={ctr++ % 2 === 0 ? { backgroundColor: "#D4E6ED" } : {}}
            >
              {dataIn.author}{" "}
              <a href={process.env.PUBLIC_URL + dataIn.link}>{dataIn.title}</a>{" "}
              {dataIn.journal}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Publications;
