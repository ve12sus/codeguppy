// Print the first 10 Fibonacci numbers without using recursion.

import { expect } from 'chai'
import { getFibs } from '../src/challenge14'

describe('Print the first 10 Fibonacci numbers without using recursion', function() {
  describe('#getFibs()', function() {
    it('should print the first 10 Fibonacci numbers without using recursion', function() {
      expect(getFibs(9)).to.deep.equal([0,1,1,2,3,5,8,13,21,34]);
    });
  });
});