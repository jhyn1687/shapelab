import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | 404</title>
      </Helmet>
      <div className="container">
        <h1 className="content">Page Not Found!</h1>
      </div>
    </>
  );
};

export default NotFound;