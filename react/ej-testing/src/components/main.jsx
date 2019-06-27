import React from 'react';
import InfoUsuario from './info-usuario/info-usuario';
import ListaCompra from './lista-compra/lista-compra';
import Contador from './contador/contador';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      productos: [
        { id: 0, nombre: 'One Plus 5T', checked: true },
        { id: 1, nombre: 'Funda One Plus', checked: false },
        { id: 2, nombre: 'SD 64GB', checked: false }
      ],
      // logueado: false
      logueado: true
    }
  }
  
  render() {
    const usuario = this.state.logueado ? 'Ramsay Bolton' : null;
    return (
      <div>
        <InfoUsuario logueado={ this.state.logueado } usuario={ usuario } />
        <ListaCompra logueado={ this.state.logueado } productos={ this.state.productos }  />
        <Contador />
      </div>
    );
  }
};

export default Main;