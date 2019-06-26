import React from 'react';
import CajaColor from './CajaColor';
import CuentaAtras from './CuentaAtras';

class CicloVidaCmp extends React.Component {
  constructor() {
    super();
    this.state = {
      num: 1
    }
  }

  render() {
    return (
      <div>
        <h1>Ciclo de vida</h1>
        <CajaColor num={this.state.num} />
      </div>
    )
  }
}

export default CicloVidaCmp;