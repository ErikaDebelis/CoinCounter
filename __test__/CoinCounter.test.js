import { coinCounter } from '../src/js/CoinCounter.js';

describe('coinCounter', () => {
  test('it takes in a dollar amount and should return a string stating the dollar amount broken up into change', () => {
    const changeResult = coinCounter(5);
    expect(changeResult).toEqual("This would be 20 quarters");
  });
});