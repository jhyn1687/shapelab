import React from "react";
import { Helmet } from "react-helmet";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useMatch,
} from "react-router-dom";

const Members = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | Members</title>
      </Helmet>
      <Routes>
        <Route path=":id" element={<Home />} />
        <Route path="/" element={<Projects />} />
      </Routes>
    </>
  );
};

function Topic() {
  return (
    <div className="container">
      <h1 className="content">Members</h1>

      <p className="content">test</p>
    </div>
  );
}
export default Members;
