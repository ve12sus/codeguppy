// Create a function that will receive a bidimensional array as argument and a
// number and will extract as a unidimensional array the column specified by the number

import { expect } from 'chai'
import { extractCol } from '../src/challenge43'

const ar = [['John', 120],['Jane', 115],['Thomas', 123],['Mel', 112],['Charley', 122]];

describe('Will extract as a unidimensional array the column specified by the number', function() {
  describe('#extractCol()', function() {
    it('should extract as a unidimensional array the column specified by the number', function() {
      expect(extractCol(ar, 1)).to.deep.equal(true);
    });
  });
});
