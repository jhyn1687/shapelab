import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import membersData from "../data/members-data.js";

import "../css/PeopleCards.css";
import CardItem from "../components/Cards/PeopleCard";

const Members = () => {
  const [json, setJson] = useState(0);
  const [loading, setLoading] = useState(true);

  const getData = () => {
    fetch("data/members-data.json", {
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
    <Wrapper internalJson={membersData} />
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
        <h1 className="text-content">Members</h1>
        <div
          key={internalJson.title}
          style={{ maxWidth: "800px", alignSelf: "center" }}
        >
          <img
            src={process.env.PUBLIC_URL + internalJson.image.src}
            alt={internalJson.image.caption}
          />
        </div>
      </div>
      <Main />
    </>
  );
};

function Main() {
  return (
    <div className="people_cards">
      <h1 className="text-content">Meet The Team</h1>
      <div className="people_cards_container">
        <div className="people_cards_wrapper">
          <ul className="people_cards_items">
            <CardItem
              src="images/img-3.jpg"
              name="Anitha Pasupathy, Ph.D."
              title="Principal Investigator"
              path="./anitha"
            />
            <CardItem
              src="images/img-2.jpg"
              name="Tomoyuki Namima, Ph.D"
              title="Post-Doctoral Fellow"
              path="./tomo"
            />
            <CardItem
              src="images/img-8.jpg"
              name="Taekjun Kim, Ph.D."
              title="Post-Doctoral Fellow"
              path="./taekjun"
            />
          </ul>
          <ul className="people_cards_items">
            <CardItem
              src="images/img-9.jpg"
              name="Tony Bigelow"
              title="Graduate Student"
              path="./tony-b"
            />
            <CardItem
              src="images/img-4.jpg"
              name="Amber Fyall, M.Sc."
              title="Research Technician"
              path="./amber"
            />
            <CardItem
              src="images/img-3.jpg"
              name="Erin Kempkes"
              title="Research Technician"
              path="./erin"
            />
          </ul>
          <ul className="people_cards_items">
            <CardItem
              src="images/img-4.jpg"
              name="Natalia Owen"
              title="Undergraduate Student"
              path="./natalia"
            />
            <CardItem
              src="images/img-8.jpg"
              name="Tony Yuan"
              title="Undergraduate Student"
              path="./tony-y"
            />
          </ul>
          <Link to="./previous-members">
            <h3 className="text-content" style={{ textAlign: "center" }}>
              Previous Members
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Members;
