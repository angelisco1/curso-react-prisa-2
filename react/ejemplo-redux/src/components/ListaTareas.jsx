import React, { Component } from 'react'
import Tarea from './Tarea';

export default class ListaTareas extends Component {
  render() {
    const listaTareas = [].map(t => (<Tarea key={t.id} tarea={t} />));
    return (
      <div>
        {listaTareas}
      </div>
    )
  }
}
