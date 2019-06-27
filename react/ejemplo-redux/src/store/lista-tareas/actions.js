import * as ActionTypes from './action-types';

function initTareas() {
  return (dispatch) => {
    fetch('https://todo-list-603ba.firebaseio.com/mis-tareas.json')
      .then(resp => resp.json())
      .then(tareas => {
        const listaTareas = []
        for (let id in tareas) {
          listaTareas.push({id: id, ...tareas[id]})
        }
        dispatch(crearActionInit(listaTareas));
      })
  }
}

function crearActionInit(tareas) {
  return {
    type: ActionTypes.INICIALIZAR_TAREAS,
    payload: tareas
  }
}

function crearTarea(tarea) {
  return (dispatch) => {
    fetch('https://todo-list-603ba.firebaseio.com/mis-tareas.json', {
      method: 'POST',
      body: JSON.stringify(tarea)
    })
      .then(resp => resp.json())
      .then(datos => {
        const id = datos.name;
        const nuevaTarea = {...tarea, id: id};
        dispatch(crearActionTarea(nuevaTarea));
      })
  }
}

function crearActionTarea(tarea) {
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

export { crearTarea, borrarTarea, editarTarea, filtrarTareas, initTareas };