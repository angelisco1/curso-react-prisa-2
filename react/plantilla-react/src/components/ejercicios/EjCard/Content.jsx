import React from 'react';

const Content = props => (
  <div>
    <img width="100" src={props.urlImg} alt="Imagen del Card" />
    <p>{props.texto}</p>
  </div>
)

export default Content;