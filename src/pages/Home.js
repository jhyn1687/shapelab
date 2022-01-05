import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Tony Yuan | Home</title>
      </Helmet>
      <div className='container'>
        <h1 className='content'>Home</h1>
      </div>
    </>
  )
};

export default Home;