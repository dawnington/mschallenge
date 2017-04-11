/* eslint-env jest */
import { currencyFormat, lastMonths } from '../../frontend/utils/revenueUtils';

describe('currencyFormat', function() {
  it('should take in a number and return it formatted into currency', function() {
    expect(currencyFormat(5.56)).toEqual('$5.56');
  })
})

describe('lastMonths', function() {
  it('should take in a number x and return the last x months starting from the current month', function() {
    const threeMonths = lastMonths(3);
    const sixMonths = lastMonths(6);

    expect(threeMonths).toEqual([[], ['February', 'March', 'April']]);
    expect(sixMonths).toEqual([['November', 'December'], ['January', 'February', 'March', 'April']]);
  })
})
