import React, { useState } from "react";
import { Helmet } from "react-helmet";
import data from "../data/home-data.js";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title} </title>
      </Helmet>
      <div className="column-container">
        {[data].map((dataIn) => {
          return (
            <div key={dataIn.title}>
              <h1 className="text-content">{dataIn.title}</h1>
              <img src={process.env.PUBLIC_URL + dataIn.image.src} alt={dataIn.image.caption} />
              <div>
                {dataIn.content.map((textIn) => (
                  <p className="text-content">{textIn}</p>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
