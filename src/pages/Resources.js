import React from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Routes, useParams } from "react-router-dom";
import data from "../data/resources-data.js";
import NotFound from "./NotFound.js";



const Resources = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <Routes>
        <Route path=":id" element={<Topic />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};

const Main = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content align-center">Resources</h1>
          <div className="row-container">
            <div>
              {data.content.map((textIn) => {
                return (
                  <div className="resources">
                    <h1 className="text-content">{textIn.text}</h1>
                    {textIn.links.map((textIn2) => {
                      if(textIn2["link"] == null) {
                        return (
                          <a className="text-content links" href={textIn2.href}>{textIn2.text}</a>
                        );
                      } else {
                        return (
                          <Link className="text-content links" to={textIn2.link}>{textIn2.text}</Link>
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
      </div>
    </>
  );
};

function Topic(props) {
  const { id } = useParams();

  if (!data["valid-resources"].includes(id.toLowerCase())) {
    return <NotFound />;
  }

  var topicData = require("../data/stim-sets/" + id + ".js").default;

  return (
    <div className="column-container">
      <h1 className="text-content">{topicData.title}</h1>
      {topicData.content.map((textIn) => (
        <p className="text-content">{textIn}</p>
      ))}
      {topicData.files.map((textIn) => {
        if(textIn.link == null) {
          return (<p className="text-content">{textIn.text}</p>);
        } else {
          return (<a className="text-content links" href={process.env.PUBLIC_URL + textIn.link}>{textIn.text}</a>);
        }
      }
      )}
    </div>
  );
}

export default Resources;
