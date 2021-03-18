// Calculate the sum of all the numbers in a jagged array 
// (array contains numbers or other arrays of numbers on
// an unlimited number of levels

import { expect } from 'chai'
import { sumArray } from '../src/challenge45'

const ar = [1, 2, [15, [23], [5, 12]], [100]];

describe('Will calculate the sum of all the numbers in a jagged array', function() {
  describe('#sumArray()', function() {
    it('should calculate the sum of all the numbers in a jagged array', function() {
      expect(sumArray(ar)).to.deep.equal(158);
    });
  });
});
