import React from 'react';
import { Helmet } from 'react-helmet';
import { BiError as Error } from 'react-icons/bi';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | 404</title>
      </Helmet>
      <div className="column-container">
        <h1 className="text-content"><Error /> 404 Error!</h1>
        <h2 className="text-content">Page Not Found~</h2>
        
      </div>
    </>
  );
};

export default NotFound;