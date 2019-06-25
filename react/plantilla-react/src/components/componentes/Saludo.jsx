import React from 'react';
import PropTypes from 'prop-types';

class Saludo extends React.Component {
  render() {
    return (
      <p>Hola {this.props.nombre}!!!</p>
    )
  }
}

Saludo.defaultProps = {
  nombre: 'Sandra',
}

Saludo.propTypes = {
  nombre: PropTypes.string.isRequired
}

export default Saludo;