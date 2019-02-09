import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
  <li className="listItem__wrapper">
    <img src={props.image} className="listItem__image" />
    <div>
      <h2 className="listItem__name">{props.name}</h2>
      <p className="listItem__description">{props.description}</p>
      <button className="listItem__button">Visit twitter page</button>
    </div>
  </li>
);

export default ListItem;
