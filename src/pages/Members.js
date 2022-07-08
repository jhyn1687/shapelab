import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
        <h1 className="text-content">Members</h1>
        <div
          key={data.title}
          style={{ maxWidth: "800px", alignSelf: "center" }}
        >
          <img
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
      <h1 className="text-content">Meet The Team</h1>
      <div className="people_cards">
        <div className="people_cards_container">
          <div className="people_cards_wrapper">
            <ul className="people_cards_items">
              <CardItem
                src={process.env.PUBLIC_URL + "/images/anitha.gif"}
                name="Anitha Pasupathy, Ph.D."
                title="Principal Investigator"
                path="./anitha"
              />
              <CardItem
                src={process.env.PUBLIC_URL + "/images/tomo.png"}
                name="Tomoyuki Namima, Ph.D"
                title="Post-Doctoral Fellow"
                path="./tomo"
              />
              
            </ul>
            <ul className="people_cards_items">
              <CardItem
                src={process.env.PUBLIC_URL + "/images/taekjun.jpg"}
                name="Taekjun Kim, Ph.D."
                title="Post-Doctoral Fellow"
                path="./taekjun"
              />
              <CardItem
                src={process.env.PUBLIC_URL + "/images/tony-b.jpg"}
                name="Tony Bigelow"
                title="Graduate Student"
                path="./tony-b"
              />
              
            </ul>

            <ul className="people_cards_items">
            <CardItem
                src= {process.env.PUBLIC_URL + "/images/amber.jpg"}
                name="Amber Fyall, M.Sc."
                title="Research Technician"
                path="./amber"
              />
              <CardItem
                src={process.env.PUBLIC_URL + "/images/scientist.jpg"}
                name="Erin Kempkes"
                title="Research Technician"
                path="./erin"
              />
              </ul>
            <ul className="people_cards_items">
              <CardItem
                src={process.env.PUBLIC_URL + "/images/scientist.jpg"}
                name="Natalia Owen"
                title="Undergraduate Student"
                path="./natalia"
              />
              <CardItem
                src={process.env.PUBLIC_URL + "/images/scientist.jpg"}
                name="Tony Yuan"
                title="Undergraduate Student"
                path="./tony-y"
              />
            </ul>
          </div>
        </div>
      </div>
      
      <Link to="./previous-members">
        <h3 className="text-content" style={{ textAlign: "center" }}>
          Previous Members
        </h3>
      </Link>
    </>
  );
}

export default Members;
