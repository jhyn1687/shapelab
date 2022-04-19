import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import publicationsData from "../data/publications-data.js";
import reviewsData from "../data/reviews-data.js";

const Publications = () => {
  const [publicationsJson, setPublicationsJson] = useState(0);
  const [reviewsJson, setReviewsJson] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("data/publications-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setPublicationsJson(myJson);

        return fetch("data/reviews-data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
      })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        setReviewsJson(myJson);
        setLoading(false);
      });
  };
  // get current website address and get data from directory
  useEffect(() => {
    getData();
  }, []);

  return loading ? (
    <Wrapper publicationsJson={publicationsData} reviewsJson={reviewsData}/>
  ) : (
    <Wrapper publicationsJson={publicationsJson} reviewsJson={reviewsJson}/>
  );
};

const Wrapper = (props) => {
  let publicationsJson = props.publicationsJson;
  let reviewsJson = props.reviewsJson;
  let ctr = 0;
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {publicationsJson.title} </title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content">{publicationsJson.title}</h1>
        {publicationsJson.publications.map((dataIn) => {
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
        {reviewsJson.publications.map((dataIn) => {
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
