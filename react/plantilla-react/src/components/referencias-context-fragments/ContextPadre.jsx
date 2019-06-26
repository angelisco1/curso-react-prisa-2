import React from 'react';
import ContextHijo from './ContextHijo';

export const contextDarkMode = React.createContext();

class ContextPadre extends React.Component {
  constructor() {
    super();
    this.state = {
      darkMode: false
    }
    this.changeDarkMode = this.changeDarkMode.bind(this);
  }

  changeDarkMode() {
    this.setState({
      darkMode: !this.state.darkMode
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.changeDarkMode}>Dark Mode: {this.state.darkMode ? 'activado' : 'desactivado'}</button>
        <contextDarkMode.Provider value={{darkMode: this.state.darkMode, lang: 'es'}}>
          <ContextHijo />
        </contextDarkMode.Provider>
      </div>
    )
  }
}

export default ContextPadre;