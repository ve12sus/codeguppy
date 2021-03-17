// Print the first 10 Fibonacci numbers using recursion.

import { expect } from 'chai'
import { getFibs } from '../src/challenge15'

describe('Print the first 10 Fibonacci numbers using recursion', function() {
  describe('#getFibs()', function() {
    it('should print the first 10 Fibonacci numbers using recursion', function() {
      expect(getFibs(9)).to.deep.equal(34);
    });
  });
});
