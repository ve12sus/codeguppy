// Create a function that will receive two arrays of numbers as arguments
// and return an array composed of all the numbers that are either in the
// first array or second array but not in both

import { expect } from 'chai'
import { mergeExclusive } from '../src/challenge25'

describe('Create a function that will merge two arrays exclusively', function() {
  describe('#mergeExclusive()', function() {
    it('should merge two arrays exclusively', function() {
      expect(mergeExclusive([1,2,3],[1,2,6])).to.deep.equal([3,6]);
    });
  });
});