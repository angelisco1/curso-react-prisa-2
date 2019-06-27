import * as ActionTypes from './action-types';

function crearTarea(tarea) {
  return {
    type: ActionTypes.CREAR_TAREA,
    payload: tarea
  }
}

function borrarTarea(idTarea) {
  return {
    type: ActionTypes.BORRAR_TAREA,
    payload: idTarea
  }
}

function editarTarea(tarea) {
  return {
    type: ActionTypes.EDITAR_TAREA,
    payload: tarea
  }
}

function filtrarTareas(texto) {
  return {
    type: ActionTypes.FILTRAR_TAREA,
    payload: texto
  }
}

export { crearTarea, borrarTarea, editarTarea, filtrarTareas };