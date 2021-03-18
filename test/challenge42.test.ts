// Create a function that will return a Boolean value indicating if two circles defined 
// by center coordinates and radius are intersecting

import { expect } from 'chai'
import { collisionCircleCircle } from '../src/challenge42'

describe('Will return a Boolean value indicating if two circles defined are intersecting', function() {
  describe('#collisionCircleCircle()', function() {
    it('should return a Boolean value indicating if two circles defined are intersecting', function() {
      expect(collisionCircleCircle(200, 200, 100, 300, 300, 50)).to.deep.equal(true);
    });
  });
});
