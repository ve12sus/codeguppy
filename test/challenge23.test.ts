// Reverse a string

import { expect } from 'chai'
import { reverseString } from '../src/challenge23'

describe('Reverse a string', function() {
  describe('#reverseString()', function() {
    it('should reverse a string', function() {
      expect(reverseString('hello')).to.deep.equal('olleh');
    });
  });
});
