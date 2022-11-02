import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import data from "../data/contact-data.js";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content align-center">Contact</h1>
          <div className="row-container">
            <div>
              {data.content.map((textIn) => (
                <p className="text-content">{textIn}</p>
              ))}
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
            <div style={{alignContent: "right"}}>
              <img
                width="300"
                src={process.env.PUBLIC_URL + data.image.src}
                alt={data.image.caption}
              />
            </div>
          </div>
      </div>
    </>
  );
};

export default Contact;
