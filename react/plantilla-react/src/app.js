import React from 'react';
import ReactDOM from 'react-dom';
import Componentes from './components/componentes/index';
import EstadosEventos from './components/estados-eventos/index';
import ListaCards from './components/ejercicios/EjCard/ListaCards';
import Formularios from './components/formularios';
import './styles/style.css';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Hola mundo!</h1> */}
        {/* <Componentes /> */}
        {/* <EstadosEventos /> */}
        <ListaCards />
        {/* <Formularios /> */}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
