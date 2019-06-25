import React from 'react';

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 2
    }
    this.decrementar = this.decrementar.bind(this);
    this.incrementar = this.incrementar.bind(this);
  }

  decrementar() {
    console.log('DECREMENTAR!');
    this.setState({
      cuenta: this.state.cuenta - 1
    })
  }

  incrementar() {
    console.log('INCREMENTAR!');
    this.setState({
      cuenta: this.state.cuenta + 1
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.decrementar}>-</button>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button" onClick={this.incrementar}>+</button>
      </div>
    )
  }
}

export default Contador;