import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const Card = props => (
  <div>
    <Header titulo={props.titulo} />
    <Content urlImg={props.urlImg} texto={props.texto} />
    <Footer btn1Txt={props.buttons[0]} btn2Txt={props.buttons[1]} />
  </div>
)

Card.defaultProps = {
  titulo: 'React Mola',
  urlImg: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
  texto: 'React es una librería ...',
  buttons: ['+Info', 'Fav']
}

export default Card;