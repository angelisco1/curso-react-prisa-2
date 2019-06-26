import React, { Component } from 'react'
import Card from '../ejercicios/EjCard/Card';
import withHover from './HoveredCmp';
import withDatos from './ConDatos';
import Genero from './Genero';
import Loader from './Loader';

export default class HocsCmp extends Component {


  render() {

    const CardHover = withHover(Card);
    const GeneroConDatos = withDatos(Genero, Loader);

    return (
      <div>
        <h1>Higher Order Components (HOC)</h1>
        <GeneroConDatos genero="action" />
        {/* <GeneroConDatos genero="sci-fi" />
        <GeneroConDatos genero="infantil" /> */}
        <CardHover titulo="Otro titulo" />
      </div>
    )
  }
}
