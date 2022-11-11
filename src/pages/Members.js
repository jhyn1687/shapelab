import React from "react";
import { Helmet } from "react-helmet";
import data from "../data/members-data.js";

import "../css/PeopleCards.css";
import CardItem from "../components/Cards/PeopleCard";

const Members = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | {data.title}</title>
      </Helmet>

      <div className="column-container">
        <h1 className="text-content align-center">Members</h1>
        <div
          key={data.title}
          style={{ maxWidth: "800px", alignSelf: "center" }}
        >
          <img
            className="banners"
            src={process.env.PUBLIC_URL + data.image.src}
            alt={data.image.caption}
          />
        </div>
      </div>
      <Main />
    </>
  );
};

function Main() {
  return (
    <>
      <h1 className="text-content align-center">Meet The Team</h1>
      <div className="people_cards">
        <div className="people_cards_container">
          <div className="people_cards_wrapper">
            {data.members.map((dataIn) => {
              return (
                <ul className="people_cards_items">
                  {dataIn.map((dataIn2) => {
                    return (
                      <CardItem
                        key={dataIn2.name}
                        src={dataIn2.src}
                        name={dataIn2.name}
                        title={dataIn2.title}
                        blurb={dataIn2.blurb}
                      />
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </div>
      </div>

      <h1 className="text-content align-center">Previous Members</h1>
      <div className="people_cards">
        <div className="people_cards_container">
          <div className="people_cards_wrapper">
            {data.previousMembers.map((dataIn) => {
              return (
                <>
                  <h2 className="text-content align-center">{dataIn.classification}</h2>
                  <ul>
                    {dataIn.people.map((dataIn2) => {
                      return (
                        <h4 className="text-content align-center">
                          {dataIn2.name}; {dataIn2.caption}
                        </h4>
                      );
                    })}
                  </ul>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Members;
