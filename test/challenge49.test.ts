//  Shuffle an array of strings

import { expect } from 'chai'
import { shuffleArray } from '../src/challenge49'

const ar = ['shuffle', 'an', 'array', 'of', 'strings'];

describe('Will shuffle an array of strings', function() {
  describe('#shuffleArray()', function() {
    it('should shuffle an array of strings', function() {
      expect(shuffleArray(ar).length).to.deep.equal(5);
    });
  });
});
