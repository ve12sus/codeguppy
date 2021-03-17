// Create a function that will merge two arrays and return the result

import { expect } from 'chai'
import { mergeArrays } from '../src/challenge24'

describe('Create a function that will merge two arrays', function() {
  describe('#mergeArrays()', function() {
    it('should create a function that will merge two arrays', function() {
      expect(mergeArrays([1,2,3],[4,5,6])).to.deep.equal([1,2,3,4,5,6]);
    });
  });
});