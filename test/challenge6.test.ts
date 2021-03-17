// // calculate 10!

import { expect } from 'chai'
import { factorial } from '../src/challenge6'

describe('print and calculate the sum of numbers from 1 to 10', function() {
  describe('#factorial()', function() {
    it('should print and calculate the sum of numbers from 1 to 10', function() {
      expect(factorial(10)).to.deep.equal(3628800);
    });
  });
});
