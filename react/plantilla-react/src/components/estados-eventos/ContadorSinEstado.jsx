import React from 'react';

class ContadorSinEstado extends React.Component {
  constructor(props) {
    super(props);
    this.decrementar = this.decrementar.bind(this);
    this.incrementar = this.incrementar.bind(this);
  }

  decrementar() {
    console.log('DECREMENTAR!');
    this.props.onHandleDecrementar();
  }

  incrementar() {
    console.log('INCREMENTAR!');
    this.props.onHandleIncrementar();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <span>Cuenta: {this.props.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
      </div>
    )
  }
}

export default ContadorSinEstado;