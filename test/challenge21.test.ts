// Rotate an array to the right 1 position

import { expect } from 'chai'
import { rotateRight } from '../src/challenge21'

describe('Rotate an array to the right 1 position', function() {
  describe('#rotateRight()', function() {
    it('should Rotate an array to the right 1 position', function() {
      expect(rotateRight([1,2,3])).to.deep.equal([3,1,2]);
    });
  });
});