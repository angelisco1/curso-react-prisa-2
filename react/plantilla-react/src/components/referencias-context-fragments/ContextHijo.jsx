import React from 'react';
import { contextDarkMode } from './ContextPadre';

const ContextHijo = props => {
  return (
    <contextDarkMode.Consumer>
      {
        (miObjeto) => {
          console.log(miObjeto.lang)
          const styles = {
            color: miObjeto.darkMode ? 'white' : 'black',
            backgroundColor: miObjeto.darkMode ? 'black' : 'white',
          }
          return (
            <div>
              <p style={styles}>Un párrafo</p>
            </div>
          )
        }
      }
    </contextDarkMode.Consumer>
  )
}

export default ContextHijo;