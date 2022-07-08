import React from "react";
import { Helmet } from "react-helmet";
import data from "../data/home-data.js";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title} </title>
      </Helmet>
      <div className="column-container">
        <div key={data.title}>
          <h1 className="text-content">{data.title}</h1>
          <img src={process.env.PUBLIC_URL + data.image.src} alt={data.image.caption} />
          <div>
            {data.content.map((textIn) => (
              <p className="text-content">{textIn}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
