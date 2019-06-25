import React from 'react';
import Contador from './Contador';
import ContadorSinEstado from './ContadorSinEstado';
import Cuenta from './Cuenta';
import EventSwitchCmp from './EventSwitch';

class EstadosEventos extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
    this.decrementar = this.decrementar.bind(this);
    this.incrementar = this.incrementar.bind(this);
  }

  decrementar() {
    console.log('DECREMENTAR!');
    this.setState({
      count: this.state.count - 1
    })
  }

  incrementar() {
    console.log('INCREMENTAR!');
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>Estados y Eventos</h1>
        {/* <Contador /> */}
        {/* <hr/>
        <ContadorSinEstado
          cuenta={this.state.count}
          onHandleIncrementar={this.incrementar}
          onHandleDecrementar={this.decrementar} />
        <Cuenta cuenta={this.state.count} />
        <hr/> */}
        <EventSwitchCmp />
      </div>
    )
  }
}

export default EstadosEventos;