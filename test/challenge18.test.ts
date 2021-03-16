// Print the first 100 prime numbers

import { expect } from 'chai'
import { printPrimes } from '../src/challenge18'

describe('Print the first 100 prime numbers', function() {
  describe('#printPrimes()', function() {
    it('should print the first 100 prime numbers', function() {
      expect(printPrimes(5)).to.deep.equal([2,3,5,7,11]);
    });
  });
});