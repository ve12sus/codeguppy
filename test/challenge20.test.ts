// Rotate an array to the left 1 position

import { expect } from 'chai'
import { rotateLeft } from '../src/challenge20'

describe('Rotate an array to the left 1 position', function() {
  describe('#rotateLeft()', function() {
    it('should Rotate an array to the left 1 position', function() {
      expect(rotateLeft([1,2,3])).to.deep.equal([2,3,1]);
    });
  });
});