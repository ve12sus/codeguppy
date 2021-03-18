// Create a function that will convert a string containing a binary number into a number

import { expect } from 'chai'
import { binaryToNumber } from '../src/challenge44'

describe('Will convert a string containing a binary number into a number', function() {
  describe('#binaryToNumber()', function() {
    it('should convert a string containing a binary number into a number', function() {
      expect(binaryToNumber('11111111')).to.deep.equal(255);
    });
  });
});
