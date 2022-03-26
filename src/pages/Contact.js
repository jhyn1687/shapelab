import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import contactData from "../data/contact-data.js";

const Contact = () => {
  const [json, setJson] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("data/contact-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setJson(myJson);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Wrapper internalJson={contactData} />
  ) : (
    <Wrapper internalJson={json} />
  );
};

const Wrapper = (props) => {
  let internalJson = props.internalJson;

  return (
    <>
      <Helmet>
        <title>ShapeLAB | {internalJson.title}</title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content">Contact</h1>
        <div className="row-container">
          <div>
            {internalJson.content.map((textIn) => (
              <p className="text-content">{textIn}</p>
            ))}
            <p className="text-content">
              Email:&nbsp;
              <Link
                to="#"
                onClick={(e) => {
                  window.location = "mailto:" + internalJson.email;
                  e.preventDefault();
                }}
              >
                {internalJson.email}
              </Link>
            </p>
          </div>
          <div style={{ alignContent: "right" }}>
            <img
              width="300"
              src={process.env.PUBLIC_URL + internalJson.image.src}
              alt={internalJson.image.caption}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
