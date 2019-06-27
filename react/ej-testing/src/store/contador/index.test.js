import reducer from './index';
import { INCREMENT, DECREMENT } from './action-types';

describe('Contador reducer', () => {
  it('should return the initial state when is not a valid action', () => {
    expect(reducer(undefined, { type: 'BLABLA' })).toEqual(0);
  });

  it('should return 1 when the reducer recibe an INCREMENT action the first time', () => {
    expect(reducer(undefined, { type: INCREMENT })).toEqual(1);
  });

  it('should return -1 when the reducer recibe an DECREMENT action the first time', () => {
    expect(reducer(undefined, { type: DECREMENT })).toEqual(-1);
  });

  it('should return -2 when the reducer recibe two DECREMENT actions', () => {
    let state = reducer(undefined, { type: DECREMENT });
    expect(state).toEqual(-1);
    state = reducer(state, { type: DECREMENT });
    expect(state).toEqual(-2);
  });
});