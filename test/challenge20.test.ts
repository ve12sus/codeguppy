// Rotate an array to the left 1 position

import { expect } from 'chai'
import { rotateLeft } from '../src/challenge20'

describe('Print the first 100 prime numbers', function() {
  describe('#rotateLeft()', function() {
    it('should print the first 100 prime numbers', function() {
      expect(rotateLeft([1,2,3])).to.deep.equal([2,3,1]);
    });
  });
});