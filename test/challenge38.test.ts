// Create a function that will convert an array containing ASCII codes in a string

import { expect } from 'chai'
import { codesToString } from '../src/challenge38'

const data = [73,32,108,105,107,101,32,74,97,118,97,83,99,114,105,112,116];

describe('Will convert a string in an array containing the ASCII codes', function() {
  describe('#codesToString()', function() {
    it('should convert a string in an array containing the ASCII codes', function() {
      expect(codesToString(data)).to.deep.equal('I like JavaScript');
    });
  });
});
