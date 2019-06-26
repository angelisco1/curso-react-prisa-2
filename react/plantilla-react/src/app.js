import React from 'react';
import ReactDOM from 'react-dom';
import Componentes from './components/componentes/index';
import EstadosEventos from './components/estados-eventos/index';
import ListaCards from './components/ejercicios/EjCard/ListaCards';
import Formularios from './components/formularios';
import CicloVidaCmp from './components/ciclo-vida';
import LayoutCmp from './components/layouts';
import './styles/style.css';
import './styles/card.scss';
import RefsCtxFragments from './components/referencias-context-fragments';
import MiCV from './components/ejercicios/EjCV';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Hola mundo!</h1> */}
        {/* <Componentes /> */}
        {/* <EstadosEventos /> */}
        {/* <ListaCards /> */}
        {/* <Formularios /> */}
        {/* <CicloVidaCmp /> */}
        {/* <LayoutCmp /> */}
        {/* <RefsCtxFragments /> */}
        <MiCV />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
