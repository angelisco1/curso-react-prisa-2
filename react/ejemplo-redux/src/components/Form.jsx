import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" />
        </div>
        <div>
          <label htmlFor="completada">Completada:</label>
          <input type="checkbox" id="completada" />
        </div>
        <button type="button">Guardar</button>
      </form>
    )
  }
}
