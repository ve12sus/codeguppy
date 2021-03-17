//  Calculate the sum of first 100 prime numbers

import { expect } from 'chai'
import { sumPrimes } from '../src/challenge28'

describe('Calculate the sum of first 10 prime numbers', function() {
  describe('#sumPrimes()', function() {
    it('should return the sum of first 10 prime numbers', function() {
      expect(sumPrimes(10)).to.deep.equal(129);
    });
  });
});