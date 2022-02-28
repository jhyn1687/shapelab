import React from 'react';
import '../css/Cards.css';
import CardItem from '../components/Cards/CardItem';

function ProjectCards() {
  return (
    <div className='cards'>
      <h1 className="text-content">Projects</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src='images/img-9.jpg'
              text='Encoding visual shape and texture'
              path='/'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Processing under partial occlusion'
              path='/'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/img-3.jpg'
              text='Encoding dynamic visual stimuli'
              path='/'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Clutter and crowding'
              path='/'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Object segmentation'
              path='/'
            />
          </ul>
          <ul className='cards_items'>
            <CardItem
              src='images/img-3.jpg'
              text='Perturbation methods'
              path='./project1'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Multiphoton imaging'
              path='./'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;