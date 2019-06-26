import React from 'react';

const Card = props => (
  <div className="card">
    {props.children[0]}
    {props.children[1]}
    {props.children[2]}
  </div>
)

export default Card;