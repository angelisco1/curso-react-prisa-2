import React from 'react';
import ReactDOM from 'react-dom';
import ListaTareas from './components/ListaTareas';
import Form from './components/Form';
import Filtro from './components/Filtro';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Form />
        <Filtro />
        <ListaTareas />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
