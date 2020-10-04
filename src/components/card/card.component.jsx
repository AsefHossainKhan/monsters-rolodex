import React from "react";

import "./card.styles.css";

export const Card = props => (
  <div className='card-container'>
    <img src={`https://robohash.org/${props.eachMonster.id}?set=set2&size=200x200`} alt="monster"/>
    <h1> {props.eachMonster.name} </h1>
    <p> {props.eachMonster.email} </p>
  </div>
);
