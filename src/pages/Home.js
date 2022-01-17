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
        <p className='content'>Hi, my name is Tony. This website is currently work in progress. Come back later to check it out!</p>
      </div>
    </>
  )
};

export default Home;