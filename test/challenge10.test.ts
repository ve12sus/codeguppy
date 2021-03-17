// calculate the sum of numbers in an array of numbers

import { expect } from 'chai'
import { sumArray } from '../src/challenge10'

describe('calculate the sum of numbers in an array of numbers', function() {
  describe('#sumArray()', function() {
    it('should calculate the sum of numbers in an array of numbers', function() {
      expect(sumArray([1,2,3])).to.deep.equal(6);
    });
  });
});
