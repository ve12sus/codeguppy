// Reverse an array

import { expect } from 'chai'
import { reverseArray } from '../src/challenge22'

describe('Reverse an array', function() {
  describe('#reverseArray()', function() {
    it('should reverse an array', function() {
      expect(reverseArray([1,2,3])).to.deep.equal([3,2,1]);
    });
  });
});
