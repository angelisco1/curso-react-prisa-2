import { INCREMENT, DECREMENT } from './action-types';
import { incrementCount, decrementCount } from './actions';

describe('Contador actions', () => {
  it('should return an object with the INCREMENT action type', () => {
    expect(incrementCount()).toEqual({ type: INCREMENT });
  });

  it('should return an object with the DECREMENT action type', () => {
    expect(decrementCount()).toEqual({ type: DECREMENT });
  });
});