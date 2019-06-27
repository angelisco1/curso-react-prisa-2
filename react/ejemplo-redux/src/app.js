import React from 'react';
import ReactDOM from 'react-dom';
import ListaTareas from './components/ListaTareas';
import Form from './components/Form';
import Filtro from './components/Filtro';
import configStore from './store/config-store';
import { Provider, connect } from 'react-redux';
import { initTareas } from './store/lista-tareas/actions';

const store = configStore();

class App extends React.Component {
  // constructor(props) {
    // super(props);
    // this.state = {
    //   tareas: []
    // }
  // }

  componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({
  //       tareas: store.getState().listaTareas
  //     })
  //   })
  //   this.setState({
  //     tareas: store.getState().listaTareas
  //   })
    this.props.inicializarEstado();
  }

  render() {
    return (
      <div>
        <h1>Redux</h1>
        {/* <Form store={store} /> */}
        <Form />
        <Filtro />
        {/* <ListaTareas tareas={this.state.tareas} /> */}
        <ListaTareas />
      </div>
    )
  }
}

const mapDispatchToProps = {
  inicializarEstado: initTareas
}

const withProps = connect(null, mapDispatchToProps);
const MiApp = withProps(App);

ReactDOM.render(<Provider store={store}><MiApp /></Provider>, document.getElementById('root'));
