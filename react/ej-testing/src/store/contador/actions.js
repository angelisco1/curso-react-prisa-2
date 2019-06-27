import { INCREMENT, DECREMENT } from './action-types';

export function incrementCount() {
  return {
    type: INCREMENT
  }
}

export function decrementCount() {
  return {
    type: DECREMENT
  }
}