// Find the maximum number in an array of numbers

import { expect } from 'chai'
import { findMax } from '../src/challenge13'

describe('Find the maximum number in an array of numbers', function() {
  describe('#findMax()', function() {
    it('should find the maximum number in an array of numbers', function() {
      expect(findMax([-1,2,-3])).to.deep.equal(2);
    });
  });
});