// Create a function that will receive two arrays and will return an array 
// with elements that are in the first array but not in the second

import { expect } from 'chai'
import { mergeLeft } from '../src/challenge26'

describe('Create a function that will merge two arrays with elements in the first', function() {
  describe('#mergeLeft()', function() {
    it('should merge two arrays with elements in the first', function() {
      expect(mergeLeft([1,2,3,5,7],[1,2,3,4,6])).to.deep.equal([5,7]);
    });
  });
});