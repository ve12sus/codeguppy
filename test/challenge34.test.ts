// Create a function that will return an array with words inside a text

import { expect } from 'chai'
import { getWords } from '../src/challenge34'

describe('Will return an array with words inside a text', function() {
  describe('#getWords()', function() {
    it('should return an array with words inside a text', function() {
      expect(getWords('hello world typescript')).to.deep.equal(['hello','world','typescript']);
    });
  });
});
