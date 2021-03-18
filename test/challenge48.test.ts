// Create a function to return the longest word(s) in a string

import { expect } from 'chai'
import { getLongestWords } from '../src/challenge48'

const text = 'Create a function to return the longest word(s) in a sentence';

describe('Will return the longest word(s) in a string', function() {
  describe('#getLongestWords()', function() {
    it('should return the longest word(s) in a string', function() {
      expect(getLongestWords(text)).to.deep.equal(['function','sentence']);
    });
  });
});
