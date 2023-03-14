import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import data from "../data/positions-data.js";

const Positions = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content align-center">{data.title}</h1>
          <div className="row-container">
            <div>
              {data.content.map((textIn) => {
                if(textIn.style === "heading") {
                  return (<h2 className="text-content">{textIn.text}</h2>)
                } else {
                  return (<p className="text-content">{textIn.text}</p>)
                }
              }
              )}
              <p className="text-content">
                Email:&nbsp; 
                <Link
                className="links"
                to="#"
                onClick={(e) => {
                  window.location = "mailto:" + data.email;
                  e.preventDefault();
                }}
              >
                {data.email}
              </Link>
              </p>
              
            </div>
          </div>
      </div>
    </>
  );
};

export default Positions;
