// Deep copy a jagged array with numbers or other arrays in a new array

import { expect } from 'chai'
import { copyArray } from '../src/challenge47'

const ar = [1, 2, [15, [23], [5, 12]], [100]];

describe('Will deep copy a jagged array with numbers or other arrays in a new array', function() {
  describe('#copyArray()', function() {
    it('should deep copy a jagged array with numbers or other arrays in a new array', function() {
      expect(copyArray(ar)).to.deep.equal([1, 2, [15, [23], [5, 12]], [100]]);
    });
  });
});
