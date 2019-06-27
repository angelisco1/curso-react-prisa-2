import React from 'react';
import ReactDOM from 'react-dom';
import ListaTareas from './components/ListaTareas';
import Form from './components/Form';
import Filtro from './components/Filtro';
import configStore from './store/config-store';
import { Provider } from 'react-redux';

const store = configStore();

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     tareas: []
  //   }
  // }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({
  //       tareas: store.getState().listaTareas
  //     })
  //   })
  //   this.setState({
  //     tareas: store.getState().listaTareas
  //   })
  // }

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

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
