import React from 'react';
import { Link } from 'react-router-dom';

import "../../css/PeopleCards.css";

function PeopleCard(props) {
  return (
    <>
      <li className='people_cards_item'>
        <Link className='people_cards_item_link' to={props.path}>
          <figure className='people_cards_item_pic-wrap'>
            <img
              className='people_cards_item_img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='people_cards_item_info'>
            <h4 className='people_cards_item_text'>{props.name}</h4>
            <h5 className='people_cards_item_caption'>{props.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default PeopleCard;