import { coinCounter } from '../src/js/CoinCounter.js';

describe('coinCounter', () => {
  test('it takes in a dollar amount and should return a string stating the dollar amount broken up into change', () => {
    const changeResult = coinCounter(5, 0, []
      );
    expect(changeResult).toEqual("This would be 20 quarters, 0 dimes, 0 nickels, and 0 pennies");
  });
});