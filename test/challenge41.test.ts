// Calculate the distance between two points defined by their x, y coordinates

import { expect } from 'chai'
import { getDistance } from '../src/challenge41'

describe('Will calculate the distance between two points defined by their x, y coordinates', function() {
  describe('#getDistance()', function() {
    it('should calculate the distance between two points defined by their x, y coordinates', function() {
      expect(getDistance(100, 100, 400, 300)).to.deep.equal(360.5551275463989);
    });
  });
});
