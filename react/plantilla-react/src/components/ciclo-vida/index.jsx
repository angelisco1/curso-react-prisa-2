import React from 'react';
import CajaColor from './CajaColor';
import CuentaAtras from './CuentaAtras';

class CicloVidaCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1,
      mostrar: true
    }
  }

  render() {
    const { num, mostrar } = this.state;
    return (
      <div>
        <h1>Ciclo de vida</h1>
        <button type="button"
          onClick={
            () => {
              this.setState({mostrar: !mostrar})
            }
          }>Cambiar mostrar: {mostrar ? 'T' : 'F'}</button>
        {/* <button type="button" onClick={() => {this.setState({num: num - 1})}}>-</button>
        <span>{num}</span>
        <button type="button" onClick={() => {this.setState({num: num + 1})}}>+</button> */}
        {/* <CajaColor num={this.state.num} /> */}
        {/* <CajaColor num={num} /> */}
        {mostrar ? <CuentaAtras /> : null}
      </div>
    )
  }
}

export default CicloVidaCmp;