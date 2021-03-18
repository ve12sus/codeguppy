// Create a function that will convert a string in an array containing the ASCII
// codes of each character

import { expect } from 'chai'
import { getCharCodes } from '../src/challenge37'

describe('Will convert a string in an array containing the ASCII codes', function() {
  describe('#getCharCodes()', function() {
    it('should convert a string in an array containing the ASCII codes', function() {
      expect(getCharCodes("I like JavaScript").length).to.deep.equal(17);
    });
  });
});
