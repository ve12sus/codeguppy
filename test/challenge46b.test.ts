// Find the maximum number in a jagged array of 
// numbers or array of numbers Requirements: Do not use recursion

import { expect } from 'chai'
import { findMax } from '../src/challenge46b'

const ar = [1, 2, [15, [23], [5, 12]], [100]];

describe('Will find the maximum number in a jagged array of numbers', function() {
  describe('#findMax()', function() {
    it('should find the maximum number in a jagged array of numbers', function() {
      expect(findMax(ar)).to.deep.equal(100);
    });
  });
});
