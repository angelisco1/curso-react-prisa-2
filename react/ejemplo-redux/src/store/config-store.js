import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import listaTareasReducer from './lista-tareas';

export default function configStore() {
  //const reducer = combineReducers(listaTareasReducer)

  return createStore(listaTareasReducer, applyMiddleware(thunk));
}