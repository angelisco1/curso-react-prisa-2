import React from 'react';
import ReactDOM from 'react-dom';
import Componentes from './components/componentes/index';

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <h1>Hola mundo!</h1> */}
        <Componentes/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
