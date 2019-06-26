import React, { Component } from 'react'

export default class Genero extends Component {

  render() {
    const listaPeliculas = this.props.peliculas.map(peli => <li key={peli.id}>{peli.titulo}</li>)

    return (
      <div>
        <h2>{this.props.genero}</h2>
        <ul>
          {listaPeliculas}
        </ul>
      </div>
    )
  }
}
