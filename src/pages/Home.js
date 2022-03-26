import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import homeData from "../data/home-data.js";


const Home = () => {
  const [json, setJson] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("data/home-data.json", {
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
    <Wrapper internalJson={homeData} />
  ) : (
    <Wrapper internalJson={json} />
  );
};

const Wrapper = (props) => {
  let internalJson = props.internalJson;
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {internalJson.title} </title>
      </Helmet>
      <div className="column-container">
        <div key={internalJson.title}>
          <h1 className="text-content">{internalJson.title}</h1>
          <img
            src={process.env.PUBLIC_URL + internalJson.image.src}
            alt={internalJson.image.caption}
          />
          <div>
            {internalJson.content.map((textIn) => (
              <p className="text-content">{textIn}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
