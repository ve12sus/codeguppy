// Implement the bubble sort algorithm for an array of numbers

import { expect } from 'chai'
import { bubbleSort } from '../src/challenge40'

const ar = [23, 1000, 1, -1, 8, 3];

describe('Will Implement the bubble sort algorithm for an array of numbers', function() {
  describe('#bubbleSort()', function() {
    it('should implement the bubble sort algorithm for an array of numbers', function() {
      expect(bubbleSort(ar)).to.deep.equal([-1, 1, 3, 8, 23, 1000]);
    });
  });
});
