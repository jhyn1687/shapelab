import React from "react";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router-dom";

import '../css/Cards.css';
import CardItem from '../components/Cards/CardItem';

const Projects = () => {
  return (
    <>
      <Helmet>
        <title>ShapeLAB | Projects</title>
      </Helmet>
      <Routes>
        <Route path=":id" element={<Topic />} />
        <Route path="/" element={<Cards />} />
      </Routes>
    </>
  );
};

function Topic() {
  return (
    <div className="column-container">
      <h1 className="text-content">Projects</h1>
      

      <p className="text-content">test</p>
    </div>
  );
}

function Cards() {
  return (
    <div className='cards'>
      <h1 className="text-content">Projects</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/img-9.jpg'
              text='Short blurb about this project 1'
              label='Ongoing'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Short blurb about this project 2'
              label='Ongoing'
              path='/'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/img-3.jpg'
              text='Short blurb about this project 3'
              label='Completed'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Short blurb about this project 4'
              label='Completed'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Short blurb about this project 5'
              label='Completed'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
