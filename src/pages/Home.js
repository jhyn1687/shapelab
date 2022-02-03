import React from "react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | Home</title>
      </Helmet>
      <div className="container">
        <h1 className="content">Home</h1>
        <p className="content">
          Our lab investigates the neural basis of visual shape representation
          and recognition. Our focus is area V4, an intermediate stage in the
          shape processing pathway in primates.
        </p>
        <p className="content">
          We use a combination of single-cell neurophysiology experiments,
          behavioral manipulations and computational modeling to address
          questions about how visual stimuli are represented in the brain, how
          these representations arise and how they ultimately underlie behavior.
        </p>
        <p className="content">
          We are a part of the Department of Biological Structure at the
          University of Washington in Seattle, WA. For further details about our
          research, see Publications or contact Anitha Pasupathy.
        </p>
        <p className="content">
          If you are interested in joining our team, check the Positions and
          Contact tab.
        </p>
      </div>
    </>
  );
};

export default Home;
