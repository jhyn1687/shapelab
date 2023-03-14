import React from "react";
import { Helmet } from "react-helmet";
import {NavLink as Link} from 'react-router-dom';
import data from "../data/home-data.js";


const Home = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title} </title>
      </Helmet>
      <div className="column-container">
        <div key={data.title}>
          <h1 className="text-content align-center">{data.title}</h1>
          <img className="banners" src={process.env.PUBLIC_URL + data.image.src} alt={data.image.caption} />
          <div>
            {data.content.map((textIn) => (
              <p className="text-content">{textIn}</p>
            ))}
          </div>
          <div>
            <h3 className="text-content">We currently have positions open, check them out <Link to="/positions">here</Link>.</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
