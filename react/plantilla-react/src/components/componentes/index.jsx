import React from 'react';
import Saludo from './Saludo';
import SaludoFunc from './SaludoFunc';

class Componentes extends React.Component {
  render() {
    return (
      <div>
        <h1>Componentes</h1>
        <Saludo />
        <Saludo nombre="Angel" />
        <Saludo nombre="Charly" />
        <SaludoFunc nombre="Mundo" />
      </div>
    )
  }
}

export default Componentes;