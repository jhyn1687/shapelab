import React from "react";
import { Helmet } from "react-helmet";
import data from "../data/members-data.js";

const Members = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>

      <div className="column-container">
        <h1 className="text-content">Members</h1>
        {[data].map((dataIn) => {
          return (
            <div key={dataIn.title} style={{maxWidth: '800px', alignSelf: 'center',}}>
              <img
                src={process.env.PUBLIC_URL + dataIn.image.src}
                alt={dataIn.image.caption}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Members;
