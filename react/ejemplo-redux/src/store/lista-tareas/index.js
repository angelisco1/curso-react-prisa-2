import * as ActionTypes from './action-types';

const initialState = {
  listaTareas: [
    { id: -1, nombre: 'Tarea 1', completada: true }
  ],
  nextId: 0,
  filtro: '',
  listaTareasFiltradas: []
}

function addTarea(state, tarea) {
  const nuevaListaTareas = [
    ...state.listaTareas,
    {
      ...tarea,
      id: state.nextId
    }
  ]
  return {
    ...state,
    listaTareas: nuevaListaTareas,
    nextId: state.nextId + 1
  }
}

export default function listaTareas(state = initialState, action) {
  console.log('Reducer: ', action);
  switch(action.type) {
    case ActionTypes.CREAR_TAREA:
      return addTarea(state, action.payload);
    case ActionTypes.BORRAR_TAREA:
      return state;
    case ActionTypes.EDITAR_TAREA:
      return state;
    case ActionTypes.FILTRAR_TAREA:
      return state;
    default:
      return state;
  }
}