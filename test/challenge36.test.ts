// Create a function that converts a string to an array of characters

import { expect } from 'chai'
import { getChars } from '../src/challenge36'

describe('Will convert a string to an array of characters', function() {
  describe('#getChars()', function() {
    it('should convert a string to an array of characters', function() {
      expect(getChars("I like JavaScript").length).to.deep.equal(17);
    });
  });
});
