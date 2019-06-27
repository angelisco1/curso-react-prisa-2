import { createStore, combineReducers } from 'redux';
import listaTareasReducer from './lista-tareas';

export default function configStore() {
  //const reducer = combineReducers(listaTareasReducer)

  return createStore(listaTareasReducer);
}