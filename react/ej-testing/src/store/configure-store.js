import { createStore, combineReducers } from 'redux';
import contador from './contador';

export default function configureStore() {
  const appReducer = combineReducers({
    contador
  });
  return createStore(appReducer);
}
