// Create a function that will receive an array of numbers as argument and
// will return a new array with distinct elements

import { expect } from 'chai'
import { getDisctinctElements } from '../src/challenge27a'

describe('Create a function that will return a new array with distinct elements', function() {
  describe('#getDisctinctElements()', function() {
    it('should return a new array with distinct elements', function() {
      expect(getDisctinctElements([1,2,3,5,7,1,2,3,4,6,1,2])).to.deep.equal([1,2,3,5,7,4,6]);
    });
  });
});
