import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { contactData as data } from "../data/contact-data.js";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content">Contact</h1>
        {[data].map((dataIn) => {
          return (
            <div className="row-container">
              
              <div>
                {dataIn.text.map((textIn) => (
                  <p className="text-content">{textIn.line}</p>
                ))}
                <p className="text-content">
                  Email: 
                  <Link
                    to="#"
                    onClick={(e) => {
                      window.location = "mailto:" + dataIn.email;
                      e.preventDefault();
                    }}
                  >
                    {dataIn.email}
                  </Link>
                </p>
              </div>
              <div style={{alignContent: "right"}}>
                <img
                  width="300"
                  src={process.env.PUBLIC_URL + dataIn.image.src}
                  alt={dataIn.image.caption}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
