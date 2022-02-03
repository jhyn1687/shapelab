import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { homeData as data } from "../data/home.js";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title} </title>
      </Helmet>
      <div className="container">
        {[data].map((dataIn) => {
          return (
            <div key={dataIn.title}>
              <h1 className="content">{dataIn.title}</h1>
              <img src={process.env.PUBLIC_URL + dataIn.image.src} alt={dataIn.image.caption} />
              <div>
                {dataIn.text.map((textIn) => (
                  <p className="content">{textIn.paragraph}</p>
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
